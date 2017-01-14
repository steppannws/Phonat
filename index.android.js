/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button,
  Linking
} from 'react-native';

import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'

export default class Phonat extends Component {

  open() {
    // Linking.openURL('tel:911').catch(err => console.error('An error occurred', err));

    IntentLauncher.openApp("com.humber");
    return;
    IntentLauncher.startActivity({
      // action: 'android.settings.APPLICATION_DETAILS_SETTINGS',
      // action: 'android.intent.action.CALL',
      action: 'android.intent.action.VIEW',
      flags: 4096,
      // action: 'android.',
      // data: 'package:com.example'
      // category: 'android.intent.category.LAUNCHER',
      data: 'package:com.humber'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to !
        </Text>
        <Button
          onPress={() => {this.open()}}
          title="SOS"
          color="#FF3300"
          accessibilityLabel="Open"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Phonat', () => Phonat);
