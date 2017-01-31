'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Utils from '../utils/Utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
// <Icon name="person" size={130} color="#000000" />

class BackButton extends React.Component {

	render() {
		return(
			<TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
				<View style={[styles.buttonContainer, {width:this.props.customWidth}]}>
					<Icon style={styles.icon} name="arrow-back" size={30} color="#000000" />
					<Text style={styles.title}>{this.props.title}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
	buttonContainer: {
		// flex:1,
		flexDirection: 'row',
	    paddingTop:15,
	},
	icon: {
		marginRight: 15,
	},
	title: {
		color: Utils.Colors.black,
		fontSize: 20,
	}
});

module.exports = BackButton;