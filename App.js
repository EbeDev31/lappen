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
import { createAppContainer, createStackNavigator,} from "react-navigation"


import SchoolOnMap from"./Apps/screens/schoolOnMap"
import SchoolPage from "./Apps/screens/schoolPage"
import Chat from "./Apps/screens/instructorChat"
import Instructor from "./Apps/screens/instructorProfile"
import Payment from "./Apps/screens/payment"


const SchoolPageStack= createStackNavigator({

Cek:{screen:SchoolPage,
          navigationOptions: {
            headerTitle:"Work Bitch"
        },

      },

Chat:{

            screen:Chat,

            navigationOptions: {
                headerTitle:"AutoScuola Chris"
            },
      },


Instructor:{

          screen:Instructor,

          navigationOptions: {
              headerTitle:"Dangerous Ruben"
          },
      },
      
Payment:{

          screen:Payment,

          navigationOptions: {
              headerTitle:"Pay Ebe :D"
          },
      },

},

)


const Feed= createStackNavigator({
 
Home:{screen:SchoolOnMap,
          navigationOptions: {
            headerTitle:"Lappen Bitch"
        },

      },


School:{screen:SchoolPageStack,
      },

},
{ //Default Navigation Options
   
   /* defaultNavigationOptions: {
        headerTitle:(
                    <Header/>
                ),
       // headerTransparent: true, 
        headerStyle:
         {style:{
                 // position: 'absolute',
                  backgroundColor: 'red', 
                 
            } 
        },
    },*/

  })


export default createAppContainer(Feed);

