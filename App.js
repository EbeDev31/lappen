/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps'

export default class App extends Component<Props> {
  render() {
    return (
    
        <MapView style={styles.mapde}/>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top:0,
    left:0,
    right:0,
   // justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'blue',
  },
  map:{
    ...StyleSheet.absoluteFillObject
  }
});
