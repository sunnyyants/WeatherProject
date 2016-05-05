import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

import Forcast from './Forcast';

var WeatherProject = React.createClass({
  getInitialState: function(){
    return {
      zip: '',
      forcast: null
    };
  },
  _handleTextChange: function(event){
    console.log(event.nativeEvent.text);
    this.setState({zip: event.nativeEvent.text});
    this.getWeatherForcast(event.nativeEvent.text);
  },
  getWeatherForcast: function(zip){
    fetch(`http://api/openweathermap.org/data/2.5/weather?q=${zip}&units=imperial`)
      .then((response) => {response.json()})
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forcast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temps
          }
        })
      })
      .catch((error) => {
        console.warn(error);
      })
  },
  render: function() {
    let content = null;
    if (this.state.forcast != null){
      content = <Forcast main={this.state.forcast.main} description={this.state.forcast.description} temp={this.state.forcast.temp}/>
    }
    return (
      <View style={styles.container}>
        <Image source={require('./img/Dark-Polygon-iphone-6-background.jpg')} resizeMode='cover' style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current Weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput style={[styles.zipCode, styles.mainText]} returnKeyType='go' onSubmitEditing={this._handleTextChange}/>
              </View>
            </View>
            {content}
          </View>
        </Image>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  overlay:{
    paddingTop: 5,
    backgroundColor:'#000000',
    opacity:0.5,
    flexDirection:'column',
    alignItems: 'center'
  },
  row:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems:'flex-start',
    padding: 30
  },
  zipContainer:{
    flex:1,
    borderBottomColor:"#dddddd",
    borderBottomWidth:1,
    marginLeft: 5,
    marginTop: 3
  },
  zipCode:{
    width: 50,
    height: 16
  },
  mainText:{
    flex:1,
    fontSize: 16,
    color: "#FFFFFF"
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default WeatherProject
