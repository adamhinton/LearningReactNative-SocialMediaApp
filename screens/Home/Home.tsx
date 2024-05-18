import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {scaleFontSize} from '../../assets/styles/scaling';

// each userstory batch will contain four items
export type UserStoryType = {
  firstName: string;
  id?: number;
  profileImage: ImageSourcePropType;
};

const Home = () => {
  const userStories: UserStoryType[] = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  // userPost type
  type UserPostType = {
    firstName: string;
    lastName: string;
    location: string;
    likes: number;
    comments: number;
    bookmarks: number;
    profileImage: any;
    image: any;
    id: number;
  };

  const userPosts: UserPostType[] = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Boston, MA',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilson',
      location: 'Worcester, MA',
      likes: 1301,
      comments: 25,
      bookmarks: 70,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Worcester, MA',
      likes: 100,
      comments: 8,
      bookmarks: 3,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vaicheshvili',
      location: 'New York, NY',
      likes: 200,
      comments: 16,
      bookmarks: 7,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, DE',
      likes: 2000,
      comments: 32,
      bookmarks: 12,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
  ];

  // num userStorys per render
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStoryType[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  // num userPosts per render
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<
    UserPostType[]
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  // Subsection of UserSTorys
  const pagination = <T extends UserPostType | UserStoryType>(
    database: T[],
    currentPage: number,
    // UserStorys per page
    pageSize: number,
  ): T[] => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  // USER STORIES
  useEffect(() => {
    setIsLoadingUserStories(true);

    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);

    setIsLoadingUserStories(false);

    // 0000000
    setIsLoadingUserPosts(true);

    const getInitialDataPosts = pagination(
      userPosts,
      1,
      userPostsPageSize,
    ) as UserPostType[];
    setUserPostsRenderedData(getInitialDataPosts);

    setIsLoadingUserPosts(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      {/* POSTS */}
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                {/* TITLE */}
                <Title title={"Let's explore"} />
                {/* MESSAGE */}
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={scaleFontSize(20)}
                    color="#898DAE"
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* FRIENDS */}
              <View style={style.userStoryContainer}>
                <FlatList
                  // 0.5 means 50%
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => {
                    return (
                      <UserStory
                        key={'userStory' + item.id}
                        profileImage={item.profileImage}
                        firstName={item.firstName}
                      />
                    );
                  }}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          style={style.userPostContainer}
          data={userPostsRenderedData}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                key={'userPost' + item.id}
                image={item.image}
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
