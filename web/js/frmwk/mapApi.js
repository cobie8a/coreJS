/**
 * @author chris a <cobie8a@yahoo.com>
 * original code date - February 2013
 *
 * mapApi acts as a facade to the javascript implementation of another mapping API (GMaps, OL, etc)
 * and requires prototypal inheritance to obscure methods from functions.js and events.js.  All the
 * hard work and heavy lifting on the mapping APIs are done by the map API facades:
 *
 * @see olFacade.js
 *
 * note:  We will not be supporting deprecated mapping APIs (ie - GMaps v2) unless absolutely necessary
 */

core.namespace('viewer.impl');

viewer.impl.MapAPI = ( function() {
    /**
     * basically, return a facade based off conditionals
     * from another class (see above)
     */

    var log = viewer.frmwk.Logger.set('MapAPI');

    var Proto = new core.createClass({
        log: viewer.frmwk.Logger.set('Proto'),
        _mapObj: undefined,

        constructor: function() {
            this._mapObj = viewer.globals.coreViewer.getGlobalMapObj();
            this.log('constructor');
        },
        getMapType: function() {
            this.log('getMapType');
            var path = '';
            if(undefined!=this._mapObj && this._mapObj.CLASS_NAME=='OpenLayers.Map') {
                path = viewer.globals.coreViewer.getJSLocation() + 'impl/olFacade.js';
                core.loadJS(path, function() {
                    resumeLoadJS();
                });
                this.log('loading ' + path);
                return viewer.api.StringConstants._OPENLAYERS;
//            } else if(this._mapObj instanceof google.maps.Map) {    return 'Google Maps';
            } else {
                return undefined;       //couldn't find at all!
            }
        }
    });

    var mapType =  new Proto().getMapType();
    var mapFacade = 'uninitialized object';

    function resumeLoadJS() {
        switch(mapType) {
            case    viewer.api.StringConstants._OPENLAYERS  :       mapFacade = viewer.impl.OLFacade;   break;
            default                                         :       mapFacade = undefined;              break;
        };
        viewer.globals.coreViewer._resumeMapApiLoad();
        log('resumeLoadJS');
    }

    return {
        getObj: function() {    return mapFacade;   }
    };
} )();