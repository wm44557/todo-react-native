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
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImageE from './assets/Unknown.jpeg';
import styled from 'styled-components';
import ProfileScreen from './ProfileScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <ProfileScreen />
    </SafeAreaView>
  );
};

export default App;
