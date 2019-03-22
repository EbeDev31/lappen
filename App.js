/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Animated} from 'react-native';
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

const ModalNavigator = createStackNavigator(
  {
    SchoolPage: { screen: SchoolPage ,
     navigationOptions: {
            headerTitle:"First Bitch"
        },
      },
    Chat: { screen: Chat ,
          navigationOptions: {
            headerTitle:"Shaba Bitch"
        },

      },
  },
  {
    // headerMode: 'none',
    // mode: 'modal',
     //{
    //   gesturesEnabled: false,
          headerMode: 'none',//null,
    // },

    // navigationOptions: {
    
           // headerTitle:"Try Bitch"
     //  }, 
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 300,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing,
    //   },
    //   screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps;
    //     const { index } = scene;

    //     const height = layout.initHeight;
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0],
    //     });

    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1],
    //     });

    //     return { opacity, transform: [{ translateY }] };
    //   },
    // }),
  }
);

const Feed= createStackNavigator({
 
Home:{screen:SchoolOnMap,
          navigationOptions: {
            headerTitle:"Lappen Bitch"
        },

      },


School:{screen:ModalNavigator,
 
      },

},
{ //Default Navigation Options


   // defaultNavigationOptions: {
   //  //   gesturesEnabled: false,
   //        headerMode: 'none',//null,
   //   },
   //headerMode: 'none',
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

const AppContainer = createAppContainer(Feed);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

