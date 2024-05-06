import React from 'react';
import {UserStoryType} from '../../App';
import {Image, Text, View} from 'react-native';

const UserStory = (props: UserStoryType) => {
  return (
    <View>
      <Image source={props.profileImage} />
      <Text>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
