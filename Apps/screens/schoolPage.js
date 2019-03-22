/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ScrollCompo from "./scrollComponent"
import Rev from "./trial"

import SchoolOverView from './schoolOverview'
const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 //... // more users here
]

const width2=Dimensions.get("window").width;
const height2=Dimensions.get("window").height;
export default class SchoolPage extends Component{

  render() {
    return (
          <View style={styles.container}>
           <View style={[styles.container,{margin:5}]}>
              <ScrollView style={styles.wrapper}>

                <View style={styles.container2}>
                <SchoolOverView/>
                
                 </View>

                 <View style={styles.Aboutschool}>
                  
                      <Text style={styles.text}>
                          About Dette Driving School

                          udshfgbhjdbnhjvbsfhgblvhsr
                          sbhsrghersbhgvsreger
                          greyghvresghverhgver
                          ggrugbsergvserg
                          sergnerygbrgeg
                          e
                        </Text>
                      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("payment")}} 
                        style={styles.button}>
                          <Text style={styles.text}>
                          BOOK NOW
                          </Text>
                      </TouchableOpacity>
                
                </View>

                 <View style={styles.InstructScrView}>
                   <View style={{paddingRight:10,width:"100%",flexDirection:"row",backgroundColor:"orange", justifyContent:"space-around"}}>
                             <Text>
                                Cars
                              </Text>

                              <Text>
                                Filter
                              </Text>
                          </View>  
                  
                     <ScrollCompo for={"instructors"}/>
                  </View>

                  <View style={styles.CarScrView}>
                    <View style={{paddingRight:10,width:"100%",flexDirection:"row",backgroundColor:"orange", justifyContent:"space-around"}}>
                             <Text>
                                Cars
                              </Text>

                              <Text>
                                Filter
                              </Text>
                          </View>  
                    
                      <ScrollCompo for={"Cars"}/>
                        
                  </View>
                

                <View style={styles.location}>
                        
                      <Text style={styles.text}>
                          MapView/LOCATION
                        </Text>

                       <MapView style={styles.map}/>
                
                  </View>

                <View style={styles.RevScrView}>
                  
                   <Rev/>
                   <Rev/>
                   <Rev/>

                
                </View>
                

             </ScrollView>
             </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //justifyContent: 'space-between',
   //  //alignItems: 'center',
    backgroundColor: 'white',
  },
  map:{
    ...StyleSheet.absoluteFillObject
  },
   container2: {
    flex: 1,
   //justifyContent: 'space-between',
   //  //alignItems: 'center',
    backgroundColor: 'red',
  },
  image:{height:50,
    width:50},
  Overview:{
    //flex:0.3,
    height:400,
    backgroundColor:"orange",
    //justifyContent: 'center',
  },
  Aboutschool:{
    //flex:0.3,
    //backgroundColor:"gray",
    marginBottom:10,
    //justifyContent: 'center',
  },
  InstructScrView:{
    marginBottom:10,
    //flex:0.3,
    //flexDirection:"row",
   // height:200,
    backgroundColor:"white",
    //justifyContent: 'center',
  },
    instructors:{
     // marginBottom:10,
    //flex:0.3,
    //flexDirection:"row",
    
    backgroundColor:"gray",
    //justifyContent: 'center',
  },
   CarScrView:{
    marginBottom:10,
    //flex:0.3,
   // flexDirection:"row",
    //height:200,
    backgroundColor:"white",
    //justifyContent: 'center',
  },
    car:{
    //flex:0.3,
   //flexDirection:"row",
    backgroundColor:"gray",
    //justifyContent: 'center',
  },
    location:{
    //flex:0.3,
   //flexDirection:"row",
    height:200,
    backgroundColor:"gray",
    //justifyContent: 'center',
  },
   RevScrView:{
    //flex:0.3,
    //flexDirection:"row",
    //height:200,
    backgroundColor:"white",
    //justifyContent: 'center',
  },
    review:{
    //flex:0.3,
    //flexDirection:"row",
   // height:200,
    backgroundColor:"gray",
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
    alignSelf :"center",
    height:50,
    width:300,
    borderRadius:10,
    backgroundColor: 'green',
    margin:20,
    justifyContent: 'center',
    alignItems:"center"
  }
});
