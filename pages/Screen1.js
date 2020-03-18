//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import SwipeablePanel from 'rn-swipeable-panel';
import {SocialIcon, List, ListItem} from 'react-native-elements';
var _ = require('lodash');

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false,
      // loading: false,
      // data: [],
      // pageToken: '',
      // refreshing: false,
      // siteTitle: '',
    };
  }

  // static navigationOptions = {
  //   title: 'Restaurant List',
  // };

  componentDidMount = () => {
    this.openPanel();
  };

  openPanel = () => {
    this.setState({swipeablePanelActive: true});
  };

  closePanel = () => {
    this.setState({swipeablePanelActive: false});
  };

  // fetchData = () => {
  //   const {pageToken} = this.state;
  //   const urlFirst = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.5854,73.7125&radius=500&type=restaurant&key=AIzaSyAAQ1Cppz62lgwYEJjzrkty7Nzi5ZYNCSM`;
  //   const urlNext = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.5854,73.7125&radius=500&type=restaurant&key=AIzaSyAAQ1Cppz62lgwYEJjzrkty7Nzi5ZYNCSM&pagetoken=${pageToken}`;

  //   let url = pageToken === '' ? urlFirst : urlNext;
  //   console.log(url);
  //   console.log('url');
  //   this.setState({loading: true});
  //   fetch(url)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(res => {
  //       const arrayData = _.uniqBy([...this.state.data, ...res.results], 'id');

  //       this.setState({
  //         siteTitle: 'Resturants Near By',
  //         data: pageToken === '' ? res.results : arrayData,
  //         loading: false,
  //         refreshing: false,
  //         pageToken: res.next_page_token,
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({loading: false});
  //     });
  // };
  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: '86%',
  //         backgroundColor: '#CED0CE',
  //         marginLeft: '14%',
  //       }}
  //     />
  //   );
  // };
  // renderHeader = () => {
  //   return (
  //     <Text
  //       style={{
  //         alignSelf: 'center',
  //         fontWeight: 'bold',
  //         fontSize: 20,
  //         marginBottom: 10,
  //       }}>
  //       {this.state.siteTitle}
  //     </Text>
  //   );
  // };
  // renderFooter = () => {
  //   if (this.state.pageToken === undefined) return null;

  //   return (
  //     <View
  //       style={{
  //         paddingVertical: 20,
  //         borderTopWidth: 1,
  //         borderColor: '#CED0CE',
  //       }}>
  //       <ActivityIndicator animating size="large" />
  //     </View>
  //   );
  // };

  // handleRefresh = () => {
  //   this.setState(
  //     {
  //       pageToken: '',
  //       refreshing: true,
  //     },
  //     () => {
  //       this.fetchData();
  //     },
  //   );
  // };

  // handleLoadMore = () => {
  //   this.fetchData();
  // };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          {/* <TextInput
            placeholderTextColor="#7f8ec5"
            underlineColorAndroid="transparent"
            placeholder={'Enter here'}
            style={styles.input}
          /> */}

          <SocialIcon
            //Social Icon using react-native-elements
            type="twitter"
            //Type of Social Icon
            onPress={() => {
              //Action to perform on press of Social Icon
              this.openPanel();
              // alert('twitter');
            }}
          />
        </View>

        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        <SwipeablePanel
          fullWidth={false}
          isActive={this.state.swipeablePanelActive}
          onClose={() => this.closePanel()}>
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text style={{textAlign: 'center', padding: 20, fontSize: 20}}>
                Share Using
              </Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.GooglePlusStyle}
                  activeOpacity={0.5}>
                  <Image
                    source={require('../images/image1.png')}
                    style={styles.ImageIconStyle}
                  />
                  
                  <Text style={styles.headline}> Login </Text>
                </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.GooglePlusStyle}
                  activeOpacity={0.5}>
                  <Image
                    source={require('../images/image1.png')}
                    style={styles.ImageIconStyle}
                  />
                  <Text style={styles.headline}> Login2 </Text>
                </TouchableOpacity>
              </View>
               <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                  style={styles.GooglePlusStyle}
                  activeOpacity={0.5}>
                  <Image
                    source={require('../images/image1.png')}
                    style={styles.ImageIconStyle}
                  />
                  
                  <Text style={styles.headline}> Login </Text>
                </TouchableOpacity>
                 <TouchableOpacity
                  style={styles.GooglePlusStyle}
                  activeOpacity={0.5}>
                  <Image
                    source={require('../images/image1.png')}
                    style={styles.ImageIconStyle}
                  />
                  <Text style={styles.headline}> Login2 </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SwipeablePanel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: '#7f8ec5',
    width: 300,
    height: 50,
    borderWidth: 0,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#cccccc',
  },
  
  SubmitButtonStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    padding: 10,
    backgroundColor: '#71C488',
    borderRadius: 20,
    alignItems: 'center',
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: 'yellow',
  },
  ListContainer: {
    height: '70%',
  },
   ImageIconStyle: {
    height:50,
    width:50,
    alignSelf: 'center',
      alignItems: 'center',
    justifyContent:'center',
  },
});
