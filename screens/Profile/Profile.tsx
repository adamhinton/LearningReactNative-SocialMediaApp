/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';

// @ts-ignore
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]} />
  );
};

export default Profile;
