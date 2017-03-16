import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Actions} from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import SideBar from '../ui/SideBar';
import FooterMenu from '../ui/FooterMenu';

export default class HomeView extends Component {
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
                <Thumbnail square style={{width:120, height: 70, marginLeft:50}} source={require('../assets/images/hotellogo.png')} />
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>

        <Segment style={{height: 120}}>

          <View style={{}}>
            <Image style={{ resizeMode: 'cover', height: 120, width:400  }} source={require('../assets/images/home.png')} />
            <View style={{ position: 'absolute', bottom: 0}}>
              <H1 style={{margin: 10}}>
                  Buenos Aires
              </H1>
            </View>
            
            <View style={{ position: 'absolute', flexDirection: 'row', bottom: 10, right: 10}}>
              <H3 style={{marginTop: 10, marginLeft: 10}}>30º</H3>
              <Thumbnail square style={{width:40, height: 40}} source={require('../assets/icons/Icono_Home_Clima.png')} />
            </View>
          </View>
          
        </Segment>

        <Content>

          <Grid>
              <Row style={{flex:1, paddingLeft: 24, paddingRight: 24, paddingTop: 20, marginBottom:15}}>
                <TouchableOpacity onPress={() => Actions.hotel()}>
                  <Thumbnail square style={{flex: 1, resizeMode: 'stretch', alignItems: 'center', alignSelf: 'center', paddingTop:30,  height: 140, width: 500}} source={require('../assets/images/hotel.png')} >
                    <Thumbnail square style={{width:35, height: 35}} source={require('../assets/icons/home/hotel.png')} />
                    <Text>HOTEL</Text>
                    <Text>INTERCONTINENTAL</Text>
                    <View style={{position:'absolute', right:20, bottom: 30}}> 
                      <Thumbnail square style={{width:30, height: 30}} source={require('../assets/icons/home/plus.png')} />
                    </View>
                  </Thumbnail>
                </TouchableOpacity>
              </Row>
          </Grid>

          <Grid style={{paddingLeft: 20, paddingRight: 20, marginBottom: 20}}>
              <Col style={{flex:1, alignItems: 'center', marginBottom:0, /*backgroundColor: '#635DB7'*/ height: 110 }}>
                
                <Row style={styles.row}>

                  <TouchableOpacity onPress={() => console.warn('asdf')}>
                    <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/itinerarios.png')} >
                      <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/home/itinerario.png')} />
                      <Text style={{fontSize: 14}}>ITINERARIOS</Text>
                    </Thumbnail>
                  </TouchableOpacity>

                </Row>

                <Row style={styles.row}>

                  <TouchableOpacity onPress={() => console.warn('asdf')}>
                    <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/atracciones.png')} >
                      <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/home/atracciones.png')} />
                      <Text style={{fontSize: 14}}>ATRACCIONES</Text>
                    </Thumbnail>
                  </TouchableOpacity>

                </Row>

                <Row style={styles.row}>

                  <TouchableOpacity onPress={() => console.warn('asdf')}>
                    <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/descuentos.png')} >
                      <Thumbnail square style={styles.buttonIcon1} source={require('../assets/icons/home/descuentos.png')} />
                      <Text style={{fontSize: 14}}>DESCUENTOS</Text>
                    </Thumbnail>
                  </TouchableOpacity>

                </Row>

              </Col>

              <Col style={{flex:1, padding: 0, alignItems: 'center' /*backgroundColor: '#00CE9F',*/ }}>
                
                <Row style={styles.row}>

                  <TouchableOpacity onPress={() => Actions.restobars() }>
                    <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/restaurantes.png')} >
                      <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/home/restaurantes-y-bares.png')} />
                      <Text style={{fontSize: 12}}>RESTAURANTES</Text>
                      <Text style={{fontSize: 12}}>Y BARES</Text>
                    </Thumbnail>
                  </TouchableOpacity>

                </Row>

                <Row style={styles.row}>

                  <TouchableOpacity onPress={() => console.warn('asdf')}>
                    <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/compras.png')} >
                      <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/home/compras.png')} />
                      <Text style={{fontSize: 14}}>COMPRAS</Text>
                    </Thumbnail>
                  </TouchableOpacity>

                </Row>

                <Row style={styles.row}>

                  <TouchableOpacity onPress={() => console.warn('asdf')}>
                    <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/recomendados.png')} >
                      <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/home/recomendados.png')} />
                      <Text style={{fontSize: 14}}>RECOMENDADOS</Text>
                    </Thumbnail>
                  </TouchableOpacity>

                </Row>

              </Col>
          </Grid>

        </Content>

        <FooterMenu />

      </Container>

    </Drawer>

  </StyleProvider>
    );
  }
}

const styles = {
  buttonIcon: {width:30, height: 38, marginBottom: 0},
  buttonIcon1: {width:50, height: 38, marginBottom: 0},
  footerIcon: {width:30, height: 30},
  serviceBgImage: {flex: 1, resizeMode: 'center', alignItems: 'center', alignSelf: 'center', paddingTop:25,  width:150},
  row: {height: 105, marginLeft:0, marginRight: 0, marginTop: 0 }
};
