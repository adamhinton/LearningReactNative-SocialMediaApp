/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

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
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <UserProfileImage
          profileImage={props.profileImage}
          imageDimensions={48}
        />
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text>
            {firstName} {lastName}
          </Text>
          {location && <Text>{location}</Text>}
        </View>
      </View>
      <FontAwesomeIcon icon={faEllipsisH} />
    </View>
  );
};

export default UserPost;
