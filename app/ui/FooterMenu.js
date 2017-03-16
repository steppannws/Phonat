import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, Button, FooterTab, Thumbnail, Text } from 'native-base';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';
import {Actions} from 'react-native-router-flux';
import Utils from '../utils/Utils'
// import ImagePicker from 'react-native-image-picker';
// var ImagePicker = require('react-native-image-picker');

export default class FooterMenu extends Footer {
  buttonPredded(action) {
    switch(action) {
      case 'call':
        try {
          IntentLauncher.startActivity({
            // action: IntentConstant.ACTION_CALL_BUTTON
            action: IntentConstant.ACTION_DIAL
          });
        } catch(error) {
          console.warn(error);
        } 
        break;   
      case 'browser':
        try {
          IntentLauncher.startActivity({
            action: IntentConstant.ACTION_MAIN,
            category: IntentConstant.CATEGORY_APP_BROWSER
          });
        } catch(error) {
          console.warn(error);
        }
        break;
      case 'camera':
        Utils.showAlertTwo("Camara", "Sacar foto o abrir galería", "Sacar foto", "Abrir galería", () =>{
          try {
            IntentLauncher.startActivity({
              action: 'android.media.action.IMAGE_CAPTURE'
            });
          } catch(error) {
            console.warn(error);
          }
        }, () => {
          try {
            IntentLauncher.startActivity({
              action: IntentConstant.ACTION_MAIN,
              category: IntentConstant.CATEGORY_APP_GALLERY
              // category: IntentConstant.CATEGORY_APP_BROWSER
            });
          } catch(error) {
            console.warn(error);
          }
        });
        break;
      case 'apps': 
        Actions.apps();
        break;
    }
  }

  render() {
    return (
        <Footer >
          <FooterTab>
              <Button onPress={() => this.buttonPredded('call')}>
                  <Thumbnail square style={styles.footerIcon} source={require('../assets/icons/dock/llamada.png')} />
                  <Text style={{fontSize: 9}} numberOfLines={1}>Llamadas</Text>
              </Button>
              <Button onPress={() => this.buttonPredded('camera')}>
                  <Thumbnail square style={styles.footerIcon} source={require('../assets/icons/dock/foto.png')} />
                  <Text style={{fontSize: 9}}>Camara</Text>
              </Button>
              <Button onPress={() => this.buttonPredded('apps')}>
                  <Thumbnail square style={styles.footerIcon} source={require('../assets/icons/dock/apps.png')} />
                  <Text style={{fontSize: 9}}>Apps</Text>
              </Button>
              <Button onPress={() => Actions.maps()}>
                  <Thumbnail square style={styles.footerIcon} source={require('../assets/icons/dock/mapa.png')} />
                  <Text style={{fontSize: 9}}>Mapa</Text>
              </Button>
              <Button onPress={() => this.buttonPredded('browser')}>
                  <Thumbnail square style={styles.footerIcon} source={require('../assets/icons/dock/navegador.png')} />
                  <Text style={{fontSize: 8}} numberOfLines={1} >Navegador</Text>
              </Button>
          </FooterTab>
        </Footer>
    );
  }
}

const styles = {
  footerIcon: {width:30, height: 30},
};