'use strict';

import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
// import Storage from 'react-native-storage';
import Phonat from './app/Phonat';
// import User from './app/user/User';
// import './app/ReactotronConfig'

/*var storage = new Storage({
    size: 1000,    
    // expire time, default 1 day(1000 * 3600 * 24 secs) 
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    sync : {
    }
});*/

// global.storage = storage;

AppRegistry.registerComponent('Phonat', () => Phonat);
