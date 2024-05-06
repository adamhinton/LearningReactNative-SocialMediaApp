import React from 'react';
import {UserStoryType} from '../../App';
import {Image, Text, View} from 'react-native';
import style from './style';

const UserStory = (props: UserStoryType) => {
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={props.profileImage} style={style.image} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
