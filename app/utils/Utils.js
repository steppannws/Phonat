import React, { Component } from 'react';
import { Alert } from 'react-native';
import DeviceInfo from 'react-native-device-info';

// import {
//   Analytics,
//   Hits as GAHits,
//   Experiment as GAExperiment
// } from 'react-native-google-analytics';

module.exports =  {
	Colors: {
		black:      '#000000',
		white: 		'#ffffff',
		lightGrey: 	'#edece8',
		darkGrey: 	'#403d3d',
		yellow: 	'#febf2f',
		violet: 	'#903f98',
		mapRout:    '#903f98'
	},

	Device: {
		id: undefined
	},

	/*initAnalytic() {
		let clientId = DeviceInfo.getUniqueID();
        ga = new Analytics('UA-76482526-2', clientId, 1, DeviceInfo.getUserAgent());
        var screenView = new GAHits.ScreenView(
            'Humber',
            'Inicializacion',
            DeviceInfo.getVersion(),
            DeviceInfo.getBundleId()
        );
        ga.send(screenView);
	},
	
	gaView(viewName:string) {
		var screenView = new GAHits.ScreenView(
            'Humber',
            viewName,
            DeviceInfo.getVersion(),
            DeviceInfo.getBundleId()
        );
        ga.send(screenView);
	},
	
	gaEvent(catName, actionName) {
		var gaEvent = new GAHits.Event(catName, actionName, 'Humber');
		ga.send(gaEvent);
	},*/
	
	showAlert: function(title:string, msg:string, action:Function = null) {
		Alert.alert(
			title,
			msg,
			[
				// {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				// {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				{text: 'OK', onPress: () => action()},
			]
		)
	},

	showAlertTwo: function(title:string, msg:string, okTitle:string, noTitle:String, okAction:Function = null, noAction:Function = null) {
		Alert.alert(
			title,
			msg,
			[
				// {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				{text: okTitle, onPress: () => okAction()},
				{text: noTitle, onPress: () => noAction()},
			]
		)
	},

	Log: function(title:string, msg:string) {
		if(__DEV__) {
			console.tron.display({
			  name: title,
			  // preview: title,
			  value: msg,
			  important: true
			})
		}
	}
}