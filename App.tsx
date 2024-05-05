/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: 27,
          marginRight: 17,
          marginTop: 30,
        }}>
        <Title title={"Let's explore"} />
        <FontAwesomeIcon icon={faEnvelope} />
      </View>
    </SafeAreaView>
  );
};

export default App;
