/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps'

import Instructor from "./instructorProfile"

export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
        <MapView style={styles.map}/>
        <View style={styles.schoolsPanel}>
        	 <TouchableOpacity onPress={()=>{this.props.navigation.navigate("School")}} 
        	 style={styles.button}>
      			 <Text style={styles.text}>
	               Goto School
	              </Text>
			       
			  </TouchableOpacity>

			  <TouchableOpacity onPress={()=>{this.props.navigation.navigate("School")}} 
        	  style={styles.button}>
      			 <Text style={styles.text}>
	               Goto School
	              </Text>
			       
			  </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "absolute",
    // top:0,
    // left:0,
    // right:0,
   justifyContent: 'flex-end',
    //alignItems: 'center',
    backgroundColor: 'blue',
  },
  map:{
    ...StyleSheet.absoluteFillObject
  },
  schoolsPanel:{
  	backgroundColor: 'yellow',
  	flex:0.3,
  	flexDirection:"row",
  	justifyContent: 'space-between',

  },
  button:{
  	height:100,
  	width:100,
  	backgroundColor: 'blue',
  	justifyContent: 'center',
  	//marginLeft:10,
  },
   text:{
    fontSize:20,
    color:"white",
  },
});
