'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	PixelRatio
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import {Actions} from 'react-native-router-flux';
import Dimensions from 'Dimensions';
import Utils from '../utils/Utils';
import BackButton from '../ui/BackButton';
import CloseButton from '../ui/CloseButton';
import InvisibleButton from '../ui/InvisibleButton';
import MenuButton from '../ui/MenuButton';
import MainMenu from '../ui/MainMenu';

var screenSize = Dimensions.get('window');

class Header extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	lastPress: 0
	  };

	  this.openDebug = this.openDebug.bind(this);
	}

	openDebug() {
		var delta = new Date().getTime() - this.state.lastPress;

	    if(delta < 300) {
	      // double tap happend
	      Utils.Log('TAP TAP');
	      Actions.debug();
	    } 

	    this.setState({
	      lastPress: new Date().getTime()
	    })
	}

	render() {

		let header;
		let title;
		let backButton;
		let debugButton;
		let closeButton;
		let menuButton;
		let mainMenu;

		switch(this.props.config.type) {
			case 'simple':
				//title = <Text style={styles.simpleTitle}>{this.props.config.title}</Text>
				backButton = <BackButton title={this.props.config.title} onPress={this.props.config.action}/>
				debugButton = <View style={styles.debugCont}><InvisibleButton onPress={() => this.openDebug()}/></View>
				// debugButton = <BackButton onPress={this.props.config.action} />
				header = <View style={styles.simpleHeaderContainer}>{backButton}{debugButton}</View>;
				break;
			case 'image':
				if(this.props.config.buttons != undefined) {
					
					title = <Text style={styles.imageTitle}>{this.props.config.title}</Text>					

					if(this.props.config.buttons.menu) {
						menuButton = <MenuButton style={styles.imageMenuButton} onPress={this.props.config.action} />
						mainMenu = <MainMenu ref={'mainMenu'}/>
						header = <View style={styles.imageHeaderContainer}><Image style={styles.bgImage} source={{uri:'bg'}} />{menuButton}{title}</View>;
					} else {
						header = <View style={styles.imageHeaderContainer}><Image style={styles.bgImage} source={{uri:'bg'}} />{title}</View>;
					}
				}
				break;
			case 'image2':
				if(this.props.config.buttons != undefined) {
					if(this.props.config.buttons.menu) {
						title = <Text style={styles.imageTitle}>{this.props.config.title}</Text>
						menuButton = <MenuButton style={styles.imageMenuButton} title={this.props.config.title} onPress={this.props.config.action} />
						header = <View style={styles.imageHeaderContainer}><Image style={styles.bgImage2} source={{uri:'camion'}} />{menuButton}</View>;
					} else {
						header = <View style={styles.imageHeaderContainer}><Image style={styles.bgImage2} source={{uri:'camion'}} /></View>;
					}
				}
				break;
			case 'close':
				closeButton = <CloseButton onPress={this.props.config.action} />
				header = <View style={styles.closeHeaderContainer}>{closeButton}</View>;
				break;
		}

		return (
			<View style={styles.container}>
				{header}
				{mainMenu}
			</View>
		);
	}
}

// var styles = StyleSheet.create({
var styles = EStyleSheet.create({
	container: {
		position: 'absolute',
		top:0,
		width: screenSize.width,		
	},
	simpleHeaderContainer: {
		flexDirection: 'row',
		backgroundColor: Utils.Colors.yellow,
		height: '9%',
		paddingLeft:'2%',
	},
	debugCont: {
		position: 'absolute',
		flexDirection: 'row',
		backgroundColor: Utils.Colors.yellow,
		right:0,
		paddingLeft:'2%',
	},
	closeHeaderContainer: {
		alignItems: 'flex-end',
		backgroundColor: Utils.Colors.lightGrey,
		// opacity: .5,
		height: 40,
		paddingTop:5,
		paddingRight:15,
	},
	imageHeaderContainer: {
		backgroundColor: Utils.Colors.yellow,
		// height: '20%',//160,
		height: 160,
		// paddingTop:10,
	},
	bgImage: {
	    position: 'absolute',
	    bottom: -350,
	    width: '100%',//screenSize.width,
	    height: '100%',//screenSize.height,
	},
	bgImage2: {
	    position: 'absolute',
	    bottom: -150,
	    width: '100%',
	    height: '100%',
	},
	bottomShadow: {
		width: '100%',//screenSize.width,
		height: 1,
		backgroundColor: 'gray',
	},
	imageMenuButton: {
		// marginLeft: 15,
		marginLeft: 35 / PixelRatio.get(),
	},
	simpleTitle: {
		fontSize: '$textM',//24,
		color: 'white',
		marginTop: 40,
		// marginLeft: 100,
		fontWeight: '400'
	},
	imageTitle: {
		position: 'absolute',
		marginLeft: '5%',//35 / PixelRatio.get(),
		bottom: '1%',//15 / PixelRatio.get(),
		fontSize: '$textL',//34 / PixelRatio.get(),
		color: 'white',
		fontWeight: '400',
	},

	//MainMenu
	menuContainer: {
		flex: 1,
		position: 'absolute',
		top: 0,
		flexDirection: 'column',
		backgroundColor: Utils.Colors.lightGrey,

	},
	menuButton: {
		// flex: 1,
		flexDirection: 'row',
		height: 40,
		width: 200,
	}
})

module.exports = Header;