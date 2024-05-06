import React from 'react';
import {UserStoryType} from '../../App';
import {Text, View} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props: UserStoryType) => {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
