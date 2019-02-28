/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps'

export default class SchoolPage extends Component{
  render() {
    return (
          <View style={styles.container}>

            <Text style={styles.title}>
              SCHOOL PAGE
            </Text>


            <View style={styles.headerChat}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Chat")}} 
                style={styles.button}>
                  <Text style={styles.text}>
                      HEADER & CHAT SECTION
                    </Text>
              </TouchableOpacity>
            </View>

            <View >
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Payment")}} 
                style={styles.button}>
                  <Text style={styles.text}>
                      BOOKING & PAYMENT SECTION
                    </Text>
              </TouchableOpacity>

            </View>

            <View >
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Instructor")}} 
                style={styles.button}>
                  <Text style={styles.text}>
                      Ki Lo SA
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
   justifyContent: 'space-between',
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
  },
  title:{
    fontSize:20,
    color:"gray",
  },
   button:{
    height:100,
    //width:100,
    backgroundColor: 'green',
    //marginLeft:10,
  }
});
