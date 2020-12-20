/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './src/screens/StartScreen/StartScreen';
import HistoryScreen from './src/screens/HistoryScreen/HistoryScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();



const App = ({navigation}) => {
  const {height, width} = Dimensions.get('window');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start Screen'>
        <Stack.Screen 
        name='StartScreen'
        component={StartScreen}
        options={{
          title: 'Start Screen', //Set Header Title
          headerStyle: {
            backgroundColor: '#19547b', //Set Header color
            borderColor: 'rgba(230, 126, 34, 0.1)',
            borderWidth: 3,
            borderBottomColor: 'rgba(200, 200, 200, 0.25)',
            borderBottomWidth: 3.5
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HistoryScreen')}
             style={{ height: height/18, width: width/5, justifyContent: 'center', alignItems: 'center', }}>
               <MaterialIcons
                    name = {'history'}
                    color = 'orange'
                    style = {{fontSize: 30}}
                />
            </TouchableOpacity>
           
          ),
          headerTintColor: 'orange', //Set Header text color
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'normal', //Set Header text style
          },
        }} />
        <Stack.Screen 
        name='HistoryScreen'
        component={HistoryScreen}
        options={{
          title: 'History Screen', //Set Header Title
          headerStyle: {
            backgroundColor: '#19547b', //Set Header color
            borderColor: 'rgba(230, 126, 34, 0.1)',
            borderWidth: 3,
            borderBottomColor: 'rgba(200, 200, 200, 0.25)',
            borderBottomWidth: 3.5
          },
          headerTintColor: 'orange', //Set Header text color
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'normal', //Set Header text style
          },
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
