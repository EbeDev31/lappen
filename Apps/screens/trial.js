/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image, TouchableOpacity,Dimensions,} from 'react-native';
import MapView from 'react-native-maps';
import { Button,Icon,Avatar,Rating} from 'react-native-elements'


const width2=Dimensions.get("window").width;
const height2=Dimensions.get("window").height;


// implemented without image with header


export default class ScrollComponent extends Component{


  render() {
    return (
             <View style={styles.container}>

                 <Avatar
                    rounded
                    size="large"
                    source={{
                      uri:"../assets/prfpic.jpeg",
                    }}
                  />

                <View style={styles.rest}>
                  <View style={styles.sec1}>
                     
                    <View style={styles.sec1b}>
                      <Text>Name of Commentor</Text>
                      <Rating
                      imageSize={20}
                      ratingColor="green"
                      />
                    
                    </View>
                  
                   </View>

                  <View style={styles.sec2}>
                      <Text style={{color:"gray"}}>Comment Of Reviewwwhgfgsbkjlzjfhoubsfjkabszfjkbzn</Text>
                    </View>

                  <View style={styles.sec3}>
                       <Rating
                        count={3}
                        type="heart"
                        imageSize={20}
                        ratingColor="blue"
                        ratingCount={3}
                        showRating={true}
                        />
                       <Text style={{color:"gray"}}>Hours Ago</Text>
                   </View>
                </View>
             </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    padding:15,
   //justifyContent: 'space-between',
   //  //alignItems: 'center',
    backgroundColor: 'yellow',
  },
  map:{
    flex:0.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems:"center",
                             
  },
  rest:{
    padding:5,
    backgroundColor: 'white',
  },
  sec1:{
    //flex:0.3,
    backgroundColor: 'white',
    //padding:20,
    //justifyContent: 'center',
    //alignItems:"center",

  },
   sec1b:{
    //flex:0.3,
    backgroundColor: 'white',
    //flexDirection:"row",
    //justifyContent: 'center',
    //alignItems:"center",

  },
   sec2:{
    //flex:0.3,
    backgroundColor: 'white',
    //flexDirection:"row",
    //justifyContent: 'center',
    //alignItems:"center",

  },
   sec3:{
    //flex:0.3,
    //backgroundColor: 'blue',
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems:"center",

  },
});
