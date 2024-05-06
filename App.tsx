/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyles';

type UserStory = {
  firstName: string;
  id: number;
  profileImage: URL;
};

const App = () => {
  const userStories: UserStory[] = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },

    // Eight more user stories. Ids in ascending order. Names are : Angel, White, Olivier, Nata, Nicolas, Nino, Nana, Adam
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title={"Let's explore"} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#898DAE" />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
