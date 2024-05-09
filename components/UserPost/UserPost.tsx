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
              imageDimensions={48}
            />
            <View style={style.userTextContainer}>
              <Text style={style.username}>
                {firstName} {lastName}
              </Text>
              {location && <Text style={style.location}>{location}</Text>}
            </View>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={24} />
      </View>

      <View style={style.postImage}>
        <Image source={image} />
      </View>

      <View style={{marginLeft: 10, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '79869F'}}>{likes}</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '79869F'}}>{comments}</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '79869F'}}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;
