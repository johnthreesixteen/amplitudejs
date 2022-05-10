(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Amplitude", [], factory);
	else if(typeof exports === 'object')
		exports["Amplitude"] = factory();
	else
		root["Amplitude"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./package.json");
/**
 * These variables make Amplitude run. The config is the most important
 * containing active settings and parameters.
 *
 * The config JSON is the global settings for ALL of Amplitude functions.
 * This is global and contains all of the user preferences. The default
 * settings are set, and the user overwrites them when they initialize
 * Amplitude.
 *
 * @module config
 * @type {object}
 * @property {string}  	config.version          				- The current version of AmplitudeJS.
 * @property {object} 	config.audio_element 		 				-	Handles all of the audio.
 * @property {object} 	config.active_metadata					- Contains the active metadata for the song.
 * @property {string} 	config.active_album							- Holds the active album name. Used to check and see if the album changed and run the album changed callback.
 * @property {number} 	config.active_index							- Contains the index of the actively playing song.
 * @property {string} 	config.active_playlist					- Contains the key to the active playlist index.
 * @property {number} 	config.playback_speed						- Sets the initial playback speed of the song. The values for this can be 1.0, 1.5, 2.0
 * @property {object} 	config.callbacks								- The user can pass a JSON object with a key => value store of callbacks to be run at certain events.
 * @property {array} 		config.songs										- Contains all of the songs the user has passed to Amplitude to use.
 * @property {object} 	config.playlists								- Contains all of the playlists the user created.
 * @property {object} 	config.start_song 							- The index of the song that AmplitudeJS should start with.
 * @property {string} 	config.starting_playlist 				- The starting playlist the player will intiialize to.
 * @property {string} 	config.starting_playlist_song 	- The index of the song in the playlist that should be started.
 * @property {boolean} 	config.repeat 									- When repeat is on, when the song ends the song will replay itself.
 * @property {object} 	config.shuffle_list							- When shuffled, gets populated with the songs the user provided in a random order.
 * @property {boolean} 	config.shuffle_on								- When on, gets set to true so when traversing through songs, AmplitudeJS knows whether or not to use the songs object or the shuffle_list
 * @property {string}		config.default_album_art 				- The user can set default album art to be displayed if the song they set doesn't contain album art.
 * @property {string} 	config.default_playlist_art 		- The user can set default playlist art to be displayed if the playlist they are setting meta data for doesn't contain an art picture.
 * @property {boolean} 	config.debug										- When set to true, AmplitudeJS will print to the console any errors providing helpful feedback to the user.
 * @property {number} 	config.volume 									- The user can set the initial volume to a number between 0 and 1 over-riding the default of .5
 * @property {number} 	config.pre_mute_volume 					- This is set on mute so that when a user un-mutes AmplitudeJS knows what to restore the volume to.
 * @property {number}		config.volume_increment 				- The default values are an integer between 1 and 100 for how much the volume should increase when the user presses the volume up button.
 * @property {number}		config.volume_decrement 				- The default values are an integer between 1 and 100 for how much the volume should decrease when the user presses the volume down button.
 * @property {string} 	config.soundcloud_client 				- When using SoundCloud, the user will have to provide their API Client ID
 * @property {boolean} 	config.soundcloud_use_art 			- The user can set this to true and AmplitudeJS will use the album art for the song returned from the Soundcloud API
 * @property {number} 	config.soundcloud_song_count 		- Used on config to count how many songs are from Soundcloud and compare it to how many are ready for when to move to the rest of the configuration
 * @property {number} 	config.soundcloud_songs_ready 	- Used on config to count how many songs are ready so when we get all of the data from the SoundCloud API that we need this should match the SoundCloud song count meaning we can move to the rest of the config.
 * @property {integer}	config.is_touch_moving 					- Flag for if the user is moving the screen.
 * @property {boolean}	config.buffered									- How much of the song is buffered.
 * @property {object} 	config.bindings									- Array of bindings to certain key events.
 * @property {boolean} 	config.continue_next 						- Determines when a song ends, we should continue to the next song.
 * @property {number}   config.delay 										- Sets the delay between songs in MS.
 * @property {boolean}  config.use_web_audio_api 				- Flag that determines if the user wants to use Web Audio API Components.
 * @property {boolean}  config.web_audio_api_available  - Flag that determines if the Web Audio API is available.
 * @property {object}  	config.context 									- Web Audio API Context
 * @property {object}		config.source 									- Web Audio API Source
 * @property {object} 	config.analyser 								- Web Audio API Analyser
 * @property {string}		config.player_state 						- The current state of the player.
 */

var config = {
  version: _package_json__WEBPACK_IMPORTED_MODULE_0__,
  mobile: false,
  audio_element: new Audio(),
  active_metadata: {},
  active_album: "",
  active_index: 0,
  active_podcast: null,
  active_playlist: null,
  active_collection: null,
  playback_speed: 1.0,
  callbacks: {},
  songs: [],
  episodes: [],
  audio: [],
  playlists: [],
  seasons: [],
  podcasts: [],
  start_audio: "",
  starting_playlist: "",
  starting_playlist_song: "",
  starting_podcast: "",
  starting_podcast_episode: "",
  repeat: false,

  /**
   * @todo BREAKING should be repeat_audio
   */
  // repeat_song: false,
  repeat_audio: false,
  shuffle_list: {},
  shuffle_on: false,
  default_artwork: "",
  default_playlist_art: "",
  debug: true,

  /**
   * @todo BREAKING CHANGE
   */
  volume: {
    initial: 0.5,
    increment: 5,
    decrement: 5,
    pre_mute_level: 0.5
  },
  //   volume: 0.5,
  //   pre_mute_volume: 0.5,
  //   volume_increment: 5,
  //   volume_decrement: 5,

  /**
   * @todo BREAKING CHANGE
   */
  soundcloud: {
    client: '',
    use_art: false,
    audio_count: 0,
    ready_count: 0
  },
  // soundcloud_client: "",
  // soundcloud_use_art: false,
  // soundcloud_song_count: 0,
  // soundcloud_songs_ready: 0,
  is_touch_moving: false,
  buffered: 0,
  bindings: {},
  continue_next: true,
  delay: 0,
  player_state: "stopped",

  /**
   * @todo BREAKING
   */
  web_audio_api: {
    availabile: false,
    context: null,
    source: null,
    analyser: null
  },
  //   web_audio_api_available: false,
  //   context: null,
  //   source: null,
  //   analyser: null,
  visualizations: {
    available: [],
    active: [],
    backup: ""
  },
  waveforms: {
    sample_rate: 100,
    built: []
  }
};

/***/ }),

/***/ "./src/core/Audio.js":
/*!***************************!*\
  !*** ./src/core/Audio.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Audio": () => (/* binding */ Audio)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config.js */ "./src/config.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ConfigState */ "./src/services/ConfigState.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _startVisualizations = /*#__PURE__*/new WeakSet();

var _stopVisualizations = /*#__PURE__*/new WeakSet();

var _reconnectStream = /*#__PURE__*/new WeakSet();

var _disconnectStream = /*#__PURE__*/new WeakSet();

var _playAudio = /*#__PURE__*/new WeakSet();

var _pauseAudio = /*#__PURE__*/new WeakSet();

var _setCurrentTime = /*#__PURE__*/new WeakSet();

var _setMuted = /*#__PURE__*/new WeakSet();

var _setAudioVolume = /*#__PURE__*/new WeakSet();

var Audio = /*#__PURE__*/function () {
  function Audio() {
    _classCallCheck(this, Audio);

    _classPrivateMethodInitSpec(this, _setAudioVolume);

    _classPrivateMethodInitSpec(this, _setMuted);

    _classPrivateMethodInitSpec(this, _setCurrentTime);

    _classPrivateMethodInitSpec(this, _pauseAudio);

    _classPrivateMethodInitSpec(this, _playAudio);

    _classPrivateMethodInitSpec(this, _disconnectStream);

    _classPrivateMethodInitSpec(this, _reconnectStream);

    _classPrivateMethodInitSpec(this, _stopVisualizations);

    _classPrivateMethodInitSpec(this, _startVisualizations);
  }

  _createClass(Audio, [{
    key: "play",
    value: function play() {
      _classPrivateMethodGet(this, _startVisualizations, _startVisualizations2).call(this);

      _classPrivateMethodGet(this, _reconnectStream, _reconnectStream2).call(this);

      _classPrivateMethodGet(this, _playAudio, _playAudio2).call(this);

      _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.setPlayerState();
    }
  }, {
    key: "pause",
    value: function pause() {
      _classPrivateMethodGet(this, _stopVisualizations, _stopVisualizations2).call(this);

      _classPrivateMethodGet(this, _pauseAudio, _pauseAudio2).call(this);

      _classPrivateMethodGet(this, _disconnectStream, _disconnectStream2).call(this);

      _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.setPlayerState();
    }
  }, {
    key: "stop",
    value: function stop() {
      _classPrivateMethodGet(this, _stopVisualizations, _stopVisualizations2).call(this);

      _classPrivateMethodGet(this, _setCurrentTime, _setCurrentTime2).call(this, 0);

      _classPrivateMethodGet(this, _pauseAudio, _pauseAudio2).call(this);

      _classPrivateMethodGet(this, _disconnectStream, _disconnectStream2).call(this);

      _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.setPlayerState();
      /**
       * @todo run stop callback
       */
    }
    /**
     * 
     * @param {number} volumeLevel - A number between 1 - 100 as percentage of volume.
     */

  }, {
    key: "setVolume",
    value: function setVolume(volumeLevel) {
      _classPrivateMethodGet(this, _setMuted, _setMuted2).call(this, volumeLevel);

      _classPrivateMethodGet(this, _setAudioVolume, _setAudioVolume2).call(this, volumeLevel);
    }
  }, {
    key: "setAudioLocation",
    value: function setAudioLocation(percentage) {
      if (!_config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata.live) {
        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.currentTime = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.duration * (percentage / 100);
      }
    }
  }, {
    key: "setPlaybackSpeed",
    value: function setPlaybackSpeed(playbackSpeed) {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.playback_speed = playbackSpeed;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.playbackRate = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.playback_speed;
    }
  }]);

  return Audio;
}();

function _startVisualizations2() {// Visualizations.stop();
  // Visualizations.run();
}

function _stopVisualizations2() {// Visualizations.stop();
}

function _reconnectStream2() {
  /*
      Mobile remote sources need to be reconnected on play. I think this is
      because mobile browsers are optimized not to load all resources
      for speed reasons. We only do this if mobile and the paused button
      is not clicked. If the pause button was clicked then we don't reconnect
      or the user will lose their place in the stream.
  */
  if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata.live || _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile() && !_config_js__WEBPACK_IMPORTED_MODULE_0__.config.paused) {
    _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.src = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata.url;
    _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.load();
  }
}

function _disconnectStream2() {
  if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata.live) {
    _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.src = "";
    _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.load();
  }
}

function _playAudio2() {
  var playPromise = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.play();

  if (playPromise !== undefined) {
    playPromise.then(function (_) {})["catch"](function (error) {});
  }

  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.playbackRate = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.playback_speed;
}

function _pauseAudio2() {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.pause();
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.paused = true;
}

function _setCurrentTime2(seconds) {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.currentTime = seconds;
}

function _setMuted2(volumeLevel) {
  if (volumeLevel == 0) {
    _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.muted = true;
  } else {
    _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.muted = false;
  }
}

function _setAudioVolume2(volumeLevel) {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.volume = volumeLevel;
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.volume = volumeLevel / 100;
}

/***/ }),

/***/ "./src/elements/MetaDataElement.js":
/*!*****************************************!*\
  !*** ./src/elements/MetaDataElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaDataElement": () => (/* binding */ MetaDataElement)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _imageMetaDataKeys = /*#__PURE__*/new WeakMap();

var _displayGlobalMetaElements = /*#__PURE__*/new WeakSet();

var _displayCollectionMetaElements = /*#__PURE__*/new WeakSet();

var _displayAudioMetaElements = /*#__PURE__*/new WeakSet();

var _displayCollectionAudioMetaElements = /*#__PURE__*/new WeakSet();

var _setMetaValue = /*#__PURE__*/new WeakSet();

var MetaDataElement = /*#__PURE__*/function () {
  function MetaDataElement() {
    _classCallCheck(this, MetaDataElement);

    _classPrivateMethodInitSpec(this, _setMetaValue);

    _classPrivateMethodInitSpec(this, _displayCollectionAudioMetaElements);

    _classPrivateMethodInitSpec(this, _displayAudioMetaElements);

    _classPrivateMethodInitSpec(this, _displayCollectionMetaElements);

    _classPrivateMethodInitSpec(this, _displayGlobalMetaElements);

    _classPrivateFieldInitSpec(this, _imageMetaDataKeys, {
      writable: true,
      value: ["cover_art_url", "station_art_url", "podcast_episode_cover_art_url", "album_art_url"]
    });
  }

  _createClass(MetaDataElement, [{
    key: "displayMetaData",
    value:
    /**
     * Gets called after audio has been changed. Updates all of the global
     * elements and collection elements, not the individual audio elements.
     * Individual audio elements should only be dynamically set once and not again
     * since they never change.
     * 
     * Examples:
     * Update - Global cover art for a song.
     * Update - Playlist now playing cover art.
     * Update - Podcast now playing cover art.
     * Do Not Update - Individual audio element. These will be set with syncMetaData()
     * and won't need to be updated again.
     */
    function displayMetaData() {
      _classPrivateMethodGet(this, _displayGlobalMetaElements, _displayGlobalMetaElements2).call(this);

      _classPrivateMethodGet(this, _displayCollectionMetaElements, _displayCollectionMetaElements2).call(this);
    }
  }, {
    key: "displayCollectionMetaData",
    value: function displayCollectionMetaData() {}
  }, {
    key: "syncMetaData",
    value: function syncMetaData() {
      _classPrivateMethodGet(this, _displayAudioMetaElements, _displayAudioMetaElements2).call(this);

      _classPrivateMethodGet(this, _displayCollectionAudioMetaElements, _displayCollectionAudioMetaElements2).call(this);

      this.displayCollectionMetaData();
    }
  }]);

  return MetaDataElement;
}();

function _displayGlobalMetaElements2() {
  var _this = this;

  var globalAudioInfoElements = document.querySelectorAll(MetaDataElement.globalMetaDataElementsQuery);
  globalAudioInfoElements.forEach(function (element) {
    var key = element.getAttribute('data-amplitude-audio-info');
    var value = _config__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata[key] != undefined ? _config__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata[key] : null;

    _classPrivateMethodGet(_this, _setMetaValue, _setMetaValue2).call(_this, key, value, element);
  });
}

function _displayCollectionMetaElements2() {
  var _this2 = this;

  var collectionInfoElements = document.querySelectorAll(MetaDataElement.collectionMetaDataElementsQuery);
  collectionInfoElements.forEach(function (element) {
    var key = element.getAttribute('data-amplitude-audio-info');
    var value = _config__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata[key] != undefined ? _config__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata[key] : null;

    _classPrivateMethodGet(_this2, _setMetaValue, _setMetaValue2).call(_this2, key, value, element);
  });
}

function _displayAudioMetaElements2() {
  var _this3 = this;

  var audioInfoElements = document.querySelectorAll(MetaDataElement.audioMetaDataElementsQuery);
  audioInfoElements.forEach(function (element) {
    var key = element.getAttribute('data-amplitude-audio-info');
    var audioIndex = element.getAttribute('data-amplitude-audio-index');
    var value = _config__WEBPACK_IMPORTED_MODULE_0__.config.audio[audioIndex][key] != undefined ? _config__WEBPACK_IMPORTED_MODULE_0__.config.audio[audioIndex][key] : null;

    _classPrivateMethodGet(_this3, _setMetaValue, _setMetaValue2).call(_this3, key, value, element);
  });
}

function _displayCollectionAudioMetaElements2() {
  var _this4 = this;

  var collectionAudioInfoElements = document.querySelectorAll(MetaDataElement.collectionAudioMetaDataElementsQuery);
  collectionAudioInfoElements.forEach(function (element) {
    var key = element.getAttribute('data-amplitude-audio-info');
    var audioIndex = element.getAttribute('data-amplitude-audio-index');
    var collectionKey = element.getAttribute('data-amplitude-collection-key');
    var value = _config__WEBPACK_IMPORTED_MODULE_0__.config.collections[collectionKey].audio[audioIndex][info] != undefined ? _config__WEBPACK_IMPORTED_MODULE_0__.config.collections[collectionKey].audio[audioIndex][info] : null;

    _classPrivateMethodGet(_this4, _setMetaValue, _setMetaValue2).call(_this4, key, value, element);
  });
}

function _setMetaValue2(key, value, element) {
  if (_classPrivateFieldGet(this, _imageMetaDataKeys).indexOf(key) >= 0) {
    value = value || _config__WEBPACK_IMPORTED_MODULE_0__.config.default_art;
    element.setAttribute('src', value);
  } else {
    value = value || "";
    element.innerHTML = value;
  }
}

_defineProperty(MetaDataElement, "globalMetaDataElementsQuery", '[data-amplitude-audio-info]:not([data-amplitude-audio-index]):not([data-amplitude-collection-key])');

_defineProperty(MetaDataElement, "collectionMetaDataElementsQuery", '[data-amplitude-audio-info][data-amplitude-collection-key]:not([data-amplitude-audio-index])');

_defineProperty(MetaDataElement, "audioMetaDataElementsQuery", '[data-amplitude-audio-info][data-amplitude-audio-index]:not([data-amplitude-collection-key])');

_defineProperty(MetaDataElement, "collectionAudioMetaDataElementsQuery", '[data-amplitude-audio-info][data-amplitude-audio-index][data-amplitude-collection-key]');

_defineProperty(MetaDataElement, "collectionInfoElementsQuery", '[data-amplitude-collection-info]');

/***/ }),

/***/ "./src/elements/NextElement.js":
/*!*************************************!*\
  !*** ./src/elements/NextElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextElement": () => (/* binding */ NextElement)
/* harmony export */ });
/* harmony import */ var _NextElements_CollectionNextElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NextElements/CollectionNextElement */ "./src/elements/NextElements/CollectionNextElement.js");
/* harmony import */ var _NextElements_GlobalNextElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NextElements/GlobalNextElement */ "./src/elements/NextElements/GlobalNextElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



/**
 * Handles the configuration and managing of Next elements
 * 
 * A Next element is defined as the following:
 * 
 * Element: class="amplitude-next"
 * 
 * GLOBAL: class="amplitude-next"
 * Handles next for whatever scope the player is in.
 * 
 * COLLECTION: class="amplitude-next" data-amplitude-collection="{collection_key}"
 * Handles the next audio within a specific collection.
 */

var _configureGlobalNextElement = /*#__PURE__*/new WeakSet();

var _configureCollectionNextElement = /*#__PURE__*/new WeakSet();

var NextElement = /*#__PURE__*/function () {
  function NextElement() {
    _classCallCheck(this, NextElement);

    _classPrivateMethodInitSpec(this, _configureCollectionNextElement);

    _classPrivateMethodInitSpec(this, _configureGlobalNextElement);
  }

  _createClass(NextElement, [{
    key: "setUp",
    value: function setUp() {
      _classPrivateMethodGet(this, _configureGlobalNextElement, _configureGlobalNextElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionNextElement, _configureCollectionNextElement2).call(this);
    }
  }]);

  return NextElement;
}();

function _configureGlobalNextElement2() {
  var globalNextElement = new _NextElements_GlobalNextElement__WEBPACK_IMPORTED_MODULE_1__.GlobalNextElement();
  globalNextElement.initialize();
}

function _configureCollectionNextElement2() {
  var collectionNextElement = new _NextElements_CollectionNextElement__WEBPACK_IMPORTED_MODULE_0__.CollectionNextElement();
  collectionNextElement.initialize();
}

/***/ }),

/***/ "./src/elements/NextElements/CollectionNextElement.js":
/*!************************************************************!*\
  !*** ./src/elements/NextElements/CollectionNextElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionNextElement": () => (/* binding */ CollectionNextElement)
/* harmony export */ });
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Collections/Navigation.js */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var CollectionNextElement = /*#__PURE__*/function () {
  function CollectionNextElement() {
    _classCallCheck(this, CollectionNextElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_0__.ConfigState.isMobile());
  }

  _createClass(CollectionNextElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return CollectionNextElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionNextElement.collectionnextQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  var collectionKey = this.attribute('data-amplitude-collection-key');

  if (collectionKey == _config__WEBPACK_IMPORTED_MODULE_2__.config.active_collection) {
    _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_1__.Navigation.next(collectionKey);
  } else {
    _utilities_debug__WEBPACK_IMPORTED_MODULE_3__.Debug.writeMessage("You can not go to the next song on a playlist that is not being played!");
  }
}

_defineProperty(CollectionNextElement, "collectionNextQuery", '.amplitude-next[data-amplitude-collection-key]');

/***/ }),

/***/ "./src/elements/NextElements/GlobalNextElement.js":
/*!********************************************************!*\
  !*** ./src/elements/NextElements/GlobalNextElement.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalNextElement": () => (/* binding */ GlobalNextElement)
/* harmony export */ });
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Collections/Navigation.js */ "./src/services/Collections/Navigation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var GlobalNextElement = /*#__PURE__*/function () {
  function GlobalNextElement() {
    _classCallCheck(this, GlobalNextElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_0__.ConfigState.isMobile());
  }

  _createClass(GlobalNextElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return GlobalNextElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(GlobalNextElement.globalPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (_services_ConfigState__WEBPACK_IMPORTED_MODULE_0__.ConfigState.getScope() == 'collection') {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    collectionNavigation.next();
  } else {
    _utilities_debug__WEBPACK_IMPORTED_MODULE_1__.Debug.writeMessage("You can only navigate next when you are playing a collection.");
  }
}

_defineProperty(GlobalNextElement, "globalNextQuery", '.amplitude-next:not([data-amplitude-collection-key])');

/***/ }),

/***/ "./src/elements/PauseElement.js":
/*!**************************************!*\
  !*** ./src/elements/PauseElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PauseElement": () => (/* binding */ PauseElement)
/* harmony export */ });
/* harmony import */ var _PauseElements_GlobalPauseElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PauseElements/GlobalPauseElement */ "./src/elements/PauseElements/GlobalPauseElement.js");
/* harmony import */ var _PauseElements_CollectionPauseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PauseElements/CollectionPauseElement */ "./src/elements/PauseElements/CollectionPauseElement.js");
/* harmony import */ var _PauseElements_AudioPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PauseElements/AudioPauseElement */ "./src/elements/PauseElements/AudioPauseElement.js");
/* harmony import */ var _PauseElements_CollectionAudioPauseElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PauseElements/CollectionAudioPauseElement */ "./src/elements/PauseElements/CollectionAudioPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





/**
 * Handles the configuration and managing of Pause elements.
 * 
 * A Pause element is defined as the following:
 * 
 * Element: class="amplitude-pause"
 * 
 * GLOBAL: class="amplitude-pause"
 * Controls the entire state of the audio player.
 * 
 * COLLECTION: class="amplitude-pause" data-amplitude-collection="{collection_key}"
 * Scoped to an individual collection. Will only pause what's within the scope of the collection.
 * 
 * AUDIO: class="amplitude-pause" data-amplitude-audio-index="{audio_index}"
 * Scoped to an individual audio element.
 * 
 * AUDIO IN COLLECTION: class="amplitude-pause" data-amplitude-collection-key="{collection_key}" data-amplitude-audio-index="{audio_index}"
 * Scoped to an individual audio element within a collection.
 */

var _configureGlobalPauseElement = /*#__PURE__*/new WeakSet();

var _configureCollectionPauseElement = /*#__PURE__*/new WeakSet();

var _configureAudioPauseElement = /*#__PURE__*/new WeakSet();

var _configureCollectionAudioPauseElement = /*#__PURE__*/new WeakSet();

var PauseElement = /*#__PURE__*/function () {
  function PauseElement() {
    _classCallCheck(this, PauseElement);

    _classPrivateMethodInitSpec(this, _configureCollectionAudioPauseElement);

    _classPrivateMethodInitSpec(this, _configureAudioPauseElement);

    _classPrivateMethodInitSpec(this, _configureCollectionPauseElement);

    _classPrivateMethodInitSpec(this, _configureGlobalPauseElement);
  }

  _createClass(PauseElement, [{
    key: "setUp",
    value: function setUp() {
      _classPrivateMethodGet(this, _configureGlobalPauseElement, _configureGlobalPauseElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionPauseElement, _configureCollectionPauseElement2).call(this);

      _classPrivateMethodGet(this, _configureAudioPauseElement, _configureAudioPauseElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionAudioPauseElement, _configureCollectionAudioPauseElement2).call(this);
    }
  }]);

  return PauseElement;
}();

function _configureGlobalPauseElement2() {
  var globalPauseElement = new _PauseElements_GlobalPauseElement__WEBPACK_IMPORTED_MODULE_0__.GlobalPauseElement();
  globalPauseElement.initialize();
}

function _configureCollectionPauseElement2() {
  var collectionPauseElement = new _PauseElements_CollectionPauseElement__WEBPACK_IMPORTED_MODULE_1__.CollectionPauseElement();
  collectionPauseElement.initialize();
}

function _configureAudioPauseElement2() {
  var audioPauseElement = new _PauseElements_AudioPauseElement__WEBPACK_IMPORTED_MODULE_2__.AudioPauseElement();
  audioPauseElement.initialize();
}

function _configureCollectionAudioPauseElement2() {
  var collectionAudioPauseElement = new _PauseElements_CollectionAudioPauseElement__WEBPACK_IMPORTED_MODULE_3__.CollectionAudioPauseElement();
  collectionAudioPauseElement.initialize();
}

/***/ }),

/***/ "./src/elements/PauseElements/AudioPauseElement.js":
/*!*********************************************************!*\
  !*** ./src/elements/PauseElements/AudioPauseElement.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPauseElement": () => (/* binding */ AudioPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var AudioPauseElement = /*#__PURE__*/function () {
  function AudioPauseElement() {
    _classCallCheck(this, AudioPauseElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile());
  }

  _createClass(AudioPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return AudioPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(AudioPauseElement.audioPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isTouchMoving()) {
    var audioIndex = this.attribute('data-amplitude-audio-index'); // If the scope is audio and the index of the element matches the active audio
    // index, then we pause the player.

    if (_services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.getScope() == 'audio' && _config__WEBPACK_IMPORTED_MODULE_3__.config.active_index == audioIndex) {
      var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
      audio.pause();
      _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.PlayPauseElement.syncAll();
    }
  }
}

_defineProperty(AudioPauseElement, "audioPauseQuery", ".amplitude-pause[data-amplitude-audio-index]:not([data-amplitude-collection-key])");

/***/ }),

/***/ "./src/elements/PauseElements/CollectionAudioPauseElement.js":
/*!*******************************************************************!*\
  !*** ./src/elements/PauseElements/CollectionAudioPauseElement.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionAudioPauseElement": () => (/* binding */ CollectionAudioPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var CollectionAudioPauseElement = /*#__PURE__*/function () {
  function CollectionAudioPauseElement() {
    _classCallCheck(this, CollectionAudioPauseElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile());
  }

  _createClass(CollectionAudioPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return CollectionAudioPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionAudioPauseElement.collectionAudioPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isTouchMoving()) {
    var collectionKey = this.attribute('data-amplitude-collection-key');
    var audioIndex = this.attribute('data-amplitude-audio-index');

    if (_config__WEBPACK_IMPORTED_MODULE_3__.config.active_collection == collectionKey && _config__WEBPACK_IMPORTED_MODULE_3__.config.collections[collectionKey].active_index == audioIndex) {
      var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
      audio.pause();
      _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.PlayPauseElement.syncAll();
    }
  }
}

_defineProperty(CollectionAudioPauseElement, "collectionAudioPauseQuery", '.amplitude-pause[data-amplitude-collection-key][data-amplitude-audio-index]');

/***/ }),

/***/ "./src/elements/PauseElements/CollectionPauseElement.js":
/*!**************************************************************!*\
  !*** ./src/elements/PauseElements/CollectionPauseElement.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionPauseElement": () => (/* binding */ CollectionPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var CollectionPauseElement = /*#__PURE__*/function () {
  function CollectionPauseElement() {
    _classCallCheck(this, CollectionPauseElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile());
  }

  _createClass(CollectionPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return CollectionPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionPauseElement.collectionPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isTouchMoving()) {
    var collectionKey = this.attribute('data-amplitude-collection-key'); // Ensure we pause the audio if the active collection is
    // what is controlled by this pause element.

    if (config.active_collection == collectionKey) {
      var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
      audio.pause();
      _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.PlayPauseElement.syncAll();
    }
  }
}

_defineProperty(CollectionPauseElement, "collectionPauseQuery", '.amplitude-pause[data-amplitude-collection-key]:not([data-amplitude-audio-index])');

/***/ }),

/***/ "./src/elements/PauseElements/GlobalPauseElement.js":
/*!**********************************************************!*\
  !*** ./src/elements/PauseElements/GlobalPauseElement.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalPauseElement": () => (/* binding */ GlobalPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var GlobalPauseElement = /*#__PURE__*/function () {
  function GlobalPauseElement() {
    _classCallCheck(this, GlobalPauseElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile());
  }

  _createClass(GlobalPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return GlobalPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(GlobalPauseElement.globalPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isTouchMoving()) {
    var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
    audio.pause();
    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.PlayPauseElement.syncAll();
  }
}

_defineProperty(GlobalPauseElement, "globalPauseQuery", '.amplitude-pause:not([data-amplitude-audio-index]):not([data-amplitude-collection-key])');

/***/ }),

/***/ "./src/elements/PlayElement.js":
/*!*************************************!*\
  !*** ./src/elements/PlayElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayElement": () => (/* binding */ PlayElement)
/* harmony export */ });
/* harmony import */ var _PlayElements_GlobalPlayElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayElements/GlobalPlayElement */ "./src/elements/PlayElements/GlobalPlayElement.js");
/* harmony import */ var _PlayElements_CollectionPlayElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayElements/CollectionPlayElement */ "./src/elements/PlayElements/CollectionPlayElement.js");
/* harmony import */ var _PlayElements_AudioPlayElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayElements/AudioPlayElement */ "./src/elements/PlayElements/AudioPlayElement.js");
/* harmony import */ var _PlayElements_CollectionAudioPlayElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayElements/CollectionAudioPlayElement */ "./src/elements/PlayElements/CollectionAudioPlayElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





/**
 * Handles the configuration and managing of the play elements.
 * 
 * A Play element is defined as the following:
 * 
 * Element: class="amplitude-play"
 * 
 * GLOBAL: class="amplitude-play"
 * Controls the entire state of the audio player. Will play whatever is active.
 * 
 * COLLECTION: class="amplitude-play" data-amplitude-collection-key="{collection_key}"
 * Scoped to an individual collection. Will only play within the collection.
 * 
 * AUDIO: class="amplitude-play" data-amplitude-audio-index="{audio_index}"
 * Scoped to an individual audio element. Will only play a specific piece of audio.
 * 
 * AUDIO IN COLLECTION: class="amplitude-play" data-amplitude-collection-key="{collection_key}" data-amplitude-audio-index="{audio_index}"
 * Scoped to an individual audio element within a collection. Will only play a specific piece of audio in a collection.
 */

var _configureGlobalPlayElement = /*#__PURE__*/new WeakSet();

var _configureCollectionPlayElement = /*#__PURE__*/new WeakSet();

var _configureAudioPlayElement = /*#__PURE__*/new WeakSet();

var _configureCollectionAudioPlayElement = /*#__PURE__*/new WeakSet();

var PlayElement = /*#__PURE__*/function () {
  function PlayElement() {
    _classCallCheck(this, PlayElement);

    _classPrivateMethodInitSpec(this, _configureCollectionAudioPlayElement);

    _classPrivateMethodInitSpec(this, _configureAudioPlayElement);

    _classPrivateMethodInitSpec(this, _configureCollectionPlayElement);

    _classPrivateMethodInitSpec(this, _configureGlobalPlayElement);
  }

  _createClass(PlayElement, [{
    key: "setUp",
    value: function setUp() {
      _classPrivateMethodGet(this, _configureGlobalPlayElement, _configureGlobalPlayElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionPlayElement, _configureCollectionPlayElement2).call(this);

      _classPrivateMethodGet(this, _configureAudioPlayElement, _configureAudioPlayElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionAudioPlayElement, _configureCollectionAudioPlayElement2).call(this);
    }
  }]);

  return PlayElement;
}();

function _configureGlobalPlayElement2() {
  var globalPlayElement = new _PlayElements_GlobalPlayElement__WEBPACK_IMPORTED_MODULE_0__.GlobalPlayElement();
  globalPlayElement.initialize();
}

function _configureCollectionPlayElement2() {
  var collectionPlayElement = new _PlayElements_CollectionPlayElement__WEBPACK_IMPORTED_MODULE_1__.CollectionPlayElement();
  collectionPlayElement.initialize();
}

function _configureAudioPlayElement2() {
  var audioPlayElement = new _PlayElements_AudioPlayElement__WEBPACK_IMPORTED_MODULE_2__.AudioPlayElement();
  audioPlayElement.initialize();
}

function _configureCollectionAudioPlayElement2() {
  var collectionAudioPlayElement = new _PlayElements_CollectionAudioPlayElement__WEBPACK_IMPORTED_MODULE_3__.CollectionAudioPlayElement();
  collectionAudioPlayElement.initialize();
}

/***/ }),

/***/ "./src/elements/PlayElements/AudioPlayElement.js":
/*!*******************************************************!*\
  !*** ./src/elements/PlayElements/AudioPlayElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayElement": () => (/* binding */ AudioPlayElement)
/* harmony export */ });
/* harmony import */ var _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio.js */ "./src/core/Audio.js");
/* harmony import */ var _services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Audio/Checks.js */ "./src/services/Audio/Checks.js");
/* harmony import */ var _services_Audio_Navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Audio/Navigation.js */ "./src/services/Audio/Navigation.js");
/* harmony import */ var _services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Collections/Checks.js */ "./src/services/Collections/Checks.js");
/* harmony import */ var _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/Collections/Navigation.js */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }











var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var _handleCollectionChanges = /*#__PURE__*/new WeakSet();

var _handleAudioChanges = /*#__PURE__*/new WeakSet();

var _playAudio = /*#__PURE__*/new WeakSet();

var AudioPlayElement = /*#__PURE__*/function () {
  function AudioPlayElement() {
    _classCallCheck(this, AudioPlayElement);

    _classPrivateMethodInitSpec(this, _playAudio);

    _classPrivateMethodInitSpec(this, _handleAudioChanges);

    _classPrivateMethodInitSpec(this, _handleCollectionChanges);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_6__.ConfigState.isMobile());
  }

  _createClass(AudioPlayElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return AudioPlayElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(AudioPlayElement.audioPlayQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    ;

    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_6__.ConfigState.isTouchMoving()) {
    var index = this.attribute('data-amplitude-audio-index');

    if (!_services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__.Checks.audioExists(index)) {
      _utilities_debug__WEBPACK_IMPORTED_MODULE_5__.Debug.writeMessage('Audio with index "' + index + '" does not exist! Please add an audio object at this index in your configuration.');
      return false;
    }

    _classPrivateMethodGet(this, _handleCollectionChanges, _handleCollectionChanges2).call(this, index);

    _classPrivateMethodGet(this, _handleAudioChanges, _handleAudioChanges2).call(this, index);

    _classPrivateMethodGet(this, _playAudio, _playAudio2).call(this);

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__.PlayPauseElement.syncAll();
  }
}

function _handleCollectionChanges2(index) {
  if (_services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_3__.Checks.collectionChanged(null)) {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_4__.Navigation();
    var audioNavigation = new _services_Audio_Navigation_js__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    collectionNavigation.setActiveCollection(null);
    audioNavigation.changeAudio(_config__WEBPACK_IMPORTED_MODULE_7__.config.audio[index], index, true);
  }
}

function _handleAudioChanges2(index) {
  if (_services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__.Checks.audioChanged(index)) {
    var audioNavigation = new _services_Audio_Navigation_js__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    audioNavigation.changeAudio(_config__WEBPACK_IMPORTED_MODULE_7__.config.audio[index], index, true);
  }
}

function _playAudio2() {
  var audio = new _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__.Audio();
  audio.play();
}

_defineProperty(AudioPlayElement, "audioPlayQuery", '.amplitude-play[data-amplitude-audio-index]:not([data-amplitude-collection-key])');

/***/ }),

/***/ "./src/elements/PlayElements/CollectionAudioPlayElement.js":
/*!*****************************************************************!*\
  !*** ./src/elements/PlayElements/CollectionAudioPlayElement.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionAudioPlayElement": () => (/* binding */ CollectionAudioPlayElement)
/* harmony export */ });
/* harmony import */ var _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio.js */ "./src/core/Audio.js");
/* harmony import */ var _services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Audio/Checks.js */ "./src/services/Audio/Checks.js");
/* harmony import */ var _services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Collections/Checks.js */ "./src/services/Collections/Checks.js");
/* harmony import */ var _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Collections/Navigation.js */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }









var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var _handleCollectionChanges = /*#__PURE__*/new WeakSet();

var _handleAudioChanges = /*#__PURE__*/new WeakSet();

var _playAudio = /*#__PURE__*/new WeakSet();

var CollectionAudioPlayElement = /*#__PURE__*/function () {
  function CollectionAudioPlayElement() {
    _classCallCheck(this, CollectionAudioPlayElement);

    _classPrivateMethodInitSpec(this, _playAudio);

    _classPrivateMethodInitSpec(this, _handleAudioChanges);

    _classPrivateMethodInitSpec(this, _handleCollectionChanges);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isMobile());
  }

  _createClass(CollectionAudioPlayElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return CollectionAudioPlayElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionAudioPlayElement.collectionAudioPlayQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isTouchMoving()) {
    var collectionKey = this.attribute('data-amplitude-collection-key');
    var audioIndex = this.attribute('data-amplitude-audio-index');

    _classPrivateMethodGet(this, _handleCollectionChanges, _handleCollectionChanges2).call(this, collectionKey, audioIndex);

    _classPrivateMethodGet(this, _handleAudioChanges, _handleAudioChanges2).call(this, collectionKey, audioIndex);

    _classPrivateMethodGet(this, _playAudio, _playAudio2).call(this);

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.syncAll();
  }
}

function _handleCollectionChanges2(collectionKey, audioIndex) {
  if (_services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_2__.Checks.collectionChanged(collectionKey)) {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation();
    collectionNavigation.setActiveCollection(collectionKey);
    collectionNavigation.changeAudioCollection(collectionKey, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collectionKey].audio[audioIndex], audioIndex, true);
  }
}

function _handleAudioChanges2(collectionKey, audioIndex) {
  if (_services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__.Checks.audioChanged(audioIndex, collectionKey)) {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation();
    collectionNavigation.changeAudioCollection(collectionKey, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collectionKey].audio[audioIndex], audioIndex, true);
  }
}

function _playAudio2() {
  var audio = new _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__.Audio();
  audio.play();
}

_defineProperty(CollectionAudioPlayElement, "collectionAudioPlayQuery", '.amplitude-play[data-amplitude-audio-index][data-amplitude-collection-key]');

/***/ }),

/***/ "./src/elements/PlayElements/CollectionPlayElement.js":
/*!************************************************************!*\
  !*** ./src/elements/PlayElements/CollectionPlayElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionPlayElement": () => (/* binding */ CollectionPlayElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Collections/Checks */ "./src/services/Collections/Checks.js");
/* harmony import */ var _services_Collections_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Collections/Navigation */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }









var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var _handleCollectionChanges = /*#__PURE__*/new WeakSet();

var _playAudio = /*#__PURE__*/new WeakSet();

var CollectionPlayElement = /*#__PURE__*/function () {
  function CollectionPlayElement() {
    _classCallCheck(this, CollectionPlayElement);

    _classPrivateMethodInitSpec(this, _playAudio);

    _classPrivateMethodInitSpec(this, _handleCollectionChanges);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isMobile());
  }

  _createClass(CollectionPlayElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return CollectionPlayElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionPlayElement.collectionPlayQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isTouchMoving()) {
    var collection = this.getAttribute('data-amplitude-collection-key');

    if (!_services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__.Checks.collectionExists(collection)) {
      _utilities_debug__WEBPACK_IMPORTED_MODULE_3__.Debug.writeMessage('Collection with key "' + collection + '" does not exist! Please define this collection in your configuration.');
      return false;
    }

    _classPrivateMethodGet(this, _handleCollectionChanges, _handleCollectionChanges2).call(this, collection);

    _classPrivateMethodGet(this, _playAudio, _playAudio2).call(this);

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.syncAll();
  }
}

function _handleCollectionChanges2(collection) {
  if (_services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__.Checks.collectionChanged(collection)) {
    var collectionNavigation = new _services_Collections_Navigation__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    collectionNavigation.setActiveCollection(collection); // If the collection is shuffled and the collection is changed,
    // we change the audio to be the first audio in the array. Since,
    // we are changing the collection, we are starting at the top.

    if (_services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__.Checks.isCollectionShuffled(collection)) {
      collectionNavigation.changeAudioCollection(collection, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collection].shuffle_list[0], 0, true);
    } else {
      collectionNavigation.changeAudioCollection(collection, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collection].audio[0], 0);
    }
  }
}

function _playAudio2() {
  var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
  audio.play();
}

_defineProperty(CollectionPlayElement, "collectionPlayQuery", '.amplitude-play[data-amplitude-collection-key]:not([data-amplitude-audio-index])');

/***/ }),

/***/ "./src/elements/PlayElements/GlobalPlayElement.js":
/*!********************************************************!*\
  !*** ./src/elements/PlayElements/GlobalPlayElement.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalPlayElement": () => (/* binding */ GlobalPlayElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var GlobalPlayElement = /*#__PURE__*/function () {
  function GlobalPlayElement() {
    _classCallCheck(this, GlobalPlayElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile());
  }

  _createClass(GlobalPlayElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }]);

  return GlobalPlayElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(GlobalPlayElement.globalPlayQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
  audio.play();
  _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.PlayPauseElement.syncAll();
}

_defineProperty(GlobalPlayElement, "globalPlayQuery", '.amplitude-play:not([data-amplitude-audio-index]):not([data-amplitude-collection-index])');

/***/ }),

/***/ "./src/elements/PlayPauseElement.js":
/*!******************************************!*\
  !*** ./src/elements/PlayPauseElement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayPauseElement": () => (/* binding */ PlayPauseElement)
/* harmony export */ });
/* harmony import */ var _PlayPauseElements_GlobalPlayPauseElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayPauseElements/GlobalPlayPauseElement */ "./src/elements/PlayPauseElements/GlobalPlayPauseElement.js");
/* harmony import */ var _PlayPauseElements_CollectionPlayPauseElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayPauseElements/CollectionPlayPauseElement */ "./src/elements/PlayPauseElements/CollectionPlayPauseElement.js");
/* harmony import */ var _PlayPauseElements_AudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlayPauseElements/AudioPlayPauseElement */ "./src/elements/PlayPauseElements/AudioPlayPauseElement.js");
/* harmony import */ var _PlayPauseElements_CollectionAudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayPauseElements/CollectionAudioPlayPauseElement */ "./src/elements/PlayPauseElements/CollectionAudioPlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





/**
 * Handles the configuration and managing of Play/Pause elements.
 * 
 * A Play Pause element is defined as the following:
 * 
 * Element: class="amplitude-play-pause"
 * 
 * GLOBAL: class="amplitude-play-pause" 
 * Controls the entire state of the audio player. Will play or pause whatever is active.
 * 
 * COLLECTION: class="amplitude-play-pause" data-amplitude-collection-key="{collection_key}"
 * Scoped to an individual collection. Will only play or pause within the scope of a collection.
 * 
 * AUDIO: class="amplitude-play-pause" data-amplitude-audio-index="{audio_index}"
 * Scoped to an individual audio element. Will only play or pause a specific piece of audio.
 * 
 * AUDIO IN COLLECTION: class="amplitude-play-pause" data-amplitude-collection-key="{collection_key}" data-amplitude-audio-index="{audio_index}"
 * Scoped to an individual audio element within a collection. Will only play or pause a specific piece of audio in a collection.
 */

var _configureGlobalPlayPauseElement = /*#__PURE__*/new WeakSet();

var _configureCollectionPlayPauseElement = /*#__PURE__*/new WeakSet();

var _configureAudioPlayPauseElement = /*#__PURE__*/new WeakSet();

var _configureCollectionAudioPlayPauseElement = /*#__PURE__*/new WeakSet();

var PlayPauseElement = /*#__PURE__*/function () {
  function PlayPauseElement() {
    _classCallCheck(this, PlayPauseElement);

    _classPrivateMethodInitSpec(this, _configureCollectionAudioPlayPauseElement);

    _classPrivateMethodInitSpec(this, _configureAudioPlayPauseElement);

    _classPrivateMethodInitSpec(this, _configureCollectionPlayPauseElement);

    _classPrivateMethodInitSpec(this, _configureGlobalPlayPauseElement);
  }

  _createClass(PlayPauseElement, [{
    key: "setUp",
    value: function setUp() {
      _classPrivateMethodGet(this, _configureGlobalPlayPauseElement, _configureGlobalPlayPauseElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionPlayPauseElement, _configureCollectionPlayPauseElement2).call(this);

      _classPrivateMethodGet(this, _configureAudioPlayPauseElement, _configureAudioPlayPauseElement2).call(this);

      _classPrivateMethodGet(this, _configureCollectionAudioPlayPauseElement, _configureCollectionAudioPlayPauseElement2).call(this);
    }
  }], [{
    key: "syncAll",
    value: function syncAll() {
      _PlayPauseElements_GlobalPlayPauseElement__WEBPACK_IMPORTED_MODULE_0__.GlobalPlayPauseElement.syncUI();
      _PlayPauseElements_CollectionPlayPauseElement__WEBPACK_IMPORTED_MODULE_1__.CollectionPlayPauseElement.syncUI();
      _PlayPauseElements_AudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.AudioPlayPauseElement.syncUI();
      _PlayPauseElements_CollectionAudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.CollectionAudioPlayPauseElement.syncUI();
    }
  }, {
    key: "syncAllToPause",
    value: function syncAllToPause() {
      _PlayPauseElements_GlobalPlayPauseElement__WEBPACK_IMPORTED_MODULE_0__.GlobalPlayPauseElement.syncToPause();
      _PlayPauseElements_CollectionPlayPauseElement__WEBPACK_IMPORTED_MODULE_1__.CollectionPlayPauseElement.syncToPause();
      _PlayPauseElements_AudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.AudioPlayPauseElement.syncToPause();
      _PlayPauseElements_CollectionAudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.CollectionAudioPlayPauseElement.syncToPause();
    }
    /**
     * Sets an element to be playing by removing the 'amplitude-paused' class
     * and adding the 'amplitude-playing' class
     *
     * @access public
     * @static
     * @param {element} element - The element getting the playing class added.
     */

  }, {
    key: "setElementPlay",
    value: function setElementPlay(element) {
      element.classList.add("amplitude-playing");
      element.classList.remove("amplitude-paused");
    }
    /**
     * Sets an element to be paused by adding the 'amplitude-paused' class
     * and removing the 'amplitude-playing' class
     *
     * @access public
     * @static
     * @param {element} element - The element getting the paused class added.
     */

  }, {
    key: "setElementPause",
    value: function setElementPause(element) {
      element.classList.remove("amplitude-playing");
      element.classList.add("amplitude-paused");
    }
  }]);

  return PlayPauseElement;
}();

function _configureGlobalPlayPauseElement2() {
  var globalPlayPauseElement = new _PlayPauseElements_GlobalPlayPauseElement__WEBPACK_IMPORTED_MODULE_0__.GlobalPlayPauseElement();
  globalPlayPauseElement.initialize();
}

function _configureCollectionPlayPauseElement2() {
  var collectionPlayPauseElement = new _PlayPauseElements_CollectionPlayPauseElement__WEBPACK_IMPORTED_MODULE_1__.CollectionPlayPauseElement();
  collectionPlayPauseElement.initialize();
}

function _configureAudioPlayPauseElement2() {
  var audioPlayPauseElement = new _PlayPauseElements_AudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_2__.AudioPlayPauseElement();
  audioPlayPauseElement.initialize();
}

function _configureCollectionAudioPlayPauseElement2() {
  var collectionAudioPlayPauseElement = new _PlayPauseElements_CollectionAudioPlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.CollectionAudioPlayPauseElement();
  collectionAudioPlayPauseElement.initialize();
}

/***/ }),

/***/ "./src/elements/PlayPauseElements/AudioPlayPauseElement.js":
/*!*****************************************************************!*\
  !*** ./src/elements/PlayPauseElements/AudioPlayPauseElement.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioPlayPauseElement": () => (/* binding */ AudioPlayPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio.js */ "./src/core/Audio.js");
/* harmony import */ var _services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Audio/Checks.js */ "./src/services/Audio/Checks.js");
/* harmony import */ var _services_Audio_Navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Audio/Navigation.js */ "./src/services/Audio/Navigation.js");
/* harmony import */ var _services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Collections/Checks.js */ "./src/services/Collections/Checks.js");
/* harmony import */ var _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/Collections/Navigation.js */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }











var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var _handleCollectionChanges = /*#__PURE__*/new WeakSet();

var _handleAudioChanges = /*#__PURE__*/new WeakSet();

var _toggleAudio = /*#__PURE__*/new WeakSet();

var AudioPlayPauseElement = /*#__PURE__*/function () {
  function AudioPlayPauseElement() {
    _classCallCheck(this, AudioPlayPauseElement);

    _classPrivateMethodInitSpec(this, _toggleAudio);

    _classPrivateMethodInitSpec(this, _handleAudioChanges);

    _classPrivateMethodInitSpec(this, _handleCollectionChanges);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_6__.ConfigState.isMobile());
  }

  _createClass(AudioPlayPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }], [{
    key: "syncUI",
    value: function syncUI() {
      var state = _services_ConfigState__WEBPACK_IMPORTED_MODULE_6__.ConfigState.getAudioState();
      var elements = document.querySelectorAll(AudioPlayPauseElement.audioPlayPauseQuery);
      elements.forEach(function (element) {
        if (state == 'playing') {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__.PlayPauseElement.setElementPlay(element);
        } else {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__.PlayPauseElement.setElementPause(element);
        }
      });
    }
  }, {
    key: "syncToPause",
    value: function syncToPause() {
      var elements = document.querySelectorAll(AudioPlayPauseElement.audioPlayPauseQuery);
      elements.forEach(function (element) {
        _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__.PlayPauseElement.setElementPause(element);
      });
    }
  }]);

  return AudioPlayPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(AudioPlayPauseElement.audioPlayPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    ;

    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_6__.ConfigState.isTouchMoving()) {
    var index = this.attribute('data-amplitude-audio-index');

    if (!_services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__.Checks.audioExists(index)) {
      _utilities_debug__WEBPACK_IMPORTED_MODULE_5__.Debug.writeMessage('Audio with index "' + index + '" does not exist! Please add an audio object at this index in your configuration.');
      return false;
    }

    _classPrivateMethodGet(this, _handleCollectionChanges, _handleCollectionChanges2).call(this, index);

    _classPrivateMethodGet(this, _handleAudioChanges, _handleAudioChanges2).call(this, index);

    _classPrivateMethodGet(this, _toggleAudio, _toggleAudio2).call(this);

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_8__.PlayPauseElement.syncAll();
  }
}

function _handleCollectionChanges2(index) {
  if (_services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_3__.Checks.collectionChanged(null)) {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_4__.Navigation();
    var audioNavigation = new _services_Audio_Navigation_js__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    collectionNavigation.setActiveCollection(null);
    audioNavigation.changeAudio(_config__WEBPACK_IMPORTED_MODULE_7__.config.audio[index], index, true);
  }
}

function _handleAudioChanges2(index) {
  if (_services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__.Checks.audioChanged(index)) {
    var audioNavigation = new _services_Audio_Navigation_js__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    audioNavigation.changeAudio(_config__WEBPACK_IMPORTED_MODULE_7__.config.audio[index], index, true);
  }
}

function _toggleAudio2() {
  if (_config__WEBPACK_IMPORTED_MODULE_7__.config.audio_element.paused) {
    _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__.Audio.play();
  } else {
    _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__.Audio.pause();
  }
}

_defineProperty(AudioPlayPauseElement, "audioPlayPauseQuery", '.amplitude-play-pause[data-amplitude-audio-index]:not([data-amplitude-collection-key])');

/***/ }),

/***/ "./src/elements/PlayPauseElements/CollectionAudioPlayPauseElement.js":
/*!***************************************************************************!*\
  !*** ./src/elements/PlayPauseElements/CollectionAudioPlayPauseElement.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionAudioPlayPauseElement": () => (/* binding */ CollectionAudioPlayPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio.js */ "./src/core/Audio.js");
/* harmony import */ var _services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Audio/Checks.js */ "./src/services/Audio/Checks.js");
/* harmony import */ var _services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Collections/Checks.js */ "./src/services/Collections/Checks.js");
/* harmony import */ var _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/Collections/Navigation.js */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }









var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var _handleCollectionChanges = /*#__PURE__*/new WeakSet();

var _handleAudioChanges = /*#__PURE__*/new WeakSet();

var _toggleAudio = /*#__PURE__*/new WeakSet();

var CollectionAudioPlayPauseElement = /*#__PURE__*/function () {
  function CollectionAudioPlayPauseElement() {
    _classCallCheck(this, CollectionAudioPlayPauseElement);

    _classPrivateMethodInitSpec(this, _toggleAudio);

    _classPrivateMethodInitSpec(this, _handleAudioChanges);

    _classPrivateMethodInitSpec(this, _handleCollectionChanges);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isMobile());
  }

  _createClass(CollectionAudioPlayPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }], [{
    key: "syncUI",
    value: function syncUI() {
      var state = _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.getAudioState();
      var elements = document.querySelectorAll(CollectionAudioPlayPauseElement.collectionAudioPlayPauseQuery);
      elements.forEach(function (element) {
        if (state == 'playing') {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.setElementPlay(element);
        } else {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.setElementPause(element);
        }
      });
    }
  }, {
    key: "syncToPause",
    value: function syncToPause() {
      var elements = document.querySelectorAll(CollectionAudioPlayPauseElement.collectionAudioPlayPauseQuery);
      elements.forEach(function (element) {
        _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.setElementPause(element);
      });
    }
  }]);

  return CollectionAudioPlayPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionAudioPlayPauseElement.collectionAudioPlayPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isTouchMoving()) {
    var collectionKey = this.attribute('data-amplitude-collection-key');
    var audioIndex = this.attribute('data-amplitude-audio-index');

    _classPrivateMethodGet(this, _handleCollectionChanges, _handleCollectionChanges2).call(this, collectionKey, audioIndex);

    _classPrivateMethodGet(this, _handleAudioChanges, _handleAudioChanges2).call(this, collectionKey, audioIndex);

    _classPrivateMethodGet(this, _toggleAudio, _toggleAudio2).call(this);

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.syncAll();
  }
}

function _handleCollectionChanges2(collectionKey, audioIndex) {
  if (_services_Collections_Checks_js__WEBPACK_IMPORTED_MODULE_2__.Checks.collectionChanged(collectionKey)) {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation();
    collectionNavigation.setActiveCollection(collectionKey);
    collectionNavigation.changeAudioCollection(collectionKey, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collectionKey].audio[audioIndex], audioIndex, true);
  }
}

function _handleAudioChanges2(collectionKey, audioIndex) {
  if (_services_Audio_Checks_js__WEBPACK_IMPORTED_MODULE_1__.Checks.audioChanged(audioIndex, collectionKey)) {
    var collectionNavigation = new _services_Collections_Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation();
    collectionNavigation.changeAudioCollection(collectionKey, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collectionKey].audio[audioIndex], audioIndex, true);
  }
}

function _toggleAudio2() {
  if (_config__WEBPACK_IMPORTED_MODULE_5__.config.audio_element.paused) {
    _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__.Audio.play();
  } else {
    _core_Audio_js__WEBPACK_IMPORTED_MODULE_0__.Audio.pause();
  }
}

_defineProperty(CollectionAudioPlayPauseElement, "collectionAudioPlayPauseQuery", '.amplitude-play-pause[data-amplitude-audio-index][data-amplitude-collection-key]');

/***/ }),

/***/ "./src/elements/PlayPauseElements/CollectionPlayPauseElement.js":
/*!**********************************************************************!*\
  !*** ./src/elements/PlayPauseElements/CollectionPlayPauseElement.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionPlayPauseElement": () => (/* binding */ CollectionPlayPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/Collections/Checks */ "./src/services/Collections/Checks.js");
/* harmony import */ var _services_Collections_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Collections/Navigation */ "./src/services/Collections/Navigation.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }








/**
 * A Collection Play Pause element is defined by the following:
 * 
 * Element: class="amplitude-play-pause" data-amplitude-collection-key="{collection_key}"
 */

var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var _handleCollectionChanges = /*#__PURE__*/new WeakSet();

var _toggleAudio = /*#__PURE__*/new WeakSet();

var CollectionPlayPauseElement = /*#__PURE__*/function () {
  function CollectionPlayPauseElement() {
    _classCallCheck(this, CollectionPlayPauseElement);

    _classPrivateMethodInitSpec(this, _toggleAudio);

    _classPrivateMethodInitSpec(this, _handleCollectionChanges);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isMobile());
  }

  _createClass(CollectionPlayPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }], [{
    key: "syncUI",
    value: function syncUI() {
      var state = _services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.getAudioState();
      var elements = document.querySelectorAll(CollectionPlayPauseElement.collectionPlayPauseQuery);
      elements.forEach(function (element) {
        if (state == 'playing') {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.setElementPlay(element);
        } else {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.setElementPause(element);
        }
      });
    }
  }, {
    key: "syncToPause",
    value: function syncToPause() {
      var elements = document.querySelectorAll(CollectionPlayPauseElement.collectionPlayPauseQuery);
      elements.forEach(function (element) {
        _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.setElementPause(element);
      });
    }
  }]);

  return CollectionPlayPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(CollectionPlayPauseElement.collectionPlayPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    ;

    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_4__.ConfigState.isTouchMoving()) {
    var collection = this.getAttribute('data-amplitude-collection-key');

    if (!_services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__.Checks.collectionExists(collection)) {
      _utilities_debug__WEBPACK_IMPORTED_MODULE_3__.Debug.writeMessage('Collection with key "' + collection + '" does not exist! Please define this collection in your configuration.');
      return false;
    }

    _classPrivateMethodGet(this, _handleCollectionChanges, _handleCollectionChanges2).call(this, collection);

    _classPrivateMethodGet(this, _toggleAudio, _toggleAudio2).call(this);

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_6__.PlayPauseElement.syncAll();
  }
}

function _handleCollectionChanges2(collection) {
  if (_services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__.Checks.collectionChanged(collection)) {
    var collectionNavigation = new _services_Collections_Navigation__WEBPACK_IMPORTED_MODULE_2__.Navigation();
    collectionNavigation.setActiveCollection(collection); // If the collection is shuffled and the collection is changed,
    // we change the audio to be the first audio in the array. Since,
    // we are changing the collection, we are starting at the top.

    if (_services_Collections_Checks__WEBPACK_IMPORTED_MODULE_1__.Checks.isCollectionShuffled(collection)) {
      collectionNavigation.changeAudioCollection(collection, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collection].shuffle_list[0], 0, true);
    } else {
      collectionNavigation.changeAudioCollection(collection, _config__WEBPACK_IMPORTED_MODULE_5__.config.collections[collection].audio[0], 0);
    }
  }
}

function _toggleAudio2() {
  if (_config__WEBPACK_IMPORTED_MODULE_5__.config.audio_element.paused) {
    _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio.play();
  } else {
    _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio.pause();
  }
}

_defineProperty(CollectionPlayPauseElement, "collectionPlayPauseQuery", '.amplitude-play-pause[data-amplitude-collection-key]:not([data-amplitude-audio-index])');

/***/ }),

/***/ "./src/elements/PlayPauseElements/GlobalPlayPauseElement.js":
/*!******************************************************************!*\
  !*** ./src/elements/PlayPauseElements/GlobalPlayPauseElement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalPlayPauseElement": () => (/* binding */ GlobalPlayPauseElement)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }






var _elements = /*#__PURE__*/new WeakMap();

var _mobile = /*#__PURE__*/new WeakMap();

var _findElements = /*#__PURE__*/new WeakSet();

var _bindInteractions = /*#__PURE__*/new WeakSet();

var _handleInteraction = /*#__PURE__*/new WeakSet();

var GlobalPlayPauseElement = /*#__PURE__*/function () {
  function GlobalPlayPauseElement() {
    _classCallCheck(this, GlobalPlayPauseElement);

    _classPrivateMethodInitSpec(this, _handleInteraction);

    _classPrivateMethodInitSpec(this, _bindInteractions);

    _classPrivateMethodInitSpec(this, _findElements);

    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mobile, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _mobile, _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isMobile());
  }

  _createClass(GlobalPlayPauseElement, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _findElements, _findElements2).call(this);

      _classPrivateMethodGet(this, _bindInteractions, _bindInteractions2).call(this);
    }
  }], [{
    key: "syncUI",
    value: function syncUI() {
      var state = _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.getAudioState();
      var elements = document.querySelectorAll(GlobalPlayPauseElement.globalPlayPauseQuery);
      elements.forEach(function (element) {
        if (state == 'playing') {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.setElementPlay(element);
        } else {
          _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.setElementPause(element);
        }
      });
    }
  }, {
    key: "syncToPause",
    value: function syncToPause() {
      var elements = document.querySelectorAll(GlobalPlayPauseElement.globalPlayPauseQuery);
      elements.forEach(function (element) {
        _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.setElementPause(element);
      });
    }
  }]);

  return GlobalPlayPauseElement;
}();

function _findElements2() {
  _classPrivateFieldSet(this, _elements, document.querySelectorAll(GlobalPlayPauseElement.globalPlayPauseQuery));
}

function _bindInteractions2() {
  var _this = this;

  _classPrivateFieldGet(this, _elements).forEach(function (element) {
    if (_classPrivateFieldGet(_this, _mobile)) {
      element.removeEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("touchend", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    } else {
      element.removeEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
      element.addEventListener("click", _classPrivateMethodGet(_this, _handleInteraction, _handleInteraction2));
    }
  });
}

function _handleInteraction2() {
  if (!_services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState.isTouchMoving()) {
    var audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();

    if (_config__WEBPACK_IMPORTED_MODULE_2__.config.audio_element.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.syncAll();
  }
}

_defineProperty(GlobalPlayPauseElement, "globalPlayPauseQuery", '.amplitude-play-pause:not([data-amplitude-audio-index]):not([data-amplitude-collection-key])');

/***/ }),

/***/ "./src/events/TimeUpdateEvent.js":
/*!***************************************!*\
  !*** ./src/events/TimeUpdateEvent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeUpdateEvent": () => (/* binding */ TimeUpdateEvent)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _bindTimeUpdate = /*#__PURE__*/new WeakSet();

var _bindDurationChange = /*#__PURE__*/new WeakSet();

var _handle = /*#__PURE__*/new WeakSet();

var TimeUpdateEvent = /*#__PURE__*/function () {
  function TimeUpdateEvent() {
    _classCallCheck(this, TimeUpdateEvent);

    _classPrivateMethodInitSpec(this, _handle);

    _classPrivateMethodInitSpec(this, _bindDurationChange);

    _classPrivateMethodInitSpec(this, _bindTimeUpdate);
  }

  _createClass(TimeUpdateEvent, [{
    key: "bind",
    value: function bind() {
      _classPrivateMethodGet(this, _bindTimeUpdate, _bindTimeUpdate2).call(this);

      _classPrivateMethodGet(this, _bindDurationChange, _bindDurationChange2).call(this);
    }
  }]);

  return TimeUpdateEvent;
}();

function _bindTimeUpdate2() {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.removeEventListener("timeupdate", _classPrivateMethodGet(this, _handle, _handle2));
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.addEventListener("timeupdate", _classPrivateMethodGet(this, _handle, _handle2));
}

function _bindDurationChange2() {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.removeEventListener("durationchange", _classPrivateMethodGet(this, _handle, _handle2));
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.addEventListener("durationchange", _classPrivateMethodGet(this, _handle, _handle2));
}

function _handle2() {
  console.log('asdf');
}

/***/ }),

/***/ "./src/init/Initializer.js":
/*!*********************************!*\
  !*** ./src/init/Initializer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Initializer": () => (/* binding */ Initializer)
/* harmony export */ });
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/ConfigState */ "./src/services/ConfigState.js");
/* harmony import */ var _services_EventManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/EventManager */ "./src/services/EventManager.js");
/* harmony import */ var _services_UIManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/UIManager */ "./src/services/UIManager.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _services_Audio_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/Audio/Navigation */ "./src/services/Audio/Navigation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }








var _element = /*#__PURE__*/new WeakMap();

var _userConfig = /*#__PURE__*/new WeakMap();

var _configState = /*#__PURE__*/new WeakMap();

var _ready = /*#__PURE__*/new WeakMap();

var _isValidUrl = /*#__PURE__*/new WeakSet();

var _loadUserConfig = /*#__PURE__*/new WeakSet();

var _prepareAmplitude = /*#__PURE__*/new WeakSet();

var _resetConfig = /*#__PURE__*/new WeakSet();

var _copyUserConfig = /*#__PURE__*/new WeakSet();

var _initializeEvents = /*#__PURE__*/new WeakSet();

var _initializeElements = /*#__PURE__*/new WeakSet();

var _initializeCallbacks = /*#__PURE__*/new WeakSet();

var _initializeAudio = /*#__PURE__*/new WeakSet();

var Initializer = /*#__PURE__*/function () {
  function Initializer(userConfig, element) {
    _classCallCheck(this, Initializer);

    _classPrivateMethodInitSpec(this, _initializeAudio);

    _classPrivateMethodInitSpec(this, _initializeCallbacks);

    _classPrivateMethodInitSpec(this, _initializeElements);

    _classPrivateMethodInitSpec(this, _initializeEvents);

    _classPrivateMethodInitSpec(this, _copyUserConfig);

    _classPrivateMethodInitSpec(this, _resetConfig);

    _classPrivateMethodInitSpec(this, _prepareAmplitude);

    _classPrivateMethodInitSpec(this, _loadUserConfig);

    _classPrivateMethodInitSpec(this, _isValidUrl);

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userConfig, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _configState, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _ready, {
      writable: true,
      value: false
    });

    _classPrivateFieldSet(this, _configState, new _services_ConfigState__WEBPACK_IMPORTED_MODULE_1__.ConfigState());

    _classPrivateFieldGet(this, _configState).setIsMobile();

    _classPrivateFieldSet(this, _userConfig, userConfig);

    _classPrivateFieldSet(this, _element, element);
  }

  _createClass(Initializer, [{
    key: "setup",
    value: function setup() {
      if (_classPrivateMethodGet(this, _isValidUrl, _isValidUrl2).call(this, _classPrivateFieldGet(this, _userConfig))) {
        _classPrivateMethodGet(this, _loadUserConfig, _loadUserConfig2).call(this);
      } else {
        _classPrivateMethodGet(this, _prepareAmplitude, _prepareAmplitude2).call(this);
      }
    }
  }]);

  return Initializer;
}();

function _isValidUrl2(url) {
  try {
    new URL(url);
  } catch (e) {
    _utilities_debug__WEBPACK_IMPORTED_MODULE_0__.Debug.writeMessage('AmplitudeJS must be initialized with a JSON object or a valid URL.');
    return false;
  }

  return true;
}

function _loadUserConfig2() {
  var _this = this;

  fetch(_classPrivateFieldGet(this, _userConfig)).then(function (response) {
    if (response.status != 200) {
      throw response.status;
    } else {
      return response.json();
    }
  }).then(function (data) {
    _classPrivateFieldSet(_this, _userConfig, data);

    _classPrivateMethodGet(_this, _prepareAmplitude, _prepareAmplitude2).call(_this);
  })["catch"](function (error) {
    _utilities_debug__WEBPACK_IMPORTED_MODULE_0__.Debug.writeMessage(error);
  });
}

function _prepareAmplitude2() {
  _classPrivateMethodGet(this, _resetConfig, _resetConfig2).call(this);

  _classPrivateMethodGet(this, _copyUserConfig, _copyUserConfig2).call(this);

  _classPrivateMethodGet(this, _initializeAudio, _initializeAudio2).call(this);

  _classPrivateMethodGet(this, _initializeEvents, _initializeEvents2).call(this);

  _classPrivateMethodGet(this, _initializeElements, _initializeElements2).call(this);

  _classPrivateMethodGet(this, _initializeCallbacks, _initializeCallbacks2).call(this);
}

function _resetConfig2() {
  _classPrivateFieldGet(this, _configState).resetConfig();
}

function _copyUserConfig2() {
  _classPrivateFieldGet(this, _configState).setUserSettings(_classPrivateFieldGet(this, _userConfig));
}

function _initializeEvents2() {
  var eventManager = new _services_EventManager__WEBPACK_IMPORTED_MODULE_2__.EventManager();
  eventManager.initializeAllEvents();
}

function _initializeElements2() {
  var uiManager = new _services_UIManager__WEBPACK_IMPORTED_MODULE_3__.UIManager();
  uiManager.initializeElements();
}

function _initializeCallbacks2() {}

function _initializeAudio2() {
  var audioNavigator = new _services_Audio_Navigation__WEBPACK_IMPORTED_MODULE_5__.Navigation();

  if (_config__WEBPACK_IMPORTED_MODULE_4__.config.start_audio) {} else {
    audioNavigator.changeAudio(_config__WEBPACK_IMPORTED_MODULE_4__.config.audio[0], 0);
  }
}

/***/ }),

/***/ "./src/methods/config.js":
/*!*******************************!*\
  !*** ./src/methods/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConfig": () => (/* binding */ getConfig)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config.js */ "./src/config.js");

/**
 * Returns the current config for AmplitudeJS
 * 
 * Public Method: Amplitude.getConfig()
 * 
 * @access public
 * @returns {object} 
 */

function getConfig() {
  return _config_js__WEBPACK_IMPORTED_MODULE_0__.config;
}

/***/ }),

/***/ "./src/methods/init.js":
/*!*****************************!*\
  !*** ./src/methods/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _init_Initializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/init/Initializer */ "./src/init/Initializer.js");

/**
 * The main init function.  The user will call this through
 * Amplitude.init() and pass in their settings.
 *
 * Public Accessor: Amplitude.init( user_config_json )
 * @access public
 * @param {object|url} userConfig - A URL or JSON object of user defined values that help configure and initialize AmplitudeJS.
 * @param {string|element} element - A unique identifier or DOM Element to bind Amplitude methods to.
 */

function init() {
  var userConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var initializer = new _init_Initializer__WEBPACK_IMPORTED_MODULE_0__.Initializer(userConfig, element);
  initializer.setup();
}

/***/ }),

/***/ "./src/methods/playlists.js":
/*!**********************************!*\
  !*** ./src/methods/playlists.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActivePlaylist": () => (/* binding */ getActivePlaylist)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config.js */ "./src/config.js");

/**
 * Returns the key of the active playlist
 * 
 * Public Method: Amplitude.getActivePlaylist()
 * 
 * @access public
 * @returns {string} 
 */

function getActivePlaylist() {
  return _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_playlist;
}

/***/ }),

/***/ "./src/services/Audio/Checks.js":
/*!**************************************!*\
  !*** ./src/services/Audio/Checks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checks": () => (/* binding */ Checks)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Checks = /*#__PURE__*/function () {
  function Checks() {
    _classCallCheck(this, Checks);
  }

  _createClass(Checks, null, [{
    key: "audioExists",
    value: function audioExists(index) {
      if (_config__WEBPACK_IMPORTED_MODULE_0__.config.audio[index]) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "audioChanged",
    value: function audioChanged(audioIndex) {
      var collectionKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (_config__WEBPACK_IMPORTED_MODULE_0__.config.active_collection != collectionKey) {
        return true;
      } else {
        if (_config__WEBPACK_IMPORTED_MODULE_0__.config.active_collection == null && collectionKey == null) {
          if (_config__WEBPACK_IMPORTED_MODULE_0__.config.active_index != audioIndex) {
            return true;
          } else {
            return false;
          }
        } else {
          if (_config__WEBPACK_IMPORTED_MODULE_0__.config.active_collection == collection && _config__WEBPACK_IMPORTED_MODULE_0__.config.collections[collectionKey].active_index != audioIndex) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }]);

  return Checks;
}();

/***/ }),

/***/ "./src/services/Audio/Navigation.js":
/*!******************************************!*\
  !*** ./src/services/Audio/Navigation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Callbacks */ "./src/services/Callbacks.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
/* harmony import */ var _elements_MetaDataElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/elements/MetaDataElement */ "./src/elements/MetaDataElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _prepareAudioChange = /*#__PURE__*/new WeakSet();

var _switchAudio = /*#__PURE__*/new WeakSet();

var _afterAudioChange = /*#__PURE__*/new WeakSet();

var _updateMetaData = /*#__PURE__*/new WeakSet();

var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    _classPrivateMethodInitSpec(this, _updateMetaData);

    _classPrivateMethodInitSpec(this, _afterAudioChange);

    _classPrivateMethodInitSpec(this, _switchAudio);

    _classPrivateMethodInitSpec(this, _prepareAudioChange);
  }

  _createClass(Navigation, [{
    key: "changeAudio",
    value:
    /**
     * Change audio in the audio array
     *
     * @prop {object} audio - The audio we are changing to.
     * @prop {number} index - The index we are changing to.
     * @prop {boolean} direct - Determines if it was a direct click on the song.
     * We then don't care if shuffle is on or not.
     */
    function changeAudio(audio, index) {
      var direct = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      _classPrivateMethodGet(this, _prepareAudioChange, _prepareAudioChange2).call(this, audio);

      _classPrivateMethodGet(this, _switchAudio, _switchAudio2).call(this, audio, index);

      _classPrivateMethodGet(this, _afterAudioChange, _afterAudioChange2).call(this, direct);
    }
  }]);

  return Navigation;
}();

function _prepareAudioChange2(audio) {
  var coreAudio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();
  coreAudio.stop(); // Sync elements

  _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.syncAllToPause();
  /**
   * @todo Song Slider Elements -> reset
   * @todo Song Played Progress Elements -> reset
   * @todo Time Elements -> reset 
   * ( See src/utilities/audioNavigation.js Line #528)
   */

  /**
   * @todo we don't have album change callback, make note.
   */
}

function _switchAudio2(audio, index) {
  _config__WEBPACK_IMPORTED_MODULE_1__.config.audio_element.src = audio.url;
  _config__WEBPACK_IMPORTED_MODULE_1__.config.active_metadata = audio;
  /** 
   * @todo We don't have active_album. make note.
   */

  _config__WEBPACK_IMPORTED_MODULE_1__.config.active_index = parseInt(index);
}

function _afterAudioChange2(direct) {
  _classPrivateMethodGet(this, _updateMetaData, _updateMetaData2).call(this);
  /**
   * @todo container elements -> set active
   * @todo time elements -> reset duration times
   * ( see src/utilities/audioNavigation.js Line #558 )
   */


  _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__.Callbacks.run('audio_change');
}

function _updateMetaData2() {
  var metaData = new _elements_MetaDataElement__WEBPACK_IMPORTED_MODULE_4__.MetaDataElement();
  metaData.displayMetaData();
}

/***/ }),

/***/ "./src/services/Callbacks.js":
/*!***********************************!*\
  !*** ./src/services/Callbacks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Callbacks": () => (/* binding */ Callbacks)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Callbacks = /*#__PURE__*/function () {
  function Callbacks() {
    _classCallCheck(this, Callbacks);
  }

  _createClass(Callbacks, null, [{
    key: "run",
    value: function run() {}
  }]);

  return Callbacks;
}();

/***/ }),

/***/ "./src/services/Collections/Checks.js":
/*!********************************************!*\
  !*** ./src/services/Collections/Checks.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checks": () => (/* binding */ Checks)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Checks = /*#__PURE__*/function () {
  function Checks() {
    _classCallCheck(this, Checks);
  }

  _createClass(Checks, null, [{
    key: "collectionExists",
    value: function collectionExists(key) {
      if (_config__WEBPACK_IMPORTED_MODULE_0__.config.collections[key]) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "collectionChanged",
    value: function collectionChanged(collection) {
      if (_config__WEBPACK_IMPORTED_MODULE_0__.config.active_collection != collection) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "isCollectionShuffled",
    value: function isCollectionShuffled(collection) {
      if (_config__WEBPACK_IMPORTED_MODULE_0__.config.collections[collection].shuffle) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Checks;
}();

/***/ }),

/***/ "./src/services/Collections/Navigation.js":
/*!************************************************!*\
  !*** ./src/services/Collections/Navigation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _core_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/Audio */ "./src/core/Audio.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/Callbacks */ "./src/services/Callbacks.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
/* harmony import */ var _elements_MetaDataElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/elements/MetaDataElement */ "./src/elements/MetaDataElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _findNextAudio = /*#__PURE__*/new WeakSet();

var _repeatedAudio = /*#__PURE__*/new WeakSet();

var _nextShuffledAudio = /*#__PURE__*/new WeakSet();

var _nextCollectionAudio = /*#__PURE__*/new WeakSet();

var _playNextAudio = /*#__PURE__*/new WeakSet();

var _prepareAudioChange = /*#__PURE__*/new WeakSet();

var _switchAudio = /*#__PURE__*/new WeakSet();

var _afterAudioChange = /*#__PURE__*/new WeakSet();

var _updateMetaData = /*#__PURE__*/new WeakSet();

var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    _classCallCheck(this, Navigation);

    _classPrivateMethodInitSpec(this, _updateMetaData);

    _classPrivateMethodInitSpec(this, _afterAudioChange);

    _classPrivateMethodInitSpec(this, _switchAudio);

    _classPrivateMethodInitSpec(this, _prepareAudioChange);

    _classPrivateMethodInitSpec(this, _playNextAudio);

    _classPrivateMethodInitSpec(this, _nextCollectionAudio);

    _classPrivateMethodInitSpec(this, _nextShuffledAudio);

    _classPrivateMethodInitSpec(this, _repeatedAudio);

    _classPrivateMethodInitSpec(this, _findNextAudio);
  }

  _createClass(Navigation, [{
    key: "next",
    value:
    /**
     * Sets the next song in a collection.
     * 
     * @param {string} collectionKey - The collection to navigate. Defaults to the active collection.
     * @param {boolean} audioEnded - If the audio ended, this is true to take in effect the repeat setting.
     */
    function next() {
      var collectionKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var audioEnded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!collectionKey) {
        collectionKey = _config__WEBPACK_IMPORTED_MODULE_1__.config.active_collection;
      }

      var nextAudio = _classPrivateMethodGet(this, _findNextAudio, _findNextAudio2).call(this, collectionKey);

      this.setActiveCollection(collectionKey);
      this.changeCollectionAudio(collectionKey, nextAudio, audio, nextAudio.index);

      _classPrivateMethodGet(this, _playNextAudio, _playNextAudio2).call(this, nextAudio.end, audioEnded);

      _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.syncAll();
      _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__.Callbacks.run("next");

      if (_config__WEBPACK_IMPORTED_MODULE_1__.config.repeat_audio) {
        _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__.Callbacks.run("audio_repeated");
      }
    }
  }, {
    key: "setActiveCollection",
    value: function setActiveCollection(collection) {
      if (_config__WEBPACK_IMPORTED_MODULE_1__.config.active_collection != collection) {
        _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__.Callbacks.run("collection_changed");
        _config__WEBPACK_IMPORTED_MODULE_1__.config.active_collection = collection;

        if (collection != null) {
          _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collection].active_index = 0;
        }
      }
    }
    /**
     * Handles audio change in a collection
     *
     * @prop {string} collection - The collection we are changing the song on.
     * @prop {object} audio - The audio object we are changing to in the collection.
     * @prop {number} index - The index of the song we are changing to in the collection.
     * @prop {boolean} direct - Determines if it was a direct click on the song. We
     * then don't care if shuffle is on or not
     */

  }, {
    key: "changeAudioCollection",
    value: function changeAudioCollection(collection, audio, index, direct) {
      _classPrivateMethodGet(this, _prepareAudioChange, _prepareAudioChange2).call(this, audio);

      _classPrivateMethodGet(this, _switchAudio, _switchAudio2).call(this, collection, audio, index);

      _classPrivateMethodGet(this, _afterAudioChange, _afterAudioChange2).call(this, direct);
    }
  }]);

  return Navigation;
}();

function _findNextAudio2(collectionKey) {
  if (_config__WEBPACK_IMPORTED_MODULE_1__.config.repeat_audio) {
    return _classPrivateMethodGet(this, _repeatedAudio, _repeatedAudio2).call(this, collectionKey);
  } else {
    if (_config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].shuffle) {
      return _classPrivateMethodGet(this, _nextShuffledAudio, _nextShuffledAudio2).call(this, collectionKey);
    } else {
      return _classPrivateMethodGet(this, _nextCollectionAudio, _nextCollectionAudio2).call(this, collectionKey);
    }
  }
}

function _repeatedAudio2(collectionKey) {
  var nextIndex = _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].active_index;
  return {
    'index': nextIndex,
    'audio': _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].shuffle ? _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].shuffle_list[nextIndex] : _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].audio[nextIndex],
    'end': false
  };
}

function _nextShuffledAudio2(collectionKey) {
  var nextIndex = null;
  var endOfList = false;
  var activeIndex = _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].active_index;
  var shuffleCollectionLength = _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].shuffle_list.length;

  if (parseInt(activeIndex + 1) < shuffleCollectionLength) {
    nextIndex = parseInt(activeIndex + 1);
  } else {
    nextIndex = 0;
    endOfList = true;
  }

  return {
    'index': nextIndex,
    'audio': _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].shuffleList[nextIndex],
    'end': endOfList
  };
}

function _nextCollectionAudio2(collectionKey) {
  var nextIndex = null;
  var endOfList = false;
  var activeIndex = _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].active_index;
  var collectionLength = _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].audio.length;

  if (parseInt(activeIndex + 1) < collectionLength) {
    nextIndex = parseInt(activeIndex + 1);
  } else {
    nextIndex = 0;
    endOfList = true;
  }

  return {
    'index': nextIndex,
    'audio': _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collectionKey].audio[nextIndex],
    'end': endOfList
  };
}

function _playNextAudio2(endOfList, audioEnded) {
  // If it's the end of the collection and we aren't repeating, do nothing.
  if (endOfList && !_config__WEBPACK_IMPORTED_MODULE_1__.config.repeat_audio) {} else {
    if (!(audioEnded && !_config__WEBPACK_IMPORTED_MODULE_1__.config.repeat_audio && endOfList)) {
      var _audio = new _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio();

      _audio.play();
    }
  }
}

function _prepareAudioChange2(audio) {
  _core_Audio__WEBPACK_IMPORTED_MODULE_0__.Audio.stop(); // Sync elements

  _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_3__.PlayPauseElement.syncAllToPause();
  /**
   * @todo Song Slider Elements -> reset
   * @todo Song Played Progress Elements -> reset
   * @todo Time Elements -> reset 
   * ( See src/utilities/audioNavigation.js Line #528)
   */

  /**
   * @todo we don't have album change callback, make note.
   */
}

function _switchAudio2(collection, audio, index) {
  _config__WEBPACK_IMPORTED_MODULE_1__.config.audio_element = audio.url;
  _config__WEBPACK_IMPORTED_MODULE_1__.config.active_metadata = audio;
  /** 
   * @todo We don't have active_album. make note.
   */

  _config__WEBPACK_IMPORTED_MODULE_1__.config.active_index = null;
  _config__WEBPACK_IMPORTED_MODULE_1__.config.collections[collection].active_index = parseInt(index);
}

function _afterAudioChange2(direct) {
  _classPrivateMethodGet(this, _updateMetaData, _updateMetaData2).call(this);
  /**
   * @todo container elements -> set active
   * @todo time elements -> reset duration times
   * ( see src/utilities/audioNavigation.js Line #558 )
   */


  _services_Callbacks__WEBPACK_IMPORTED_MODULE_2__.Callbacks.run('audio_change');
}

function _updateMetaData2() {
  var metaData = new _elements_MetaDataElement__WEBPACK_IMPORTED_MODULE_4__.MetaDataElement();
  metaData.displayMetaData();
}

/***/ }),

/***/ "./src/services/ConfigState.js":
/*!*************************************!*\
  !*** ./src/services/ConfigState.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigState": () => (/* binding */ ConfigState)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }



var _setDefaultLiveSettings = /*#__PURE__*/new WeakSet();

var _setDefaultAudioIndices = /*#__PURE__*/new WeakSet();

var ConfigState = /*#__PURE__*/function () {
  function ConfigState() {
    _classCallCheck(this, ConfigState);

    _classPrivateMethodInitSpec(this, _setDefaultAudioIndices);

    _classPrivateMethodInitSpec(this, _setDefaultLiveSettings);
  }

  _createClass(ConfigState, [{
    key: "setIsMobile",
    value: function setIsMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.mobile = true;
      } else {
        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.mobile = false;
      }
    }
  }, {
    key: "resetConfig",
    value: function resetConfig() {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element = new Audio();
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_metadata = {};
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_album = "";
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_index = 0;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_playlist = null;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.playback_speed = 1.0;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.callbacks = {};
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio = [];
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.playlists = {};
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.start_audio = "";
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.starting_playlist = "";
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.starting_playlist_song = "";
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.repeat = false;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.shuffle_list = {};
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.shuffle_on = false;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.default_artwork = "";
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.default_playlist_art = "";
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.debug = true;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.volume = 0.5;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.pre_mute_volume = 0.5;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.volume_increment = 5;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.volume_decrement = 5;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.soundcloud = {
        client: '',
        use_art: false,
        audio_count: 0,
        ready_count: 0
      },
      /**
       * @todo BREAKING CHANGE
       */
      // config.soundcloud_client = "";
      // config.soundcloud_use_art = false;
      // config.soundcloud_song_count = 0;
      // config.soundcloud_songs_ready = 0;
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.continue_next = true;
    }
  }, {
    key: "setUserSettings",
    value: function setUserSettings(userConfig) {
      this.setAudio(userConfig.audio);
      this.setDebug(userConfig.debug);
      this.setDefaultArtwork(userConfig.default_artwork);
      this.setGroupings(userConfig.groupings);
      this.setPlaybackSpeed(userConfig.playback_speed);
      this.setCallbacks(userConfig.callbacks);
    }
  }, {
    key: "setAudio",
    value: function setAudio(value) {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio = value != undefined ? value : [];

      _classPrivateMethodGet(this, _setDefaultLiveSettings, _setDefaultLiveSettings2).call(this);

      _classPrivateMethodGet(this, _setDefaultAudioIndices, _setDefaultAudioIndices2).call(this);
    }
  }, {
    key: "setDebug",
    value: function setDebug(value) {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.debug = value != undefined ? value : false;
    }
  }, {
    key: "setDefaultArtwork",
    value: function setDefaultArtwork(value) {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.default_artwork = value != undefined ? value : false;
    }
  }, {
    key: "setGroupings",
    value: function setGroupings(groupings) {// @todo set groupings
    }
  }, {
    key: "setPlaybackSpeed",
    value: function setPlaybackSpeed(speed) {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.playback_speed = speed != undefined ? speed : 1.0;
    }
  }, {
    key: "setCallbacks",
    value: function setCallbacks(callbacks) {
      _config_js__WEBPACK_IMPORTED_MODULE_0__.config.callbacks = callbacks != undefined ? callbacks : {};
    }
  }], [{
    key: "isMobile",
    value: function isMobile() {
      return _config_js__WEBPACK_IMPORTED_MODULE_0__.config.mobile;
    }
  }, {
    key: "isTouchMoving",
    value: function isTouchMoving() {
      return _config_js__WEBPACK_IMPORTED_MODULE_0__.config.is_touch_moving;
    }
  }, {
    key: "getAudioState",
    value: function getAudioState() {
      return _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.paused ? "paused" : "playing";
    }
  }, {
    key: "getScope",
    value: function getScope() {
      if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_collection == '' || _config_js__WEBPACK_IMPORTED_MODULE_0__.config.active_collection == null) {
        return 'audio';
      } else {
        return 'collection';
      }
    }
  }, {
    key: "setPlayerState",
    value: function setPlayerState() {
      // If paused and the current time is 0 the player is stopped.
      if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.paused && _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.currentTime == 0) {
        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.player_state = "stopped";
      } // If paused and the current time is greater than 0 the player is paused.


      if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.paused && _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.currentTime > 0) {
        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.player_state = "paused";
      } // If playing, the current state is playing.


      if (!_config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio_element.paused) {
        _config_js__WEBPACK_IMPORTED_MODULE_0__.config.player_state = "playing";
      }
    }
  }]);

  return ConfigState;
}();

function _setDefaultLiveSettings2() {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio.forEach(function (audio, index) {
    if (audio.live == undefined) {
      audio.live = false;
    }
  });
}

function _setDefaultAudioIndices2() {
  _config_js__WEBPACK_IMPORTED_MODULE_0__.config.audio.forEach(function (audio, index) {
    audio.index = index;
  });
}

/***/ }),

/***/ "./src/services/EventManager.js":
/*!**************************************!*\
  !*** ./src/services/EventManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventManager": () => (/* binding */ EventManager)
/* harmony export */ });
/* harmony import */ var _events_TimeUpdateEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/events/TimeUpdateEvent */ "./src/events/TimeUpdateEvent.js");
/* harmony import */ var _utilities_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utilities/debug */ "./src/utilities/debug.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _bindTouchEvents = /*#__PURE__*/new WeakSet();

var _bindTimeUpdateEvents = /*#__PURE__*/new WeakSet();

var _bindKeyBindingEvents = /*#__PURE__*/new WeakSet();

var _bindAudioEndedEvent = /*#__PURE__*/new WeakSet();

var _bindProgressEvent = /*#__PURE__*/new WeakSet();

var EventManager = /*#__PURE__*/function () {
  function EventManager() {
    _classCallCheck(this, EventManager);

    _classPrivateMethodInitSpec(this, _bindProgressEvent);

    _classPrivateMethodInitSpec(this, _bindAudioEndedEvent);

    _classPrivateMethodInitSpec(this, _bindKeyBindingEvents);

    _classPrivateMethodInitSpec(this, _bindTimeUpdateEvents);

    _classPrivateMethodInitSpec(this, _bindTouchEvents);
  }

  _createClass(EventManager, [{
    key: "initializeAllEvents",
    value: function initializeAllEvents() {
      _utilities_debug__WEBPACK_IMPORTED_MODULE_1__.Debug.writeMessage("Starting initialization of event handlers...");

      _classPrivateMethodGet(this, _bindTouchEvents, _bindTouchEvents2).call(this);

      _classPrivateMethodGet(this, _bindTimeUpdateEvents, _bindTimeUpdateEvents2).call(this);

      _classPrivateMethodGet(this, _bindKeyBindingEvents, _bindKeyBindingEvents2).call(this);

      _classPrivateMethodGet(this, _bindAudioEndedEvent, _bindAudioEndedEvent2).call(this);

      _classPrivateMethodGet(this, _bindProgressEvent, _bindProgressEvent2).call(this);
    }
  }]);

  return EventManager;
}();

function _bindTouchEvents2() {
  document.addEventListener("touchmove", function () {
    _config_js__WEBPACK_IMPORTED_MODULE_2__.config.is_touch_moving = true;
  });
  document.addEventListener("touchend", function () {
    if (!_config_js__WEBPACK_IMPORTED_MODULE_2__.config.is_touch_moving) {
      _config_js__WEBPACK_IMPORTED_MODULE_2__.config.is_touch_moving = false;
    }
  });
}

function _bindTimeUpdateEvents2() {// let timeUpdateEvent = new TimeUpdateEvent();
  // timeUpdateEvent.bind();
}

function _bindKeyBindingEvents2() {}

function _bindAudioEndedEvent2() {}

function _bindProgressEvent2() {}

/***/ }),

/***/ "./src/services/UIManager.js":
/*!***********************************!*\
  !*** ./src/services/UIManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIManager": () => (/* binding */ UIManager)
/* harmony export */ });
/* harmony import */ var _elements_NextElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/elements/NextElement */ "./src/elements/NextElement.js");
/* harmony import */ var _elements_MetaDataElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/elements/MetaDataElement */ "./src/elements/MetaDataElement.js");
/* harmony import */ var _elements_PauseElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/elements/PauseElement */ "./src/elements/PauseElement.js");
/* harmony import */ var _elements_PlayElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/elements/PlayElement */ "./src/elements/PlayElement.js");
/* harmony import */ var _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/elements/PlayPauseElement */ "./src/elements/PlayPauseElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }







var _initializeMetaData = /*#__PURE__*/new WeakSet();

var _initializePlayElement = /*#__PURE__*/new WeakSet();

var _initializePauseElement = /*#__PURE__*/new WeakSet();

var _initializePlayPauseElement = /*#__PURE__*/new WeakSet();

var _initializeNextElement = /*#__PURE__*/new WeakSet();

var UIManager = /*#__PURE__*/function () {
  function UIManager() {
    _classCallCheck(this, UIManager);

    _classPrivateMethodInitSpec(this, _initializeNextElement);

    _classPrivateMethodInitSpec(this, _initializePlayPauseElement);

    _classPrivateMethodInitSpec(this, _initializePauseElement);

    _classPrivateMethodInitSpec(this, _initializePlayElement);

    _classPrivateMethodInitSpec(this, _initializeMetaData);
  }

  _createClass(UIManager, [{
    key: "setVisualElementsDefaults",
    value: function setVisualElementsDefaults() {}
  }, {
    key: "initializeElements",
    value: function initializeElements() {
      _classPrivateMethodGet(this, _initializeMetaData, _initializeMetaData2).call(this);

      _classPrivateMethodGet(this, _initializePlayElement, _initializePlayElement2).call(this);

      _classPrivateMethodGet(this, _initializePauseElement, _initializePauseElement2).call(this);

      _classPrivateMethodGet(this, _initializePlayPauseElement, _initializePlayPauseElement2).call(this);

      _classPrivateMethodGet(this, _initializeNextElement, _initializeNextElement2).call(this);
    }
  }]);

  return UIManager;
}();

function _initializeMetaData2() {
  var metaDataElement = new _elements_MetaDataElement__WEBPACK_IMPORTED_MODULE_1__.MetaDataElement();
  metaDataElement.syncMetaData();
}

function _initializePlayElement2() {
  var playElement = new _elements_PlayElement__WEBPACK_IMPORTED_MODULE_3__.PlayElement();
  playElement.setUp();
}

function _initializePauseElement2() {
  var pauseElement = new _elements_PauseElement__WEBPACK_IMPORTED_MODULE_2__.PauseElement();
  pauseElement.setUp();
}

function _initializePlayPauseElement2() {
  var playPauseElement = new _elements_PlayPauseElement__WEBPACK_IMPORTED_MODULE_4__.PlayPauseElement();
  playPauseElement.setUp();
}

function _initializeNextElement2() {
  var nextElement = new _elements_NextElement__WEBPACK_IMPORTED_MODULE_0__.NextElement();
  nextElement.setUp();
}

/***/ }),

/***/ "./src/utilities/debug.js":
/*!********************************!*\
  !*** ./src/utilities/debug.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Debug": () => (/* binding */ Debug)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config.js */ "./src/config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Debug = /*#__PURE__*/function () {
  function Debug() {
    _classCallCheck(this, Debug);
  }

  _createClass(Debug, null, [{
    key: "writeMessage",
    value: function writeMessage(message) {
      if (_config_js__WEBPACK_IMPORTED_MODULE_0__.config.debug) {
        console.log(message);
      }
    }
  }]);

  return Debug;
}();

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"amplitudejs","version":"6.0.0","description":"A JavaScript library that allows you to control the design of your media controls in your webpage -- not the browser. No dependencies (jQuery not required) https://serversideup.net/open-source/amplitudejs","main":"dist/amplitude.js","devDependencies":{"@babel/core":"^7.17.10","@babel/preset-env":"^7.17.10","babel-loader":"^8.2.5","webpack":"^5.72.0","webpack-cli":"^4.9.2"},"directories":{"doc":"docs"},"files":["dist"],"funding":{"type":"opencollective","url":"https://opencollective.com/amplitudejs"},"scripts":{"dev":"webpack --config webpack.development.config.js","build":"webpack --config webpack.production.config.js","prettier":"npx pretty-quick","preversion":"npx pretty-quick && npm run test","postversion":"git push && git push --tags","test":"jest","version":"npm run build && git add -A dist"},"repository":{"type":"git","url":"git+https://github.com/521dimensions/amplitudejs.git"},"keywords":["webaudio","html5","javascript","audio-player"],"author":"521 Dimensions (https://521dimensions.com)","license":"MIT","bugs":{"url":"https://github.com/521dimensions/amplitudejs/issues"},"homepage":"https://github.com/521dimensions/amplitudejs#readme"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _methods_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/methods/init */ "./src/methods/init.js");
/* harmony import */ var _methods_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/methods/config */ "./src/methods/config.js");
/* harmony import */ var _methods_playlists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/methods/playlists */ "./src/methods/playlists.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @name AmplitudeJS
 * @author Dan Pastori (Server Side Up) <hello@serversideup.net>
 */



/**
 * Amplitude is an interface to the public methods.
 * All public methods are in the /methods directory.
 * These methods use clases to perform functionality.
 * The state is stored in /config.js
 *
 * @module Amplitude
 */

var Amplitude = function () {
  return _objectSpread(_objectSpread(_objectSpread({}, _methods_init__WEBPACK_IMPORTED_MODULE_0__), _methods_config__WEBPACK_IMPORTED_MODULE_1__), _methods_playlists__WEBPACK_IMPORTED_MODULE_2__);
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Amplitude);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=amplitude.js.map