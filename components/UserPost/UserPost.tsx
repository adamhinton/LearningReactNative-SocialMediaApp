/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

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
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={style.userContainer}>
            <UserProfileImage
              profileImage={props.profileImage}
              imageDimensions={horizontalScale(48)}
            />
            <View style={style.userTextContainer}>
              <Text style={style.username}>
                {firstName} {lastName}
              </Text>
              {location && <Text style={style.location}>{location}</Text>}
            </View>
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          color={'#79869F'}
          size={scaleFontSize(24)}
        />
      </View>

      <View style={style.postImage}>
        <Image source={image} />
      </View>

      <View style={style.userPostStats}>
        <View style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={style.userPostStatText}>{likes}</Text>
        </View>

        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={style.userPostStatText}>{comments}</Text>
        </View>

        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={style.userPostStatText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
