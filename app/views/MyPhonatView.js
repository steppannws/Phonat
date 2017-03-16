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

export default class MyPhonatView extends Component {
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
                <Title>My Phonat</Title>
            </Body>
            <Right>
                <Button transparent>
                    
                </Button>
            </Right>
        </Header>

        <Content>

          <View style={styles.userContainer}>
            <Thumbnail square style={styles.buttonIcon1} source={require('../assets/icons/menu/MyPhonat.png')} />
            <H3 style={{color: '#0067f5'}}>Jhon Smith</H3>
          </View>
          
          <List style={{padding:10, marginTop:20}}>
            <ListItem button>
              <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos_clickeada.png')} />
              <Text style={{color: '#000', textSize:12}}>Favoritos</Text>
            </ListItem>
            <ListItem button>
              <Thumbnail square style={styles.buttonIcon2} source={require('../assets/icons/listadoscategorias/descuentos.png')} />
              <Text style={{color: '#000', textSize:12}}>Descuentos</Text>
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
  buttonIcon: {width:25, height: 25, marginRight: 20},
  buttonIcon1: {width:40, height: 40, marginRight: 20},
  buttonIcon2: {width:28, height: 23, marginRight: 20},
  footerIcon: {width:30, height: 30},
  userContainer: {flex: 1, flexDirection: 'row', alignItems: 'center', marginTop:50, marginRight:30, marginLeft: 30, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#0067f5'},
  serviceBgImage: {flex: 1, resizeMode: 'center', alignItems: 'center', alignSelf: 'center', paddingTop:25,  width:150},
  row: {height: 105, marginLeft:0, marginRight: 0, marginTop: 0 }
};
