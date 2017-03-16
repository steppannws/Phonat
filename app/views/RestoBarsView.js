import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import EStyleSheet from 'react-native-extended-stylesheet';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import SideBar from '../ui/SideBar';
import FooterMenu from '../ui/FooterMenu';

export default class RestoBarsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      language: 'esp',
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

          <Header>
            <Left>
                <Button transparent 
                        onPress={() => {this._drawer._root.open()}} >
                    <Icon name='bars' />
                </Button>
            </Left>
            <Body>
                <Title>Restraurantes y bares</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>

        <Segment style={{height: 40}}>

          <View style={{flex:1, backgroundColor:'#0067f5', flexDirection: 'row', alignItems: 'flex-start'}}>
              <TouchableOpacity style={{flex:1, height: 50, paddingTop: 10, alignItems: 'center', backgroundColor:'#ff5d3c', borderRightWidth:1, borderRightColor: '#fff'}} onPress={() => {}}>
                <View>
                  <Text>Restaurantes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, height: 50, paddingTop: 10, alignItems: 'center', backgroundColor:'#ff5d3c', borderRightWidth:1, borderRightColor: '#fff'}} onPress={() => {}}>
                <View>
                  <Text>Bares</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:1, height: 50, paddingTop: 10, alignItems: 'center', backgroundColor:'#ff5d3c'}} onPress={() => {}}>
                <View>
                  <Text>Cafés</Text>
                </View>
              </TouchableOpacity>
          </View>
          
        </Segment>

        <Content>

          <View style={{flex:1, flexDirection: 'column', paddingLeft: 20, paddingRight: 20, paddingTop: 10}}>
            
            <TouchableOpacity onPress={() => {}}>
              <View style={[styles.itemContainer, {borderWidth: 1, borderColor: '#0067f5', paddingLeft: 10, paddingTop: 5}]}>
                <Text style={{fontSize: 11, color: '#000', marginBottom:5}}>Filtrar por</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/bar.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos_clickeada.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>Carne</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,6 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.itemContainer}>
                <View style={{flex:.5}}>
                  <Thumbnail square style={styles.avatar} source={require('../assets/images/hotel/restoran.png')} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/estrella_favoritos.png')} />
                    <Thumbnail square style={styles.buttonIcon} source={require('../assets/icons/listados/ubicacion.png')} />
                  </View>
                </View>
                <View style={{flex:.7}}>                
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom:5}}>La Cabrera</Text>
                  <Text style={{fontSize: 12, color: '#000', marginBottom:5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  <Text style={{fontSize: 10, color: '#0067f5'}}>0,2 km</Text>
                </View>
              </View>
              <View style={styles.separator}/>
            </TouchableOpacity>

          </View>

        </Content>

        <FooterMenu />

      </Container>

    </Drawer>

  </StyleProvider>
    );
  }
}

const styles = {
  buttonIcon: {width:25, height: 25, marginTop: 10, marginRight: 10},
  buttonIcon1: {width:60, height: 38, marginBottom: 0},
  buttonIcon2: {width:40, height: 40, marginBottom: 0},
  footerIcon: {width:50, height: 50},
  itemContainer: {flex:1, flexDirection: 'row', paddingLeft: 0, paddingRight: 0, marginTop: 20},
  separator: {flex:1, marginTop: 15, backgroundColor: '#0067c4', height:1},
  avatar: {width:110, height: 80},
  serviceBgImage: {flex: 1, resizeMode: 'cover', alignItems: 'center', alignSelf: 'center', paddingTop:40,  height: 120, width: 400},
  row: {flex:1, paddingLeft: 20, paddingRight: 20, paddingTop: 20, marginBottom:0},
  row1: {flex:1, /*padding:20,*/},
  hotelSimpleService: {flex:1, alignItems: 'center', alignSelf: 'center', margin:20, padding:20, width: 140, height: 200, backgroundColor: '#FC5E44',}
};
