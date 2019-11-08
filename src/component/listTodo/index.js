import React, { Component } from 'react';
import {View,StyleSheet} from 'react-native'
import {Card, CardItem, Body, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
class listodo extends Component {
  render() {
    return (
          <Card style = {styles.cardbody}>
            <CardItem style = {styles.cardbody}>
              <Body>
                <View style = {styles.listbody} >
                    <View>
                    <Text>
                        Rapat
                    </Text>
                    <Text>
                        10-10-2019
                    </Text>
                    </View>
                    <View style = {styles.iconbutton} >
                    <Icon name = 'delete'  />
                    </View>
                </View>
                
              </Body>
            </CardItem>
          </Card>
    );
  }
}

const styles = StyleSheet.create({
    cardbody : {
        backgroundColor :'yellow',
        margin : 5,
        borderRadius: 10
    },
    listbody : {
        flexDirection: 'row',
    },

    iconbutton : {
        marginRight : 0,
        marginLeft: 200
    }
    
});
export default listodo