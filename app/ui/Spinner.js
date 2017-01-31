
'use strict'

import React, { Component } from 'react';
import { 
  View,
  ActivityIndicatorIOS,
  ActivityIndicator,
  // ProgressBarAndroid,
  Platform 
} from 'react-native';

var Spinner = React.createClass({
  
  _getSpinner() {
    let size = 200;

    if(this.props.size)
      size = this.props.size;

    return (
      <ActivityIndicator
        animating={true}
        color="#ffffff"
        style={[{height: 400}]}
        size="large"
      />
    );
/*
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid 
          style={{
            height: size,
          }}
          styleAttr="LargeInverse"
          {...this.props}
        />
      );
    } else {
      return (
        <ActivityIndicatorIOS
          animating={true}
          size="small"
          {...this.props}
        />
      );
    }*/
  },
  
  render() {
    return (
      <View>
        {this._getSpinner()}
      </View>
    );
  },
  
});


module.exports = Spinner;