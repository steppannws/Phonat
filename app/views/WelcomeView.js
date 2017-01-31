import React, { Component } from 'react';
import { 
  AppRegistry, 
  Alert, 
  AsyncStorage, 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Modal
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux';
import Loading from '../ui/Loading';
import LineButton from '../ui/LineButton';
import Utils from '../utils/Utils';
// import api from '../data/api';

export default class WelcomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    }
  }

  onSkipBtnHandle = (index) => {
    // Alert.alert('Skip');
    // console.log(index);
    this.welcomeShown();
    Actions.root({scene: 'online'});
    // Actions.root({scene: 'online'});
    // setTimeout(()=> {Actions.root({scene: 'strategies'})}, 500);
  }
  doneBtnHandle = () => {
    // Alert.alert('Done');
    this.welcomeShown();
    Actions.root({scene: 'online'});
    // setTimeout(()=> {Actions.root({scene: 'strategies'})}, 200);
  }
  nextBtnHandle = (index) => {
    // Alert.alert('Next');
    // console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  async welcomeShown(){
    try {
      await AsyncStorage.setItem('@welcome', 'true');
    } catch(error) {
      // console.warn('welc', error);
    }
  }

  showLoading() {
    this.setState({
      isLoading: true,
    });
  }

  closeLoading() {
    this.setState({
      isLoading: false,
    });
  }

  selectLang(lng) {
    
  }

  render() {
    return (
    <View style={styles.container}>

     <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.isLoading}
        onRequestClose={() => {this.closeLoading()}}
        >
       <View>
        <Loading />
       </View>
      </Modal>

      <Image style={styles.bg} source={require('../assets/bg.png')} />

      <AppIntro>
        <View style={[styles.slide]}>
        <LineButton
            customWidth={styles.container.width}
            title="ESPAÑOL"
            onPress={() => {this.selectLang('esp')}} />

          <LineButton
            customWidth={styles.container.width}
            title="ENGLISH"
            onPress={() => {this.selectLang('eng')}} />

          <LineButton
            customWidth={styles.container.width}
            title="PORTUGUES"
            onPress={() => {this.selectLang('pt')}} />

        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={-10}><Text style={styles.text}>Page 2</Text></View>
          <View level={5}><Text style={styles.text}>Page 2</Text></View>
          <View level={20}><Text style={styles.text}>Page 2</Text></View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <View level={8}><Text style={styles.text}>Page 3</Text></View>
          <View level={0}><Text style={styles.text}>Page 3</Text></View>
          <View level={-10}><Text style={styles.text}>Page 3</Text></View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><Text style={styles.text}>Page 4</Text></View>
          <View level={10}><Text style={styles.text}>Page 4</Text></View>
          <View level={15}><Text style={styles.text}>Page 4</Text></View>
        </View>
      </AppIntro>

    </View>      
    
    );
  }
}

var styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  separator: {
    height: 30,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: (255, 255, 255, 10),
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
