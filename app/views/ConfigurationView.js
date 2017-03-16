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

export default class ConfigurationView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      language: 'esp',
      showLangButtons: false,
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
                <Title>Configuración</Title>
            </Body>
        </Header>

        <Content>

          <List style={{padding:20}}>
            
            <ListItem button onPress={() => {}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/configuracion/wifi.png')} />
              <H3 style={{color: '#000'}}>Wi Fi</H3>
            </ListItem>
            
            <ListItem button onPress={() => {}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/configuracion/bluetooth.png')} />
              <H3 style={{color: '#000'}}>Bluetooth</H3>
            </ListItem>
            
            <ListItem button onPress={() => {}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/configuracion/modo_avion.png')} />
              <H3 style={{color: '#000'}}>Modo avión</H3>
            </ListItem>
            
            <ListItem button onPress={() => {}} >
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/configuracion/bateria.png')} />
              <H3 style={{color: '#000'}}>Batería</H3>
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
