/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "63DD34D0-2C2C-4F4B-9AAA-AAACBD8C042C";

var arScenes = {
  'ARCarDemo' : require('./js/HelloWorldSceneAR.js'),
}

var showARScene = true;

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {

    if (showARScene) {
      return (
        <ViroARSceneNavigator
          initialScene={{
            scene: arScenes['ARCarDemo'],
          }}
          apiKey={apiKey} />
        );
    } else {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['360PhotoTour'],
          }}
          apiKey={apiKey} />
      );

    }
  }
});

module.exports = ViroCodeSamplesSceneNavigator;
