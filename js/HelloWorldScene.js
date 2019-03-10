'use strict';

import React, { Component, Button } from 'react';

import {StyleSheet} from 'react-native';

export default class HelloWorldScene extends Component {

  constructor(props) {
    super(props);

    this.state = {} // Set initial state here
  }

  render() {
    return (
        <Button
            title="Danger"
            color="#841584"
            accessibilityLabel="Learn more about Danger"
        />
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
