# coreJS
An early experimental JavaScript framework for use with other frameworks (from February 2013).  Took from my old personal SVN repo, and sharing with the larger github community.  It only took seven years huh?

* uses a Facade pattern, with the intent of centralizing all common commands between multiple JS libraries to a central dispatcher, similar to an OS scheduling scheme
* utilizes early versions of what ultimately became Asynchronous Module Definition in JS.  RequireJS and AngularJS became the defacto AMD libraries in 2014, though this is much much simpler.  NodeJS also became more complex over time.  Some of these frameworks are still in use today.
* ECMAScript has since adopted multiple standards to make JS more aligned with traditional OOO languages - though in 2020, I understand these are still experimental.

Note:
* you will have to download your own OpenLayers JS - I kept a skeleton of OL v2.11 (I told you it was from 2013).  Get a copy here: https://github.com/openlayers/openlayers/releases/tag/v5.3.0
