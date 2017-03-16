import React, { Component } from 'react';
import { 
  AppRegistry, 
  Alert, 
  AsyncStorage, 
  StyleSheet, 
  View, 
  ScrollView, 
  Image,
  Modal,
  Picker,
  Text,
  TouchableHighlight,
  PixelRatio
} from 'react-native';

// import {Picker} from 'native-base';
import _ from 'lodash';
import getTheme from '../theme/components';
import material from '../theme/variables/material';

import EStyleSheet from 'react-native-extended-stylesheet';
import AppIntro from 'react-native-app-intro';
import { Actions } from 'react-native-router-flux';
import Loading from '../ui/Loading';
import LineButton from '../ui/BlackButton';
import FlatButton from '../ui/FlatButton';
import Utils from '../utils/Utils';
// import api from '../data/api';
import countries from '../data/countries.json'

export default class WelcomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      langTitle: 'Language',
      language: 'esp',
      showLangButtons: false,
      langModalVisible: false,
      countryModalVisible: false,
      countries: {}
    }
  }

  componentDidMount() {
    // console.warn(this.state.countries);
    this.setState({
      countries: countries,
    });
  }

  langModalVisible(visible) {
    this.setState({langModalVisible: visible});
  }

  countryModalVisible(visible) {
    this.setState({countryModalVisible: visible});
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

  showLangButtons() {
    this.setState({
      showLangButtons: !this.state.showLangButtons,
    });
  }

  renderLangButtons() {
    if(this.state.showLangButtons) {
      return(<View>
      </View>);
    }
  }

  renderCountries() {
    let con = _.map(this.state.countries, (country) => {
      return <LineButton
          key={country.code}
          customWidth={300}
          title={country.name}
          onPress={() => {
            this.setState({
              countryModalVisible: false
            });
          }} />
    })

    return(con);
  }

  render() {
    closeDrawer = () => {
      // this._drawer._root.close()
    };
    openDrawer = () => {
      // this._drawer._root.open()
    };
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

      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.langModalVisible}
        onRequestClose={() => {
          this.setState({
            langModalVisible: false
          });
        }}
        >
        <View style={{flex:1, alignItems: 'center', marginBottom:100, marginLeft: 0, marginRight:0, marginTop: 265}}>

            <LineButton
                customWidth={300}
                title="English"
                onPress={() => {
                  this.setState({
                    langTitle: 'English',
                    langModalVisible: false
                  });
                }} />

            <LineButton
              customWidth={300}
              title="Español"
              onPress={() => {
                this.setState({
                    langTitle: 'Español',
                    langModalVisible: false
                  });
              }} />        
              
            <LineButton
              customWidth={300}
              title="Portugues"
              onPress={() => {
                this.setState({
                    langTitle: 'Portugues',
                    langModalVisible: false
                  });
              }} />        

        </View>
      </Modal>
      
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.state.countryModalVisible}
        onRequestClose={() => {
          this.setState({
            countryModalVisible: false
          });
        }}
        >
        <ScrollView style={{height: 400, width: 360}}>
          <View style={{ flex:1, alignItems: 'center', marginBottom:100, marginLeft: 0, marginRight:0, marginTop: 50}}>
            {this.renderCountries()}
            </View>
        </ScrollView>
      </Modal>

      <Image style={styles.bg} source={require('../assets/bg.png')} />

        <View style={[styles.slide]}>  
          <View style={styles.titleContainer}>
            <Text style={styles.title}>BIENVENIDO</Text>
            <Text style={[styles.title, {fontSize: 26, marginTop:-5,marginBottom:-5}]}>|</Text>
            <Text style={styles.title}>WELCOME</Text>
          </View>

          <View style={styles.buttonContainer}>
            <View level={0} style={styles.button}>
              <FlatButton
                  customWidth={300}
                  style={{}}
                  title={this.state.langTitle}
                  onPress={() => {this.langModalVisible(!this.state.langModalVisible)}} />
            </View>
          
            <View level={4} style={styles.button}>
              <FlatButton
                customWidth={300}
                title="Country of residence"
                onPress={() => {this.countryModalVisible(!this.state.countryModalVisible)}} />
          
            </View>

            <View level={8} style={styles.button}>
              <FlatButton
                customWidth={300}
                title="Age"
                onPress={() => {}} />
          
            </View>

            <View level={8} style={styles.button}>
              <FlatButton
                customWidth={300}
                style={{backgroundColor:'#FC5E44'}}
                titleColor={'#FFFFFF'}
                title="Terms & conditions"
                onPress={() => {}} />
          
            </View>

          </View>

          <View style={styles.footerButton}>
            <TouchableHighlight underlayColor="transparent" onPress={()=>{Actions.home()}}>
              <Text style={styles.footerButtonTitle}>CONTINUAR</Text>
            </TouchableHighlight>
          </View>

        </View>
    </View>      
    );
  }
}

var styles = EStyleSheet.create({
  container: {
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
  },
  titleContainer: {
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    color: '#FC5E44',
    fontSize: 38,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#2680EC',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:0 ,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',

  },
  button: {
    marginBottom: 20
  },
  footerButton: {
    height:100,
    backgroundColor: '#FC5E44',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerButtonTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  picker: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    paddingLeft:30,
    paddingRight:40,
    paddingTop: 15, 
    paddingBottom: 15, 
    backgroundColor: '#FFFFFF',
  }
});
