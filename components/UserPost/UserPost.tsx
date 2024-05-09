/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';

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
    <View style={style.user}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text>
              {firstName} {lastName}
            </Text>
            {location && <Text>{location}</Text>}
          </View>
        </View>
      </View>
      <FontAwesomeIcon icon={faEllipsisH} />
    </View>
  );
};

export default UserPost;
