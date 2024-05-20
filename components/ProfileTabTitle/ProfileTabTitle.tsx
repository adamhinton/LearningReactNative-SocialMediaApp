import React from 'react';

import {Text} from 'react-native';

type Props = {
  title: string;
};

const ProfileTabsTitle = (props: Props) => {
  const {title} = props;

  return <Text>{title}</Text>;
};

export default ProfileTabsTitle;
