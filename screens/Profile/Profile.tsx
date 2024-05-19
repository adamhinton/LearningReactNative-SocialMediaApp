/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';

import {TouchableOpacity} from 'react-native-gesture-handler';

// @ts-ignore
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{color: 'blue'}}>Go back</Text>
      </TouchableOpacity>
      <Text>Welcome to profile page</Text>
    </SafeAreaView>
  );
};

export default Profile;
