'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  PixelRatio,
  TouchableOpacity,
  Platform,
  Modal,
  Linking
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import DeviceInfo from 'react-native-device-info';
import {Actions} from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import Loading from '../ui/Loading';
import Utils from '../utils/Utils';
import api from '../data/api';

class SplashView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    }
  }

  componentDidMount() {    
    setTimeout(() => {Actions.welcome()}, 3000);
    // setTimeout(() => {Actions.home()}, 3000);
  }

  componentWillUnmount() {
  }

  showLoading() {
    this.setState({
      isLoading: true,
    });
  }

  closeLoading() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    return (

      <View style={styles.container}>

       <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.isLoading}
          onRequestClose={() => {this.closeLoading()}}
          >
         <View>
          <Loading />
         </View>
        </Modal>

        <Image style={styles.bg} source={require('../assets/bg2.png')} />
      </View>      
    );
  }
}

var styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%'
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  separator: {
    height: 30,
  }
});

module.exports = SplashView;
