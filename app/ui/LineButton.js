'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class LineButton extends React.Component {

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

var styles = EStyleSheet.create({
	$scale: 1,
	buttonContainer: {
		justifyContent: 'center',
    	alignItems: 'center',
	    paddingLeft: 40,
	    paddingRight: 40,
	    paddingTop: 10, 
	    paddingBottom: 10, 
	    borderWidth: 2,
    	borderColor: '#febf2f',
	},
	title: {
		color: '#ffbf2e',
		fontSize: '$textM',
		fontWeight: '800',
		textAlign:'center',
	}
});

module.exports = LineButton;