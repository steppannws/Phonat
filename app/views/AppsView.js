import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { StyleProvider, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, List, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';
import SendIntentAndroid from 'react-native-send-intent';
// var SendIntentAndroid = require('react-native-send-intent');
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')
import EStyleSheet from 'react-native-extended-stylesheet';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import SideBar from '../ui/SideBar';
import FooterMenu from '../ui/FooterMenu';

export default class AppsView extends Component {
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
      case 'alarm':
        SendIntentAndroid.openApp('com.android.deskclock')
                         .then((wasOpened) => {});
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
                <Title>Apps</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>

        <Content>
          <Image source={require('../assets/images/apps/Fondo_Apps.png')} style={{ resizeMode: 'cover', width:width+5, height:height-170}}>
                <View style={styles.slide}>
                  <View style={styles.appsRow}>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Facebook.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Facebook</Text>
                      </Image>
                    </Button>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Instagram.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Instagram</Text>
                      </Image>
                    </Button>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Twitter.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Twitter</Text>
                      </Image>
                    </Button>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Whatsapp.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>WhatsApp</Text>
                      </Image>
                    </Button>
                  </View>
                  <View style={styles.appsRow}>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Chrome.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Chrome</Text>
                      </Image>
                    </Button>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Clima.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Clima</Text>
                      </Image>
                    </Button>
                    <Button style={{width:80, height: 90}} transparent>
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Telefono.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Telefono</Text>
                      </Image>
                    </Button>
                    <Button style={{width:80, height: 90}} transparent>  
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Skype.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Skype</Text>
                      </Image>
                    </Button>
                  </View>
                  <View style={styles.appsRow}>
                    <Button style={{width:80, height: 90}} transparent>  
                      <Image style={styles.icon} source={require('../assets/images/apps/Icono_App_Mail.png')} >
                        <Text style={{color: '#fff', fontSize: 11, marginTop: 55}}>Mail</Text>
                      </Image>
                    </Button>
                  </View>
                </View>
            </Image>

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
  row: {height: 105, marginLeft:0, marginRight: 0, marginTop: 0 },
  
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 30,
  },

  appsRow: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 5,
  },

  image: {
    flex: 1,
    width:width,
    height:height,
  },
  icon: {
    width: 60,
    height: 60,
    // alignSelf: 'center',
    alignItems: 'center'
    // marginRight: 20
  }
};
