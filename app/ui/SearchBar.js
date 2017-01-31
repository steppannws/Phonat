'use strict';

import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';

var SearchBar = React.createClass({
  render: function() {
    return (
      <View style={[styles.searchBar, this.props.style]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChange={this.props.onSearchChange}
          placeholder="Buscar"
          onFocus={this.props.onFocus}
          style={styles.searchBarInput} />
      </View>
    );
  }
});

/*
<ActivityIndicatorIOS
  animating={this.props.isLoading}
  style={styles.spinner}
/>  
*/

var styles = StyleSheet.create({
  searchBar: {
    // marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'black'
  },
  searchBarInput: {
    flex: 1,
    fontSize: 15,
    // height: 30,
  },
  spinner: {
    width: 30,
  },
});

module.exports = SearchBar;
