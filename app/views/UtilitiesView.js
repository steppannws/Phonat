import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, List, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';
import SendIntentAndroid from 'react-native-send-intent';
// var SendIntentAndroid = require('react-native-send-intent');
import EStyleSheet from 'react-native-extended-stylesheet';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import SideBar from '../ui/SideBar';
import FooterMenu from '../ui/FooterMenu';

export default class UtilitiesView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      language: 'esp',
      showLangButtons: false,
    }
  }

  runApp(action) {
    switch(action) { 
      case 'calendar':
        try {
          IntentLauncher.startActivity({
            action: IntentConstant.ACTION_MAIN,
            category: IntentConstant.CATEGORY_APP_CALENDAR
          });
        } catch(error) {
          console.warn(error);
        }
        break;
      case 'calculadora':
        try {
          IntentLauncher.startActivity({
            action: IntentConstant.ACTION_MAIN,
            category: IntentConstant.CATEGORY_APP_CALCULATOR
          });
        } catch(error) {
          console.warn(error);
        }
        break;
      case 'calculator':
        try {
          IntentLauncher.startActivity({
            action: IntentConstant.ACTION_MAIN,
            category: IntentConstant.CATEGORY_APP_CALCULATOR
          });
        } catch(error) {
          console.warn(error);
        }
        break;
      case 'alarm':
      SendIntentAndroid.openApp('com.android.deskclock')
                       .then((wasOpened) => {});
        /*try {
          var extra = {
            'android.intent.extra.alarm.MESSAGE': 'Nueva Alarma',
            'android.intent.extra.alarm.HOUR': 10,
            'android.intent.extra.alarm.MINUTE': 30,
          };
          IntentLauncher.startActivity({
            action: 'android.intent.action.SET_ALARM',//IntentConstant.ACTION_MAIN,
            extra: extra
            // category: IntentConstant.CATEGORY_APP_CALCULATOR
            // action: 'android.intent.action.VIEW',
            // data: 'package:com.android.deskclock'
          });
        } catch(error) {
          console.warn(error);
        }*/
        break;
      case 'lantern':
        
        /*try {
          IntentLauncher.startActivity({
            // action: 'android.media.action.IMAGE_CAPTURE'
            // category: IntentConstant.CATEGORY_APP_BROWSER

            action: IntentConstant.ACTION_MAIN,
            category: IntentConstant.CATEGORY_APP_GALLERY
          });
        } catch(error) {
          console.warn(error);
        }*/

        break;
    }
  }

  render() {
    closeDrawer = () => {
      // this._drawer._root.close()
    };
    openDrawer = () => {
      // this._drawer._root.open()
    };
    return (
    <StyleProvider style={getTheme(material)}>

      <Drawer 
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar />}
        onClose={() => {}} >

        <Container>

          <Header hasTabs>
            <Left>
                <Button transparent 
                        onPress={() => {this._drawer._root.open()}} >
                    <Icon name='bars' />
                </Button>
            </Left>
            <Body>
                <Title>Utilidades</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>

        <Content>

          <List style={{padding:20}}>
            
            <ListItem button onPress={() => {this.runApp('calculator')}} >
              <Thumbnail square style={styles.buttonIcon1} source={require('../assets/icons/utils/calculadora.png')} />
              <H3 style={{color: '#000'}}>Calculadora</H3>
            </ListItem>
            
            <ListItem button onPress={() => {this.runApp('alarm')}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/utils/alarma.png')} />
              <H3 style={{color: '#000'}}>Alarma</H3>
            </ListItem>
            
            <ListItem button onPress={() => {this.runApp('calendar')}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/utils/calendario.png')} />
              <H3 style={{color: '#000'}}>Calendario</H3>
            </ListItem>
            
            <ListItem button onPress={() => {this.runApp('lantern')}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/utils/linterna.png')} />
              <H3 style={{color: '#000'}}>Linterna</H3>
            </ListItem>

            <ListItem button onPress={() => {this.runApp('notes')}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/utils/notas.png')} />
              <H3 style={{color: '#000'}}>Notas</H3>
            </ListItem>

            <ListItem button onPress={() => {this.runApp('conversor')}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/utils/conversor.png')} />
              <H3 style={{color: '#000'}}>Conversor</H3>
            </ListItem>

          </List>
          
        </Content>

        <FooterMenu />

      </Container>

    </Drawer>

  </StyleProvider>
    );
  }
}

const styles = {
  buttonIcon: {width:30, height: 30, marginRight: 20},
  buttonIcon1: {width:30, height: 38, marginRight: 20},
  footerIcon: {width:30, height: 30},
  serviceBgImage: {flex: 1, resizeMode: 'center', alignItems: 'center', alignSelf: 'center', paddingTop:25,  width:150},
  row: {height: 105, marginLeft:0, marginRight: 0, marginTop: 0 }
};
