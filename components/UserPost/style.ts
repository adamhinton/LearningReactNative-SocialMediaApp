/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import UserPost from './UserPost';

const style = StyleSheet.create({
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: 'EFF2F6',
  },
  userPostStats: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  userPostStatsButton: {
    flexDirection: 'row',
  },
  userPostStatsButtonRight: {
    flexDirection: 'row',
    marginLeft: 27,
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  userPostStatText: {
    marginLeft: 3,
    color: '79869F',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600 '),
    fontSize: 16,
  },
  location: {
    color: '79869F',
    fontFamily: getFontFamily('Inter', '400 '),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default style;
