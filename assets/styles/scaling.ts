import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

// Window is what's usable by the app. Screen is the entire screen of the phone, including the status bar, clock etc.
const {width, height} = Dimensions.get('window');

//Iphone 6 7 8
const isSmall = width <= 375 && !DeviceInfo.hasNotch;

// using this for horizontal scaling
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

const horizzontalScale = (size: number) => {
  return (width / guidelineBaseWidth()) * size;
};
