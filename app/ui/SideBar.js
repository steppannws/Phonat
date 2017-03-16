import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { StyleProvider, Drawer, Header, Separator, List, Title, Container, Content, Right, ListItem, Icon, Footer, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher';
import getTheme from '../theme/components';
import material from '../theme/variables/material';

export default class SideBar extends Component {
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
      this._drawer._root.close()
    };
    openDrawer = () => {
      this._drawer._root.open()
    };
    return (
      <View style={styles.sidebar} >
      <Content>
        <List>
          <ListItem button onPress={() => Actions.myphonat() }>
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/MyPhonat.png')} />
            <Text style={{color: '#0067f5'}}>My Phonat</Text>
          </ListItem>
          <ListItem button onPress={() => {}} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/notificaciones.png')} />
            <Text style={{color: '#0067f5'}}>Notificaciones</Text>
          </ListItem>

          <ListItem style={{paddingTop: 30}} button onPress={() => Actions.home()} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/home.png')} />
            <Text style={{color: '#0067f5'}}>Home</Text>
          </ListItem>
          <ListItem button onPress={() => Actions.hotel()} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/hotel.png')} />
            <Text style={{color: '#0067f5'}}>Hotel</Text>
          </ListItem>
          <ListItem button onPress={() => {Actions.maps()}} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/mapa.png')} />
            <Text style={{color: '#0067f5'}}>Mapa</Text>
          </ListItem>
          <ListItem button onPress={() => {}} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/categorias.png')} />
            <Text style={{color: '#0067f5'}}>Categorías</Text>
          </ListItem>
          <ListItem button onPress={() => Actions.utilities()} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/herramientas.png')} />
            <Text style={{color: '#0067f5'}}>Utilidades</Text>
          </ListItem>
          <ListItem button onPress={() => {
            try {
              IntentLauncher.startActivity({
                action: IntentConstant.ACTION_MAIN,
                category: IntentConstant.CATEGORY_APP_GALLERY
              });
            } catch(error) {
              console.warn(error);
            }
          }} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/galeria.png')} />
            <Text style={{color: '#0067f5'}}>Galería</Text>
          </ListItem>

          <ListItem style={{paddingTop: 30}} button onPress={() => Actions.configuration()} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/configuracion.png')} />
            <Text style={{color: '#0067f5'}}>Configuración</Text>
          </ListItem>
          <ListItem button onPress={() => {}} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/idioma.png')} />
            <Text style={{color: '#0067f5'}}>Idioma</Text>
          </ListItem>
          <ListItem button onPress={() => {}} >
            <Thumbnail square style={stylesNB.icons} source={require('../assets/icons/menu/terminos_y_condiciones.png')} />
            <Text style={{color: '#0067f5'}}>Términos y condiciones</Text>
          </ListItem>
          <ListItem style={{margin:0, backgroundColor: '#ff5d3c'}} button onPress={() => {}} >
            <Icon name="times" style={{marginRight:10, marginLeft: 30, color: '#fff'}}/>
            <Text style={{color: '#fff'}}>RESETEAR DATA</Text>
          </ListItem>

        </List>
      </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    paddingRight: 0,
    // paddingTop: 30,
    backgroundColor: '#fff',
  },
  resetButton: {
    backgroundColor: '#000',
  },
});

const stylesNB = {
    icons: {width:20, height: 20, marginRight: 20},
}
