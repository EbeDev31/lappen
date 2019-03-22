/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet,Text,View,FlatList, TouchableOpacity,Dimensions,} from 'react-native';
import { Card, Button,Rating,Tile,Avatar} from 'react-native-elements'
import { withNavigation } from 'react-navigation';




const width2=Dimensions.get("window").width;
const height2=Dimensions.get("window").height;


// implemented without image with header


class ScrollComponent extends Component{

/**
 * to be modified to inlcude perhaps some sort of props 
 to include image (depending of cars or Instructor), 

 Also another props for perhaps Rating.
 */

  render() {
    return (
             <View style={{backgroundColor: 'transparent',
                            justifyContent: 'center',

                            alignItems:"center",
                             }}>
                         
                <FlatList
                      horizontal={true}
                      data={[{title: 'Title Text', key: 'item5',bg: 'red',},{title: 'Title Text', key: 'item4',bg: 'red',},{title: 'Title Text', key: 'item1',bg: 'red',},{title: 'Title Text', key: 'item3',bg: 'yellow',},{title: 'Title Text', key: 'item2',bg: 'green',}]}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={{
                            backgroundColor: "pink",
                           
                            width:150,
                            justifyContent: 'center',
                            alignItems:"center",
                          }}

                          onPress={() => {this.props.navigation.navigate("School")}}>

                          
                            <Card>
                                <Avatar
                               // avatarStyle={{alignSelf:"center"}}
                                    source={require('../assets/img1.jpg')}
                                    size="large"
                                />
                              <Text style={{}}>
                                Instructor Name
                              </Text>
                              <Rating
                              imageSize={10}
                                  onFinishRating={this.ratingCompleted}
                                  style={{ paddingVertical: 5 }}
                                />
                               <Button
                               buttonStyle={{height:20,
                                backgroundColor:'gray'}}
                                title='View Profile' />
                            </Card>
                          
                        </TouchableOpacity>
                      )}
                    />
                </View>
    );
  }
}
export default withNavigation(ScrollComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
   //justifyContent: 'space-between',
   //  //alignItems: 'center',
    backgroundColor: 'black',
  }
});
