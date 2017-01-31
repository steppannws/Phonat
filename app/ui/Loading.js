'use strict'

import React, { Component } from 'react';
import { 
  View,
  StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
import Spinner from './Spinner';
import Utils from '../utils/Utils';

var screenSize = Dimensions.get('window');

var Loading = React.createClass({ 
  render() {
    return (
      <View style={styles.container}>
        <Spinner size={100} color={'white'}/>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenSize.width,
    height: screenSize.height,
    backgroundColor: 'black',
    opacity: .5, 
  }
});


module.exports = Loading;