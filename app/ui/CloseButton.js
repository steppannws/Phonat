'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Utils from '../utils/Utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
// <Icon name="person" size={130} color="#000000" />

class CloseButton extends React.Component {

	render() {
		return(
			<TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
				<View style={[styles.buttonContainer, {width:this.props.customWidth}]}>
					<Icon style={styles.icon} name="close" size={30} color="#000000" />
				</View>
			</TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
	buttonContainer: {
		flex:1,
		flexDirection: 'row',
		// justifyContent: 'center',
    	// alignItems: 'center',
    	// width: 280,
		// height: 65,
	    // paddingLeft:20,
	    // paddingTop:15,
	    // backgroundColor: '#000000',
	},
	icon: {
		// marginRight: 40,
	},
	title: {
		color: Utils.Colors.black,
		fontSize: 24,
		// fontWeight:"100",
	}
});

module.exports = CloseButton;