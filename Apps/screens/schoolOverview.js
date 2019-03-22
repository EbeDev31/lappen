/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Dimensions,ImageBackground} from 'react-native';
import MapView from 'react-native-maps';
import { Card, ListItem, Button, Icon,Tile} from 'react-native-elements'


const width2=Dimensions.get("window").width;
const height2=Dimensions.get("window").height;
const tileHeight =410;

export default class SchoolOverView extends Component{

  render() {
    return (
          <View style={styles.container}>
             

                    <View style={styles.imageArea}>
                            <Tile
                              imageSrc={require('../assets/img1.jpg')}
                              title="School OverView Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                              featured
                              caption="Some Caption Text"
                              imageContainerStyle={{height:tileHeight}}
                              />
                      </View>


                      <View style={styles.textArea}>


                        <View style={{flex:1,marginBottom :10}}>

                          <Text style={color:"gray"}>1.3 KM NEARBY</Text>
                          <Text style={styles.text}>We have 30+ Cars for Driving
                           school text for your</Text>
                        </View>

                         <View style={{flex:1,marginBottom :10}}>
                          <Text style={styles.text}>RATING OOOOO</Text>
                          </View>

                       <View style={{flex:1,marginBottom :10}}>
                        <Text style={styles.text}>REVIEWS</Text>
                        </View>

                       </View>


                      <View style={styles.btnCont}>
                        <TouchableOpacity style={styles.button}> 
                        
                        <Text style={styles.text}>Press</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button2}> 
                          <Text style={styles.text}>Press Me</Text>
                        </TouchableOpacity>
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
    backgroundColor: 'black',
  },
   btnCont: {
    //flex: 1,
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection:"row",
  // backgroundColor: 'pink',
   position: "absolute",
   top:tileHeight-140,
   left:0,
   right:0,
   paddingHorizontal:30,
  },
  imageArea: {
  flex: 0.55,
  backgroundColor: 'orange',
  //justifyContent: 'center',
  },
  textArea: {
    flex: 0.45,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal:20,
    paddingVertical:40,
  },
  text:{
    fontSize:17,
    color:"black",
  },
  title:{
    fontSize:20,
    color:"gray",
  },
   button:{
    height:60,
    width:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius:50,
    //marginLeft:10,
  },
   button2:{
    height:50,
    width:130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
   //x marginTop:10,
    borderRadius:30,
    //marginRight:10,
   
  }
});
