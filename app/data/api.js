'use strict';

import Reactotron from 'reactotron-react-native';
// var serverUrl = "http://www.humber.com:3000";
var serverUrl = "http://54.158.161.25:3003";
var API_URL = serverUrl + "/api/";
// var Utils = require('../utils/Utils');
// var User = require('../user/User');

function post(url:string, data:Object) {
  // Utils.Log('POST:', url);
  // console.warn('post: ', JSON.stringify(data));
  // Reactotron.log(data);

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data),
  }).then((response) => {
    // Reactotron.log(data); 
    // Utils.Log('API post', response);
    return response.json();
  })
}

function get(url:string) {
  // Utils.Log('GET:', url);
  
  return fetch(url, {
    method: 'GET',
    follow: 0,
    timeout: 2000,
  }).then((response) => { 
    // Utils.Log('API get', response);
    return response.json();
  }).catch((error) => error);
}

function put(url:string, data:Object) {
  // Utils.Log('API put', data);
  return fetch(url, {
    method: 'PUT',
    follow: 0,
    timeout: 2000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(data),
  }).then((response) => { 
    // Utils.Log('API put response', response);
    return response.json();
  })
}

function getFiltered(url:string, filter:string, accessToken:string) {
  return fetch(url, {
    method: 'GET',
    body: {
        filter : filter,
        access_token : accessToken
      }
  }).then((response) => response.json()).catch((error) => error);
}

module.exports = {
  setServerUrl: function(url:string) {
    serverUrl = url;
    API_URL = serverUrl + "/api/";
  },

  serverURL: function (){
    return serverUrl;
  },

  checkApkVersion: function(localVersion:string) {
    return get(API_URL + 'applications/checkApkVersion/'+localVersion);
  }
};
