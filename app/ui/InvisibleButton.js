'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import Utils from '../utils/Utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

class InvisibleButton extends React.Component {

	render() {
		return(
			<TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
				<View style={[styles.buttonContainer]}>
					{/*<Icon style={styles.icon} name="close" size={50} color="#000000" />*/}
				</View>
			</TouchableHighlight>
		);
	}
}

var styles = StyleSheet.create({
	buttonContainer: {
		flex:1,
		flexDirection: 'row',
		width:50,
		height:50,
	},
	icon: {
		// marginRight: 40,
	},
	title: {
		color: Utils.Colors.black,
		fontSize: 24,
	}
});

module.exports = InvisibleButton;