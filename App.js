import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './Main';

class App extends Component {
  render(){

    return (
        <Main/>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
