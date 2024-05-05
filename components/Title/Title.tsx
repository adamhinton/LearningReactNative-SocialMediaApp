import React from 'react';
import style from './style';
import {Text} from 'react-native';

type Props = {
  title: string;
};

const Title = (props: Props) => {
  return <Text style={style.title}>{props.title}</Text>;
};

export default Title;
