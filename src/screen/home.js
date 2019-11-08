import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Container, Content} from 'native-base'
import HEAD from '../component/header';
import List from '../component/listTodo'
import {connect} from 'react-redux';
import {getTodo} from '../redux/actoin'


class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    this.props.dispatch(getTodo())

}
  render() {
    return (
    <Container>
        <HEAD />
            <Content>
                <List />
            </Content>
    </Container>
      
    );
  }
}

const mapStateToProps = (state) => ({
        todo : todo.dataTodo
});
export default connect(
    mapStateToProps
  )(home);
