'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class FlatButton extends React.Component {

	render() {
		return(
			<TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
				<View style={[styles.buttonContainer, {width:this.props.customWidth}, this.props.style]}>
					<Text style={[styles.title, {color:this.props.titleColor ? this.props.titleColor : '#000'}]}>{" " + this.props.title + " "}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

var styles = EStyleSheet.create({
	$scale: 1,
	buttonContainer: {
		// flex:1,
		justifyContent: 'center',
    	alignItems: 'center',
  //   	width: 280,
		// height: 65,
	    paddingLeft:40,
	    paddingRight:40,
	    paddingTop: 10, 
	    paddingBottom: 10, 
	    backgroundColor: '#FFFFFF',
	},
	title: {
		color: '#000000',
		fontSize: '$textM',
		fontWeight: '800',
		textAlign:'center',
	}
});

module.exports = FlatButton;