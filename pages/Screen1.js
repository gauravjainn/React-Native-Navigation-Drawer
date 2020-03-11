//This is an example code for NavigationDrawer//
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SwipeablePanel from 'rn-swipeable-panel';
import {SocialIcon} from 'react-native-elements';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swipeablePanelActive: false,
    };
  }

  componentDidMount = () => {
    this.openPanel();
  };

  openPanel = () => {
    this.setState({swipeablePanelActive: true});
  };

  closePanel = () => {
    this.setState({swipeablePanelActive: false});
    // setTimeout(() => {
    //   this.openPanel();
    // }, 1000);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            placeholderTextColor="#7f8ec5"
            underlineColorAndroid="transparent"
            placeholder={'Enter here'}
            style={styles.input}
          />

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
                <SocialIcon
                  //Social Icon using react-native-elements
                  type="twitter"
                  //Type of Social Icon
                />
                <SocialIcon type="gitlab" />
                <SocialIcon type="medium" />
                <SocialIcon type="facebook" />
                <SocialIcon type="instagram" />
              </View>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <SocialIcon type="facebook" />
                <SocialIcon type="instagram" />
                <SocialIcon type="gitlab" />
                <SocialIcon type="twitter" />
                <SocialIcon type="medium" />
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
    height: 250,
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
});
