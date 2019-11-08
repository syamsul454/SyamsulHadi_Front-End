import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';


class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Header stylesn ={styles.head}>
        
        <Body>
          <Title>TODO LIST</Title>
        </Body>
       <Right>
         <Icon name= "plus" />
       </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
    head : {
        backgroundColor: 'green'
    }
});
export default Head;
