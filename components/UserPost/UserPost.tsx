import React from 'react';
import {View} from 'react-native';
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
  const {firstName, lastName, location, image, likes, comments, bookmarks} =
    props;

  return (
    <View>
      <UserProfileImage profileImage={} imageDimensions={48} />
    </View>
  );
};

export default UserPost;
