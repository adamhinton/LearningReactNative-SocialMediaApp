import React from 'react';

import {Text} from 'react-native';
import style from './style';

type Props = {
  title: string;
  isFocused: boolean;
};

const ProfileTabsTitle = (props: Props) => {
  const {title} = props;

  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
};

export default ProfileTabsTitle;
