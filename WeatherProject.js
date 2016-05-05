import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Forcast from './Forcast';

var WeatherProject = React.createClass({
  getInitialState: function(){
    return {
      zip: '',
      forcast: {
        main: 'Clouds',
        description:'few clouds',
        temp: 45.7
      }
    };
  },
  _handleTextChange: function(event){
    console.log(event.nativeEvent.text);
    this.setState({zip: event.nativeEvent.text});
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your Input {this.state.zip}
        </Text>
        <Forcast main={this.state.forcast.main} description={this.state.forcast.description} temp={this.state.forcast.temp}/>
        <TextInput style={styles.input} onSubmitEditing={this._handleTextChange}/>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4d4d4d',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});

export default WeatherProject
