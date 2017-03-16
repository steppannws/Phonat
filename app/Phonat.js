'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,View,
    BackAndroid,
    Platform,
    Linking
} from 'react-native';

import {Router, Scene, Route, Schema, Animations, TabBar, Actions, Reducer, Modal} from 'react-native-router-flux';
import { StyleProvider, StatusBar, H1, H2, H3, Tabs, Tab, Segment, Drawer, Header, Title, Container, Content, Right, ListItem, Icon, Button, FooterTab, DeckSwiper, Card, CardItem, Left, Body, Thumbnail } from 'native-base';
import getTheme from './theme/components';
import material from './theme/variables/material';
import SideBar from './ui/SideBar';
import FooterMenu from './ui/FooterMenu';
import EStyleSheet from 'react-native-extended-stylesheet';
import DeviceInfo from 'react-native-device-info';
import Utils from './utils/Utils';
// import PushNotification from 'react-native-push-notification';
// import {getServerUrl} from './data/LocalStorageResolver'

//Views
import SplashView from './views/SplashView';
import WelcomeView from './views/WelcomeView';
import HomeView from './views/HomeView';
import HotelView from './views/HotelView';
import AppsView from './views/AppsView';
import MapsView from './views/MapsView';
import RestoBarsView from './views/RestoBarsView';
import MyPhonatView from './views/MyPhonatView';
import ConfigurationView from './views/ConfigurationView';
import UtilitiesView from './views/UtilitiesView';

// import User from './user/User';
// import api from './data/api';

var canGoBack = false;

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        if(action.scene) {
            if( action.scene.name == 'start' || 
                action.scene.name == 'home' )
                canGoBack = false;
            else
                canGoBack = true;  
            // else if(action.scene.name == 'drawer')
            //     this.openDrawer();
        }
        return defaultReducer(state, action);
    }
};

export default class Phonat extends React.Component {
    
    componentWillMount() {
    }
    
    componentDidMount() {
        // Utils.Device.id = DeviceInfo.getUniqueID();
    }

    openDrawer() {
        this._drawer._root.open();
    }

    backAndroidHandler() {
        return true;
    }

    render() {
        return (
                <Router hideNavBar={true}
                        createReducer={reducerCreate}
                        backAndroidHandler={this.backAndroidHandler} >
                        <Scene key="root">
                            <Scene key="splash" component={SplashView} wrapRouter={true} title="" hideNavBar={true} initial={true}/>
                            <Scene key="welcome" component={WelcomeView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="home" component={HomeView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="hotel" component={HotelView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="apps" component={AppsView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="restobars" component={RestoBarsView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="maps" component={MapsView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="myphonat" component={MyPhonatView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="configuration" component={ConfigurationView} wrapRouter={true} title="" hideNavBar={true}/>
                            <Scene key="utilities" component={UtilitiesView} wrapRouter={true} title="" hideNavBar={true}/>
                            {/*
                            <Scene key="start" component={StartView} wrapRouter={true} title="" hideNavBar={true} />
                            <Scene key="register">
                                <Scene key="registerView" component={RegisterView} hideNavBar={true} title="Registrar" direction="vertical"/>
                            </Scene>

                            <Scene key="profile" component={ProfileView} hideNavBar={true} title="Profile" direction="vertical"/>
                            */}
                        </Scene>
                </Router>
        );
    }
}

EStyleSheet.build({
    textColor: '#0275d8', 
    textXXS:  11,
    textXS:  14,
    textS:  16,
    textM:  18,
    textL: 20,
    textXL: 22,
    textXXL: 26
});