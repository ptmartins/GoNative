import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { WebView } from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const App = () => {

  const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
          <WebView
            source={{uri: 'https://beta.imagengo.io/'}}

            style={{marginTop: 10
              }}
          />
        </SafeAreaView>
    )
  };

  const OtherScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', color: '#fff', alignItems: 'center'}}>
            <Text style={{color: '#fff'}}> This is my Other screen </Text>
        </View>
    )
  };

    const bottomTabNavigator = createBottomTabNavigator(
        {
            Home: HomeScreen,
            Other: OtherScreen
        },
        {
            initialRouteName: 'Home',
        }
    );

  useEffect(() => {
    SplashScreen.show();
    setTimeout(() => {
        SplashScreen.hide();
    }, 2000)
  });

  const AppContainer = createAppContainer(bottomTabNavigator);

  return (
//    <SafeAreaView style={{flex: 1}}>
//      <WebView
//        source={{uri: 'https://beta.imagengo.io/'}}
//
//        style={{marginTop: 10
//          }}
//      />
//      <Text style={{padding: 20, backgroundColor: '#9bd700'}}>{ message }</Text>
//    </SafeAreaView>

    <AppContainer />
  );
};

export default App;