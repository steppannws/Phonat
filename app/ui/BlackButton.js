'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class BlackButton extends React.Component {

	render() {
		return(
			<TouchableHighlight underlayColor="transparent" onPress={this.props.onPress}>
				<View style={[styles.buttonContainer, {width:this.props.customWidth}]}>
					<Text style={styles.title}>{" " + this.props.title + " "}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

// 01505085-01000115427681

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
	    paddingTop: 15, 
	    paddingBottom: 15, 
	    backgroundColor: '#FFFFFF',
	},
	title: {
		color: '#000000',
		fontSize: '$textXL',
		fontWeight: '800',
		textAlign:'center',
	}
});

module.exports = BlackButton;