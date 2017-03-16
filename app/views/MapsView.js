import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StyleProvider, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail, Text } from 'native-base';
// import Mapbox, { MapView } from 'react-native-mapbox-gl';
import MapView from 'react-native-maps';
import {Actions} from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
import SideBar from '../ui/SideBar';
import FooterMenu from '../ui/FooterMenu';
import markerImage from '../assets/icons/listados/ubicacion.png';

// const accessToken = 'pk.eyJ1IjoiaWxjYWN0byIsImEiOiJjaXI4NnE1ZDkwMHlmZ2Rua2tld3dicTZoIn0.MVe4gR9CLb9TiJYxSdohLg';
// Mapbox.setAccessToken(accessToken);

let id = 0;

export default class MapsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      language: 'esp',
      showLangButtons: false,
      markers: [
        { 
          coordinate: {latitude: -34.6036844,longitude: -58.3815591},
          key: 'El Obelisco'
        }
      ]
    }
    this.onMapPress = this.onMapPress.bind(this);
  }

  onMapPress(e) {
    return;
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: `foo${id++}`,
        },
      ],
    });
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
                <Title>Mapa</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>

        <Content>

          <View style={styles.container}>
            <MapView
              style={styles.map}
              onPress={this.onMapPress}
              initialRegion={{
                latitude: -34.6036844,
                longitude: -58.3815591,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={this.onMapPress}
            >
              {this.state.markers.map(marker => (
                <MapView.Marker
                  title={marker.key}
                  image={markerImage}
                  key={marker.key}
                  coordinate={marker.coordinate}
                />
              ))}
            </MapView>
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
  map: {width:365, height:500},
  buttonIcon: {width:30, height: 38, marginBottom: 0},
  buttonIcon1: {width:50, height: 38, marginBottom: 0},
  footerIcon: {width:30, height: 30},
  serviceBgImage: {flex: 1, resizeMode: 'center', alignItems: 'center', alignSelf: 'center', paddingTop:25,  width:150},
  row: {height: 105, marginLeft:0, marginRight: 0, marginTop: 0 }
};