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

export default class SchoolPage extends Component<Props> {
  render() {
    return (
          <View style={styles.container}>

            <Text style={styles.text}>
              PAYMENT
            </Text>

          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // // justifyContent: 'center',
   //  //alignItems: 'center',
    backgroundColor: 'blue',
  },
  schoolPanel:{
    flex:0.3,
    backgroundColor:"blue",
    //justifyContent: 'center',
  },
  text:{
    fontSize:30,
    color:"white",
  }
});
