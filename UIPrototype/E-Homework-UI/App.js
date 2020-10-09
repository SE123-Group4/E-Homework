/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './Screens/LoginScreen';
import {TeaHomeScreen} from './Screens/TeaHomeScreen';
import {RegisterScreen_1} from './Screens/RegisterScreen_1';
import {RegisterScreen_2} from './Screens/RegisterScreen_2';
import {TeaCoursesScreen} from './Screens/TeaCoursesScreen';
import {TeaCourseScreen} from './Screens/TeaCourseScreen';
import {StuCoursesScreen} from './Screens/StuCoursesScreen';
import {StuCourseScreen} from './Screens/StuCourseScreen';
import {Search} from './Components/Search';
import {TeaCourseNavigator} from './Navigators/TeaCourseNavigator';
import {TeaHWScreen} from './Screens/TeaHWScreen';
import {StuHWScreen} from './Screens/StuHWScreen';
import {MainNavigator} from './Navigators/MainNavigator';
import {AssignHwScreen} from './Screens/AssignHwScreen';
import {StuHomeScreen} from './Screens/StuHomeScreen';
import {StuProfileScreen} from './Screens/StuProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerMode: 'none'}}>
        {/*放在第一个为默认界面，初始应只有login, register, home，其他的界面在home或者相应的界面路由*/}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MainNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register_1"
          component={RegisterScreen_1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register_2"
          component={RegisterScreen_2}
          options={{headerShown: false}}
        />
        <Stack.Screen
            name="AssignHw"
            component={AssignHwScreen}
            options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
