import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import SideBar from '../ui/SideBar';
import FooterMenu from '../ui/FooterMenu';

export default class HotelView extends Component {
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
                <Title>Hotel</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>

        <Segment style={{height: 120}}>

          <View style={{}}>
            <Image style={{ resizeMode: 'cover', height: 120, width:400  }} source={require('../assets/images/hotel/hotel.png')} />
            <View style={{ position: 'absolute', bottom: 0}}>
              <H1 style={{marginLeft: 10}}>Hotel</H1>
              <H1 style={{marginLeft: 10}}>Intercontinental</H1>
            </View>
          </View>
          
        </Segment>

        <Content>

          <Grid>

              <Row style={styles.row}>

                <TouchableOpacity onPress={() => {}}>
                  <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/hotel/restoran.png')} >
                    <Title>Restaurante</Title>
                  </Thumbnail>
                </TouchableOpacity>

              </Row>

              <Row style={styles.row}>

                <TouchableOpacity onPress={() => {}}>
                  <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/hotel/bar.png')} >
                    <Title>Bar</Title>
                  </Thumbnail>
                </TouchableOpacity>

              </Row>

              <Row style={styles.row} >

                <TouchableOpacity onPress={() => {}}>
                  <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/hotel/spa.png')} >
                    <Title>Spa</Title>
                  </Thumbnail>
                </TouchableOpacity>

              </Row>

              <Row style={styles.row}>

                <TouchableOpacity onPress={() => {}}>
                  <Thumbnail square style={styles.serviceBgImage} source={require('../assets/images/hotel/actividades.png')} >
                    <Title>Actividades</Title>
                  </Thumbnail>
                </TouchableOpacity>

              </Row>

            </Grid>

            <Grid >
                <Col style={{flex:1, alignItems: 'center', marginBottom:0, /*backgroundColor: '#635DB7'*/ height: 300 }}>
                  
                  <Row style={styles.row1}>

                    <TouchableOpacity onPress={() => console.warn('asdf')}>
                      <View square style={styles.hotelSimpleService} >
                        <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/hotel/servicio_a_la_habitacion.png')} />
                        <Text style={{fontSize: 12}}>SERVICIO A</Text>
                        <Text style={{fontSize: 12}}>LA HABITACIÓN</Text>
                      </View>
                    </TouchableOpacity>

                  </Row>

                  <Row style={styles.row1}>

                    <TouchableOpacity onPress={() => console.warn('asdf')}>
                      <View square style={styles.hotelSimpleService} >
                        <Thumbnail square style={styles.buttonIcon1} source={require('../assets/icons/hotel/info_hotel.png')} />
                        <Text style={{fontSize: 12}}>INFO HOTEL</Text>
                      </View>
                    </TouchableOpacity>

                  </Row>

                </Col>

                <Col style={{flex:1, alignItems: 'center', marginBottom:0, /*backgroundColor: '#635DB7'*/ height: 300 }}>
                  
                  <Row style={styles.row1}>

                    <TouchableOpacity onPress={() => console.warn('asdf')}>
                      <View square style={styles.hotelSimpleService} >
                        <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/hotel/conserjeria.png')} />
                        <Text style={{fontSize: 12}}>CONSERJERÍA</Text>
                      </View>
                    </TouchableOpacity>

                  </Row>

                  <Row style={styles.row1}>

                    <TouchableOpacity onPress={() => console.warn('asdf')}>
                      <View square style={styles.hotelSimpleService} >
                        <Thumbnail square style={styles.buttonIcon2} source={require('../assets/icons/hotel/chat.png')} />
                        <Text style={{fontSize: 12}}>CHAT</Text>
                      </View>
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
  buttonIcon1: {width:60, height: 38, marginBottom: 0},
  buttonIcon2: {width:40, height: 40, marginBottom: 0},
  footerIcon: {width:30, height: 30},
  serviceBgImage: {flex: 1, resizeMode: 'cover', alignItems: 'center', alignSelf: 'center', paddingTop:40,  height: 120, width: 400},
  row: {flex:1, paddingLeft: 20, paddingRight: 20, paddingTop: 20, marginBottom:0},
  row1: {flex:1, /*padding:20,*/},
  hotelSimpleService: {flex:1, alignItems: 'center', alignSelf: 'center', margin:20, padding:20, width: 140, height: 200, backgroundColor: '#FC5E44',}
};
