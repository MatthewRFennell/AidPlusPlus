'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import Danger from './DR ABC/Danger'
import Response from './DR ABC/Response'
import Airway from './DR ABC/Airway'
import Breathing from './DR ABC/Breathing'
import Circulation from './DR ABC/Circulation'
import {Router, Scene} from "react-native-router-flux";

const App = () => (
    <Router>
      <Scene key="root">
        <Scene key="Danger" component={Danger} title="Danger"/>
        <Scene key="Response" component={Response} title="Response"/>
        <Scene key="Airway" component={Airway} title="Airway"/>
        <Scene key="Breathing" component={Breathing} title="Breathing"/>
        <Scene key="Circulation" component={Circulation} title="Circulation"/>
      </Scene>
    </Router>
);


export default class HelloWorldScene extends Component {

  constructor(props) {
    super(props);

    this.state = {} // Set initial state here
  }

  render() {
    return (
        <App />
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldScene;
