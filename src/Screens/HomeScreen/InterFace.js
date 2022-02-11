import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icons from 'react-native-vector-icons/Ionicons';
import MessangerModal from './MessangerModal';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {updateTutorialStatus} from '../../../Slice/AuthReducer';
import {
  boostGroup,
  updateUserFavStatusInRandomeList,
  updateUserNotifyStatusInRandomeList,
} from '../../../Slice/RandomeReducer';
import Share from 'react-native-share';
import SettingModal from '../../Common/SettingModal';
import {
  getRandomeList,
  resetErrorValue,
  seenGroup,
} from '../../../Slice/RandomeReducer';
import ErrorModal from '../../Common/ErrorModal';
import {updateUserFavStatusInlist} from '../../../Slice/AllGroupListReducer';
import {resetMuteStatus} from '../../../Slice/NotificationReducer';

function Interface(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalValue, setModalValue] = useState(false);
  const [flagStatus, setFlagStatus] = useState(false);
  const [oneBoost, setOneBoost] = useState(new Animated.Value(0));
  const [fiveBoost, setFiveBoost] = useState(new Animated.Value(0));
  const [fiveXValue, setFiveXValue] = useState(false);
  const [oneXValue, setOneXValue] = useState(false);
  const [settingModal, setSettingModal] = useState(false);
  const [errorModalValue, setErrorModalValue] = useState(false);
  const [tutorialStatus, setTutorialStatus] = useState('');
  const [systemLang, setSystemLang] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation] = useState(new Animated.Value(1));
  const [groupId, setGroupId] = useState(0);
  const [boosted_mute_id, setBoosted_mute_id] = useState(0);
  const [boosted_mute_status, setBoosted_mute_status] = useState(false);
  const [favouriteStatus, setFavouriteStatus] = useState(false);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -60,
          duration: 1500,
          delay: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 1000,
      },
    ).start();
  };

  useEffect(() => {
    getStatus();
    startAnimation();
  }, []);

  const getStatus = async () => {
    setTutorialStatus(await AsyncStorageLib.getItem('tutorial'));
    setSystemLang(await AsyncStorageLib.getItem('systemLang'));
  };

  const {
    randomeList,
    error,
    fromDate,
    oneXStatus,
    fiveXStatus,
    boostNotifyId,
    boostNotifyStatus,
  } = useSelector(state => {
    return state.RandomeReducer;
  });

  useEffect(() => {
    if (error != '') {
      setTimeout(() => {
        setErrorModalValue(true);
      }, 1000);
      setTimeout(() => {
        setErrorModalValue(false);
        dispatch(resetErrorValue());
      }, 1800);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getRandomeList({selectedMessenger: [], systemLang, fromDate}));
  }, []);

  const updateStatus = async () => {
    setTutorialStatus('True');
    dispatch(updateTutorialStatus());
    await AsyncStorageLib.setItem('tutorial', 'True');
  };
  useEffect(() => {
    if (currentIndex != '') {
      const groupId = randomeList[currentIndex].id;
      dispatch(seenGroup(groupId));
    }
  }, [currentIndex]);

  const scrolling = event => {
    setCurrentIndex(
      parseInt(
        event.nativeEvent.contentOffset.y / Dimensions.get('window').height,
      ),
    );

    if (event.nativeEvent.contentOffset.y > 250) {
      updateStatus();
    }
  };
  const url = 'https://everygroup.com/';
  const title = 'Awesome';
  const message = 'Please check this out.';

  const options = {
    title,
    url,
    message,
  };

  const openShare = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {}
  };
  const boostGroupValue = (oneX, fiveX, groupId) => {
    dispatch(boostGroup({oneX, fiveX, groupId}));
  };
  // const {} = useSelector(
  //   state => {
  //     return state.RandomeReducer;
  //   },
  // );

  const fiveXBouncyfunc = () => {
    setFiveXValue(true);
    Animated.spring(fiveBoost, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      fiveBoost.setValue(0);
    });
  };

  const fiveXBouncyView = fiveBoost.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.7, 1],
  });

  useEffect(() => {
    if (fiveXStatus > 0) {
      fiveXBouncyfunc();
    }
  }, [fiveXStatus]);

  useEffect(() => {
    if (oneXStatus > 0) {
      oneXBouncyfunc();
    }
  }, [oneXStatus]);

  const oneXBouncyfunc = () => {
    setOneXValue(true);
    Animated.spring(oneBoost, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      oneBoost.setValue(0);
    });
  };

  const oneXBouncyView = oneBoost.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.7, 1],
  });

  const {value, favouriteError} = useSelector(state => {
    return state.FavouriteGroupReducer;
  });

  useEffect(() => {
    if (value == 'success') {
      setFavouriteStatus(true);
      dispatch(updateUserFavStatusInlist({groupId: groupId, data: true}));
      dispatch(
        updateUserFavStatusInRandomeList({groupId: groupId, data: true}),
      );
    }
  }, [value]);
  const openLink = link => {
    Linking.openURL(link);
  };

  const {muteSuccess} = useSelector(state => {
    return state.NotificationReducer;
  });

  useEffect(() => {
    if (muteSuccess == 'success') {
      setBoosted_mute_status(!boosted_mute_status);
      dispatch(
        updateUserNotifyStatusInRandomeList({
          groupId: groupId,
          value: !boosted_mute_status,
        }),
      );
      setTimeout(() => {
        dispatch(resetMuteStatus());
      }, 600);
    }
  }, [muteSuccess]);

  return (
    <View style={{flex: 1, backgroundColor: '#dcdcdc'}}>
      <SettingModal
        modalValue={settingModal}
        closeModal={() => setSettingModal(false)}
        groupId={groupId}
        favouriteStatus={favouriteStatus}
        flagStatus={flagStatus}
        boosted_mute_id={boosted_mute_id}
        boosted_mute_status={boosted_mute_status}
      />
      <MessangerModal
        modalValue={modalValue}
        closeModal={() => setModalValue(false)}
        systemLang={systemLang}
      />
      <ErrorModal modalValue={errorModalValue} message={error} />

      <ScrollView
        onScroll={event => {
          scrolling(event);
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast">
        {randomeList.map(item => {
          return (
            <View
              key={item.id}
              style={{height: height}}
              pointerEvents={tutorialStatus == 'False' ? 'none' : 'auto'}>
              <View
                style={[
                  styles.child,
                  {
                    backgroundColor:
                      tutorialStatus == 'True' ? '#fff' : 'rgb(190,191,191)',
                    paddingTop: 20,
                  },
                ]}>
                <View style={styles.subContainer}>
                  <View style={styles.header}>
                    <Icons
                      name={'close'}
                      color="#EF3E36"
                      size={35}
                      onPress={() => navigation.navigate('Dashboard')}
                    />

                    <TouchableWithoutFeedback
                      onPress={() => setModalValue(!modalValue)}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            color: '#205072',
                            fontSize: 18,
                            fontFamily: FontStyle.MontBold,
                          }}>
                          Filter
                        </Text>
                        <Entypo name="chevron-down" size={30} color="#205072" />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={[styles.subHeader]}>
                    <TouchableOpacity
                      // onPress={() => navigation.navigate('OtherUserScreen')}
                      onPress={() =>
                        navigation.navigate('OtherUserScreen', {
                          otherUserId: item.user,
                          otherUserName: item.owner_name,
                          userStatus: item.is_group_owner_favourite,
                        })
                      }
                      style={{
                        backgroundColor: '#FF6600',
                        padding: 10,
                        borderRadius: 8,
                      }}>
                      <Text
                        style={{color: '#fff', fontFamily: FontStyle.MontBold}}>
                        {item.owner_name}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 6, borderRadius: 12}}>
                      <Image
                        style={{height: 50, width: 50, resizeMode: 'contain'}}
                        source={
                          item.group_type === 'whatsapp'
                            ? require('../../Assets/Images/whatsapp.png')
                            : item.group_type === 'snapchat'
                            ? require('../../Assets/Images/snapchat.png')
                            : item.group_type === 'telegram'
                            ? require('../../Assets/Images/telegram.png')
                            : item.group_type === 'line'
                            ? require('../../Assets/Images/line.png')
                            : item.group_type == 'discord'
                            ? require('../../Assets/Images/discord.png')
                            : item.group_type == 'viber'
                            ? require('../../Assets/Images/viber.png')
                            : null
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.groupName}>{item.title}</Text>
                <View style={styles.categoryContainer}>
                  {item.categories.map((categories, index) => (
                    <View
                      key={index.toString()}
                      style={{
                        backgroundColor: '#205072',
                        height: 20,
                        minWidth: 50,
                        maxWidth: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        borderRadius: 5,
                        paddingHorizontal: 5,
                      }}>
                      <Text key={index.toString()} style={styles.category}>
                        {categories.category}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.hashtagContainer}>
                  {item.tags.map((tags, index) => (
                    <Text
                      key={index.toString()}
                      style={{
                        color: '#FFA420',
                        margin: 3,
                        fontFamily: FontStyle.MontMedium,
                        fontSize: 14,
                      }}>
                      {tags}
                    </Text>
                  ))}
                </View>

                <Text
                  style={{
                    color: '#205072',
                    fontSize: 15,
                    marginTop: 15,
                    marginLeft: 18,
                    fontFamily: FontStyle.MontMedium,
                  }}>
                  {item.description}
                </Text>
                {tutorialStatus == 'False' ? (
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      flexDirection: 'row',
                      height: 180,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={require('../../Assets/Images/arrowanimation.png')}
                      style={{
                        height: 39,
                        width: 26,
                        top: 10,
                        right: -15,
                        resizeMode: 'contain',
                        alignSelf: 'flex-start',
                      }}
                    />
                    <Animated.Image
                      source={require('../../Assets/Images/handanimation.png')}
                      style={{
                        height: 110,
                        width: 88,
                        marginRight: 30,
                        marginTop: 40,
                        resizeMode: 'contain',
                        transform: [{translateY: animation}],
                      }}
                    />
                  </View>
                ) : null}
                <View style={styles.verticalIcons}>
                  <TouchableOpacity onPress={() => openShare()}>
                    <Image
                      source={require('../../Assets/Images/share.png')}
                      style={{
                        height: 22,
                        width: 22,
                        resizeMode: 'contain',
                        marginVertical: 10,
                        right: 5,
                      }}
                    />
                  </TouchableOpacity>

                  {!item.booster_points_1x_status ? (
                    <Animated.View
                      style={{transform: [{scale: oneXBouncyView}]}}>
                      <Image
                        source={require('../../Assets/Images/arrowYellow.png')}
                        style={{
                          height: 22,
                          width: 22,
                          resizeMode: 'contain',
                          right: 5,
                          marginVertical: 10,
                        }}
                      />
                    </Animated.View>
                  ) : (
                    <TouchableWithoutFeedback
                      onPress={() => boostGroupValue(1, 0, item.id)}>
                      <Image
                        source={require('../../Assets/Images/arrowBlank.png')}
                        style={{
                          height: 22,
                          width: 22,
                          resizeMode: 'contain',
                          right: 5,
                          marginVertical: 10,
                        }}
                      />
                    </TouchableWithoutFeedback>
                  )}
                  {!item.booster_points_5x_status ? (
                    <Animated.View
                      style={{transform: [{scale: fiveXBouncyView}]}}>
                      <Image
                        source={require('../../Assets/Images/arrowOrangeBooster.png')}
                        style={{
                          height: 38,
                          width: 34,
                          resizeMode: 'contain',
                          marginVertical: 10,
                        }}
                      />
                    </Animated.View>
                  ) : (
                    <TouchableWithoutFeedback
                      onPress={() => boostGroupValue(0, 5, item.id)}>
                      <Image
                        source={require('../../Assets/Images/mediaArrow.png')}
                        style={{
                          height: 38,
                          width: 34,
                          resizeMode: 'contain',
                          marginVertical: 10,
                        }}
                      />
                    </TouchableWithoutFeedback>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      setSettingModal(true);
                      setGroupId(item.id);
                      setFavouriteStatus(item.group_favourite_status);
                      setFlagStatus(item.group_report_status);
                      setBoosted_mute_id(item.boosted_mute_id);
                      setBoosted_mute_status(item.boosted_mute_status);
                    }}>
                    <Image
                      source={require('../../Assets/Images/setting.png')}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        marginVertical: 10,
                        right: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={() => openLink(item.group_link)}>
                <LinearGradient
                  colors={
                    item.group_type == 'line'
                      ? ['#08C719', '#adebad']
                      : item.group_type == 'snapchat'
                      ? ['#FFFC00', '#ffffb3']
                      : item.group_type == 'whatsapp'
                      ? ['#08C719', '#9dfba5']
                      : item.group_type == 'telegram'
                      ? ['#058acd', '#9cdcfc']
                      : item.group_type == 'viber'
                      ? ['#665CAC', '#c0bbdd']
                      : ['#7289DA', '#c3ccef']
                  }
                  style={styles.button}>
                  <Text
                    style={{
                      color: item.group_type == 'snapchat' ? '#205072' : '#fff',
                      fontFamily: FontStyle.MontBold,
                      fontSize: 19,
                    }}>
                    Beitreten
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  child: {
    height: height * 0.98,
    backgroundColor: 'gray',
  },

  button: {
    backgroundColor: '#25D366',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    width: 224,
    height: 45,
    bottom: height * 0.12,
  },
  verticalIcons: {
    position: 'absolute',
    right: 10,
    bottom: 150,
    alignItems: 'center',
  },
  hashtagContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  category: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontStyle.MontBold,
  },
  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 30,
    fontSize: 12,
  },
  groupName: {
    fontSize: 25,
    color: '#205072',
    fontFamily: FontStyle.MontBold,
    marginTop: 25,
    marginLeft: 25,
  },
  subContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    // backgroundColor: 'green',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },
});

export default Interface;
