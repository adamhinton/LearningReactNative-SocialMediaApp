/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyles';

const App = () => {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's explore"} />
        <TouchableOpacity
          style={{
            padding: 14,
            // I changed this to make it easier to see
            backgroundColor: '#bfd2e4',
            borderRadius: 100,
          }}>
          <FontAwesomeIcon icon={faEnvelope} color="898DAE" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
