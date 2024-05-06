import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    // I changed this to make it easier to see
    backgroundColor: '#bfd2e4',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: 'white',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default globalStyle;
