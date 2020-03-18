import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View, Text, StyleSheet, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class Screen3 extends Component {


  constructor(props) {
    super(props)
    this.state = {
      showPlacesList: false,
      swipeablePanelActive: false
    }
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ width: '100%', top: '15%', zIndex: 2, position: 'absolute', backgroundColor: 'transparent' }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <GooglePlacesAutocomplete
              placeholder='Where to?'
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
              listViewDisplayed={this.state.showPlacesList}
              onChangeText={ValueHolder => this.GetValueFunction(ValueHolder)}
              textInputProps={{
                onFocus: () => this.setState({ showPlacesList: true }),
                onBlur: () => this.setState({ showPlacesList: false }),
              }}
              // listViewDisplayed='auto' 
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                console.log("data===" + JSON.stringify(data));
                console.log("details===" + JSON.stringify(details));
                console.log("geometry===" + JSON.stringify(details.geometry.location));
                var lat = parseFloat(details.geometry.location.lat)
                var long = parseFloat(details.geometry.location.lng)

                console.log("lat===" + lat);
                console.log("long===" + long);


              }}


              getDefaultValue={() => ''}

              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: 'AIzaSyAAQ1Cppz62lgwYEJjzrkty7Nzi5ZYNCSM',
                language: 'en' // language of the results
              }}

              styles={{
                textInputContainer: {
                  width: '100%'
                },
                description: {
                  fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                  color: '#1faadb'
                }
              }}

              //  currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
              //   currentLocationLabel="Current location"
              nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={{
                // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
              }}
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: 'distance',
                type: 'cafe'
              }}

              GooglePlacesDetailsQuery={{
                // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                fields: 'geometry',
              }}

              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              //  predefinedPlaces={[homePlace, workPlace]}

              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />


          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // mapStyle: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // },
  // bottomNavigationView: {
  //   backgroundColor: '#fff',
  //   width: '100%',
  //   height: 250,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // getDirectionButton: {
  //   marginTop: 20,
  //   width: 300,
  //   height: 40,
  //   padding: 10,
  //   backgroundColor: '#24a0ed',
  //   borderRadius: 10,
  //   alignItems: 'center'
  // },
  // getNearestButton: {
  //   marginTop: 20,
  //   width: 100,
  //   height: 40,
  //   padding: 10,
  //   backgroundColor: '#24a0ed',
  //   borderRadius: 10,
  //   marginRight: 10,
  //   marginLeft: 10,
  //   alignItems: 'center'
  // },

  // directionText: {
  //   fontSize: 15,
  //   textAlign: 'center',
  //   color: 'white'
  // },
  // blacklargetext: {
  //   fontSize: 15,
  //   textAlign: 'left',
  //   color: 'black'
  // },
  // image: {
  //   height: 40,
  //   marginTop: 40
  // }

});  