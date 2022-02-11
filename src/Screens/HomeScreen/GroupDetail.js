import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Animated,
  Linking,
  Platform,
} from 'react-native';
import Header from '../../Common/Header';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import LinearGradient from 'react-native-linear-gradient';
import SmallCard from '../../Common/SmallCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  getGroupDetail,
  updateGroupBoostNotification,
  updateNotifyId,
  updateOtherUserFavStatus,
} from '../../../Slice/GroupDetailReducer';
import ReportModal from './ReportModal';
import {reportGroup, resetReport} from '../../../Slice/ReportGroupReducer';
import SuccessModal from './SuccessModal';
import {
  favouriteGroup,
  resetFavStatus,
} from '../../../Slice/FavouriteGroupReducer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {resetFavouriteValue} from '../../../Slice/FavouriteUserReducer';
import Share from 'react-native-share';
import {
  getSimilarGroupList,
  updateUserFavStatusInlist,
} from '../../../Slice/AllGroupListReducer';
import MainLoader from '../../Common/MainLoader';
import {updateGroup} from '../../../Slice/UserGroupReducer';
import BoosterModal from '../../Common/BoosterModal';
import {boostGroup, resetBoostValue} from '../../../Slice/RandomeReducer';
import {removeBoostNotificationList} from '../../../Slice/NotificationReducer';

const GroupDetail = ({route}) => {
  const {groupId} = route.params;

  const dispatch = useDispatch();
  const [bouncy, setBouncy] = useState(new Animated.Value(0));
  const [oneBoost, setOneBoost] = useState(new Animated.Value(0));
  const [fiveBoost, setFiveBoost] = useState(new Animated.Value(0));
  const [oneXValue, setOneXValue] = useState(false);
  const [fiveXValue, setFiveXValue] = useState(false);
  const [boosterModalValue, setBoosterModalValue] = useState(false);
  const [messengerUrl, setMessengerUrl] = useState('');
  const [SuccessModalValue, setSuccessModalValue] = useState(false);
  const [reportModal, setReportModal] = useState(false);
  const [flagValue, setFlagValue] = useState(false);
  const navigation = useNavigation();

  const {groupDetail, error, loading} = useSelector(state => {
    return state.GroupDetailReducer;
  });

  const url = 'digimonk.net://';
  const title = 'Everygroup';
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

  useEffect(() => {
    dispatch(resetBoostValue());
    if (groupDetail.group_type == 'snapchat') {
      setMessengerUrl(require('../../Assets/Images/snapchatLine.png'));
    } else if (groupDetail.group_type == 'line') {
      setMessengerUrl(require('../../Assets/Images/lineLine.png'));
    } else if (groupDetail.group_type == 'whatsapp') {
      setMessengerUrl(require('../../Assets/Images/whatsappLine.png'));
    } else if (groupDetail.group_type == 'telegram') {
      setMessengerUrl(require('../../Assets/Images/telegramLine.png'));
    } else {
      setMessengerUrl();
    }

    dispatch(resetFavouriteValue());
    dispatch(getGroupDetail(groupId));
  }, []);

  const submitReport = useCallback(value => {
    setReportModal(false);
    setTimeout(() => {
      dispatch(reportGroup({value, groupId}));
    }, 500);
  }, []);

  const {status, flagError, flagLoading} = useSelector(state => {
    return state.ReportGroupReducer;
  });

  useEffect(() => {
    if (status == 'success') {
      setSuccessModalValue(true);

      setTimeout(() => {
        setSuccessModalValue(false);
        setTimeout(() => {
          triggerBouncy();
          dispatch(resetReport());
        }, 500);
      }, 2000);
    }
  }, [status]);

  const triggerBouncy = () => {
    setFlagValue(true);
    Animated.spring(bouncy, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      bouncy.setValue(0);
    });
  };

  const bouncyView = bouncy.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.8, 1],
  });

  const {value, favouriteError} = useSelector(state => {
    return state.FavouriteGroupReducer;
  });
  const updateFavouriteGroup = () => {
    dispatch(favouriteGroup(groupId));
  };
  useEffect(() => {
    dispatch(getSimilarGroupList(groupDetail.categories));

    if (value == 'success') {
      dispatch(updateOtherUserFavStatus(true));
      dispatch(updateUserFavStatusInlist({groupId: groupId, data: true}));

      setTimeout(() => {
        dispatch(resetFavStatus());
      }, 500);
    }
  }, [value]);

  const {similarGroupList} = useSelector(state => {
    return state.AllGroupListReducer;
  });

  const boostGroupValue = (oneX, fiveX) => {
    dispatch(boostGroup({oneX, fiveX, groupId}));
  };

  const {
    boostError,
    boostLoading,
    oneXStatus,
    fiveXStatus,
    boostNotifyId,
    boostNotifyStatus,
  } = useSelector(state => {
    return state.RandomeReducer;
  });

  useEffect(() => {
    dispatch(
      updateNotifyId({
        notifyId: boostNotifyId,
        notifyStatus: boostNotifyStatus,
      }),
    );
  }, [boostNotifyId]);

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

  useEffect(() => {
    if (oneXStatus > 0) {
      oneXBouncyfunc();
    }
  }, [oneXStatus]);

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

  const openLink = link => {
    Linking.openURL(link);
  };
  console.log(groupDetail, 'group');
  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? '21%' : '13%',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <Header />

      <SuccessModal modalValue={SuccessModalValue} />
      <ReportModal
        modalValue={reportModal}
        closeModal={() => setReportModal(false)}
        parentCallBack={submitReport}
      />
      <BoosterModal
        modalValue={boosterModalValue}
        closeModal={() => setBoosterModalValue(false)}
      />

      {loading ? (
        <MainLoader heightValue={1.1} />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <LinearGradient
            colors={
              groupDetail.group_type == 'line'
                ? ['#08C719', '#adebad']
                : groupDetail.group_type == 'snapchat'
                ? ['#FFFC00', '#ffffb3']
                : groupDetail.group_type == 'whatsapp'
                ? ['#08C719', '#9dfba5']
                : groupDetail.group_type == 'telegram'
                ? ['#058acd', '#9cdcfc']
                : groupDetail.group_type == 'viber'
                ? ['#665CAC', '#F6FEF9']
                : ['#7289DA', '#F6FEF9']
            }
            style={styles.titelContainer}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: '2.5%',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../Assets/Images/back.png')}
                  style={{width: 23, height: 23, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: FontStyle.MontBold,
                  color: '#205072',
                }}>
                {groupDetail.title}
              </Text>
              <Image
                source={
                  groupDetail.group_type == 'whatsapp'
                    ? require('../../Assets/Images/whatsappLine.png')
                    : groupDetail.group_type == 'snapchat'
                    ? require('../../Assets/Images/snapchatLine.png')
                    : groupDetail.group_type == 'viber'
                    ? require('../../Assets/Images/viberLine.png')
                    : groupDetail.group_type == 'discord'
                    ? require('../../Assets/Images/discordLine.png')
                    : groupDetail.group_type == 'telegram'
                    ? require('../../Assets/Images/telegramLine.png')
                    : require('../../Assets/Images/lineLine.png')
                }
                style={{height: 44, width: 44, bottom: 30}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                top: 30,
                right: 10,
                alignItems: 'center',
              }}>
              {groupDetail.categories ? (
                groupDetail.categories.some(el => el.slug == '18') ? (
                  <>
                    <Text style={[styles.textStyle, {color: '#FF0000'}]}>
                      18+{' '}
                    </Text>
                    <View
                      style={{
                        width: 1,
                        height: 15,
                        marginLeft: 5,
                        backgroundColor: '#205072',
                      }}
                    />
                  </>
                ) : null
              ) : null}
              {groupDetail.trend_status ? (
                <>
                  <Text style={styles.textStyle}> Trends </Text>

                  <Image
                    source={require('../../Assets/Images/starBlue.png')}
                    style={styles.imageStyle}
                  />
                  <View
                    style={{
                      width: 1,
                      height: 15,
                      marginLeft: 5,
                      backgroundColor: '#205072',
                    }}
                  />
                </>
              ) : null}
              {groupDetail.instagram_badge_status ? (
                <>
                  <Text style={styles.textStyle}> Instagram </Text>
                  <Image
                    source={require('../../Assets/Images/instaBlue.png')}
                    style={styles.imageStyle}
                  />
                  <View
                    style={{
                      width: 1,
                      height: 15,
                      marginLeft: 5,
                      backgroundColor: '#205072',
                    }}
                  />
                </>
              ) : null}
              {groupDetail.creator_badge_status ? (
                <>
                  <Text style={styles.textStyle}> Creator</Text>
                  <Image
                    source={require('../../Assets/Images/starMenBlue.png')}
                    style={styles.imageStyle}
                  />
                </>
              ) : null}
            </View>
          </LinearGradient>
          <View style={{paddingHorizontal: '1.5%'}}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: '2.5%',
              }}>
              <FlatList
                data={groupDetail.categories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                listKey={(item, index) => index.toString()}
                renderItem={({item: category}) => {
                  return (
                    <View style={styles.categoryContainer}>
                      <Text
                        style={[
                          styles.textStyle,
                          {fontFamily: FontStyle.MontBold, color: '#fff'},
                        ]}>
                        {category.category}
                      </Text>
                    </View>
                  );
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('OtherUserScreen', {
                    otherUserId: groupDetail.user,
                    otherUserName: groupDetail.owner_name,
                    userStatus: groupDetail.is_group_owner_favourite,
                  })
                }>
                <LinearGradient
                  colors={['#FFA420', '#FE7027']}
                  style={[styles.linearGradient]}>
                  <Text style={styles.buttonText}>
                    {groupDetail.owner_name}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: '2.5%'}}>
              {groupDetail.languages ? (
                <Text style={[styles.textStyle, {fontSize: 13}]}>
                  {groupDetail.languages.map(el => (
                    <Text key={el.code}>{el.language},</Text>
                  ))}
                </Text>
              ) : null}
              <FlatList
                data={groupDetail.tags}
                horizontal={true}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                listKey={(item, index) => index.toString()}
                renderItem={({item: tags}) => {
                  return (
                    <View style={{width: 36, height: 20}}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: FontStyle.MontMedium,
                          color: '#FFA420',
                        }}>
                        {tags}
                      </Text>
                    </View>
                  );
                }}
              />
              <Text
                style={{
                  fontFamily: FontStyle.MontSemiBold,
                  fontSize: 15,
                  color: '#205072',
                  marginVertical: '7%',
                }}>
                {groupDetail.description}
              </Text>
              <TouchableOpacity
                onPress={() => openLink(groupDetail.group_link)}
                style={{
                  backgroundColor:
                    groupDetail.group_type == 'snapchat'
                      ? '#FFFC00'
                      : groupDetail.group_type == 'whatsapp'
                      ? 'lightgreen'
                      : groupDetail.group_type == 'line'
                      ? 'green'
                      : groupDetail.group_type == 'telegram'
                      ? '#0088CC'
                      : groupDetail.group_type == 'discord'
                      ? '#7289DA'
                      : groupDetail.group_type == 'viber'
                      ? '#665CAC'
                      : 'black',
                  width: '90%',
                  height: 29,
                  alignSelf: 'center',
                  borderRadius: 15,
                  marginVertical: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: FontStyle.MontBold,
                    color: '#205072',
                  }}>
                  BEITRETEN
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: '10%',
                  justifyContent: 'space-between',
                  width: '80%',
                  alignSelf: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  {groupDetail.group_report_status || flagValue ? (
                    <Animated.View style={{transform: [{scale: bouncyView}]}}>
                      <Image
                        source={require('../../Assets/Images/flagRed.png')}
                        style={styles.imageStyleSecond}
                      />
                    </Animated.View>
                  ) : (
                    <TouchableWithoutFeedback
                      onPress={() => setReportModal(true)}>
                      <Image
                        source={require('../../Assets/Images/flagBlue.png')}
                        style={styles.imageStyleSecond}
                      />
                    </TouchableWithoutFeedback>
                  )}

                  <Text style={styles.textStyle}>Melden</Text>
                </View>

                <View style={styles.verticalLine} />
                <TouchableWithoutFeedback onPress={() => openShare()}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={require('../../Assets/Images/shareBlue.png')}
                      style={styles.imageStyleSecond}
                    />
                    <Text style={styles.textStyle}>Teilen</Text>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.verticalLine} />
                <TouchableWithoutFeedback
                  onPress={() => updateFavouriteGroup()}>
                  <View style={{alignItems: 'center'}}>
                    <Icon
                      name="bookmark"
                      // color="#FFA420"
                      color={
                        groupDetail.group_favourite_status
                          ? '#FFA420'
                          : '#B9B9B9'
                      }
                      size={22}
                      solid={groupDetail.group_favourite_status ? true : false}
                    />
                    <Text style={styles.textStyle}>Favorit</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View
                style={{
                  width: '90%',
                  height: 122,
                  backgroundColor: '#FFE4BC',
                  alignSelf: 'center',
                  borderRadius: 13,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: '5%',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingHorizontal: '2.5%',
                  }}>
                  <View />
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => setBoosterModalValue(true)}>
                      <Image
                        source={require('../../Assets/Images/infoBlue.png')}
                        style={{width: 11, height: 11, right: 5}}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 23,
                        fontFamily: FontStyle.MontBold,
                        color: '#205072',
                      }}>
                      Booster
                    </Text>
                  </View>
                  {!groupDetail.boosted_mute_id ? (
                    <Image
                      source={require('../../Assets/Images/disableBell.png')}
                      style={{height: 24, width: 24, resizeMode: 'contain'}}
                    />
                  ) : groupDetail.boosted_mute_status ? (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(
                          removeBoostNotificationList({
                            itemId: groupDetail.boosted_mute_id,
                            status: false,
                          }),
                        ),
                          dispatch(
                            updateGroupBoostNotification({status: false}),
                          );
                      }}>
                      <Image
                        source={require('../../Assets/Images/bell.png')}
                        style={{height: 24, width: 24}}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(
                          removeBoostNotificationList({
                            itemId: groupDetail.boosted_mute_id,
                            status: true,
                          }),
                        ),
                          dispatch(
                            updateGroupBoostNotification({status: true}),
                          );
                      }}>
                      <Image
                        source={require('../../Assets/Images/closebell.png')}
                        style={{height: 24, width: 24}}
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%',
                  }}>
                  <View style={{alignItems: 'center'}}>
                    {!groupDetail.booster_points_1x_status || oneXValue ? (
                      <Animated.View
                        style={{transform: [{scale: oneXBouncyView}]}}>
                        <Image
                          source={require('../../Assets/Images/arrowYellow.png')}
                          style={{width: 22, height: 26, resizeMode: 'contain'}}
                        />
                      </Animated.View>
                    ) : (
                      <TouchableWithoutFeedback
                        onPress={() => boostGroupValue(1, 0)}>
                        <Image
                          source={require('../../Assets/Images/arrowBlank.png')}
                          style={{width: 22, height: 26, resizeMode: 'contain'}}
                        />
                      </TouchableWithoutFeedback>
                    )}

                    <Text
                      style={{
                        fontFamily: FontStyle.MontBold,
                        color: '#205072',
                        fontSize: 13,
                      }}>
                      1x Boost
                    </Text>
                  </View>

                  <View style={{alignItems: 'center'}}>
                    {!groupDetail.booster_points_5x_status || fiveXValue ? (
                      <Animated.View
                        style={{transform: [{scale: fiveXBouncyView}]}}>
                        <Image
                          source={require('../../Assets/Images/arrowOrangeBooster.png')}
                          style={{width: 22, height: 26, resizeMode: 'contain'}}
                        />
                      </Animated.View>
                    ) : (
                      <TouchableWithoutFeedback
                        onPress={() => boostGroupValue(0, 5)}>
                        <Image
                          source={require('../../Assets/Images/booster5.png')}
                          style={{width: 22, height: 26, resizeMode: 'contain'}}
                        />
                      </TouchableWithoutFeedback>
                    )}

                    <Text
                      style={{
                        fontFamily: FontStyle.MontBold,
                        color: '#205072',
                        fontSize: 13,
                      }}>
                      5x Boost
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FontStyle.MontBold,
              color: '#205072',
              alignSelf: 'center',
              marginTop: 140,
              marginBottom: 20,
            }}>
            Die Gruppen könnten dir auch gefallen
          </Text>
          <FlatList
            data={similarGroupList}
            contentContainerStyle={{marginVertical: '2.5%'}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            // onEndReached={handleLoadMore}
            listKey={(item, index) => index.toString()}
            onEndThreshold={0}
            renderItem={({item}) => {
              return (
                <SmallCard
                  group={item}
                  mehrSehen={() => dispatch(getGroupDetail(item.id))}
                />
              );
            }}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titelContainer: {
    backgroundColor: '#FFFC00',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  textStyle: {
    fontFamily: FontStyle.MontBold,
    fontSize: 10,
    color: '#205072',
  },
  imageStyle: {
    height: 10,
    width: 10,
  },
  categoryContainer: {
    minWidth: 50,
    maxWidth: 'auto',
    height: 18,
    backgroundColor: '#205072',
    marginHorizontal: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearGradient: {
    borderRadius: 5,
    minWidth: 60,
    minHeight: 19,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: FontStyle.MontBold,
    textAlign: 'center',
    color: '#ffffff',
  },
  verticalLine: {
    height: 31,
    backgroundColor: '#205072',
    width: 1,
  },
  imageStyleSecond: {
    height: 24,
    width: 19,
    resizeMode: 'contain',
  },
});

export default GroupDetail;
