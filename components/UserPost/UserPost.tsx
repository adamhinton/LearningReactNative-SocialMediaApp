/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

type Props = {
  firstName: string;
  lastName: string;
  location?: string;
  image: any;
  profileImage: any;
  likes: number;
  comments: number;
  bookmarks: number;
};

const UserPost = (props: Props) => {
  const {
    firstName,
    lastName,
    location,
    image,
    likes,
    comments,
    bookmarks,
    profileImage,
  } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={48}
      />
      <View>
        <Text>
          {firstName} {lastName}
        </Text>
      </View>
    </View>
  );
};

export default UserPost;
