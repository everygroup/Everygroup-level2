import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  boostNotificationStatus,
  boostOwnGroup,
  deleteGroup,
  getUserGroup,
  muteStatus,
  resetBoostValue,
  resetVisible,
  reuploadGroup,
  updateGroup,
} from '../../Slice/UserGroupReducer';
import InfoModal from './InfoModal';
import DeleteModal from '../Screens/UserScreens/deleteModal';
import ProgressCircle from 'react-native-progress-circle';
import moment from 'moment';
import {getAllGroup} from '../../Slice/AllGroupListReducer';
import {removeBoostNotificationList} from '../../Slice/NotificationReducer';

const GroupCard = ({
  group,
  boosterValue,
  onPress,
  selectedGroupName,
  eyePress,
  bellPress,
  eyeValue,
  bellValue,
  infoPress,
  favourite,
  removeFavourite,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [percentageValue, setPercentageValue] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalValue, setModalValue] = useState(false);
  const [time, setTime] = useState(0);
  const [readMoreId, setReadMoreId] = useState('');

  const visibleUnvisible = () => {
    if (group.visible_status == true) {
      setModalValue(true);
    }
    dispatch(updateGroup({groupId: group.id, visible: group.visible_status}));
  };

  useEffect(() => {
    Value();
  }, []);

  const openLink = link => {
    if (group.is_link_expire) {
      dispatch(deleteGroup(group.id));
    } else {
      Linking.openURL(link);
    }
  };

  const Value = () => {
    setPercentageValue(
      (group.remaining_points_from_x_times_of_boost_points * 100) / 120,
    );
  };

  const {boostSuccess, visibleSuccess} = useSelector(state => {
    return state.UserGroupReducer;
  });

  useEffect(() => {
    if (boostSuccess == 'success') {
      dispatch(getAllGroup());
      dispatch(resetBoostValue());
    }
  }, [boostSuccess]);

  useEffect(() => {
    if (visibleSuccess == 'success') {
      dispatch(getAllGroup());
      dispatch(resetVisible());
    }
  }, [visibleSuccess]);

  const readMore = groupId => {
    if (groupId == readMoreId) {
      setReadMoreId('');
    } else {
      setReadMoreId(groupId);
    }
  };

  return (
    <View>
      <InfoModal
        modalValue={modalValue}
        closeModal={() => setModalValue(false)}
        titel="Unsichtbar"
        message={
          'Deine Gruppe ist jetzt nicht mehr sichtbar für andere Nutzer. Ebenfalls wird sie nicht mehr in den Favoriten von anderen gezeigt, die deine Gruppe als Favorit markiert haben.'
        }
      />
      <DeleteModal
        modalValue={deleteModal}
        deletePress={() => dispatch(deleteGroup(group.id))}
        message={'Gruppe wirklich löschen?'}
        deleteImage={true}
        buttonLeftColor={'#205072'}
        buttonRightColor={'#EF3E36'}
        closeModal={() => setDeleteModal(false)}
      />

      <View style={{position: 'relative', zIndex: 99999}}>
        <View style={[styles.containerStyle, {borderBottomRightRadius: 0}]}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: group.is_link_expire
                  ? '#C3C5C7'
                  : group.group_type == 'snapchat'
                  ? '#FFFC00'
                  : group.group_type == 'whatsapp'
                  ? 'lightgreen'
                  : group.group_type == 'line'
                  ? 'green'
                  : group.group_type == 'telegram'
                  ? '#0088CC'
                  : group.group_type == 'viber'
                  ? '#665CAC'
                  : '#7289DA',
                zIndex: 99999,
                height: 30,
                width: 30,
                borderTopLeftRadius: 7,
                borderBottomRightRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {group.group_type == 'snapchat' ? (
                <Image
                  source={require('../Assets/Images/snapchatLine.png')}
                  style={styles.imageStyle}
                />
              ) : group.group_type == 'line' ? (
                <Image
                  source={require('../Assets/Images/lineLine.png')}
                  style={styles.imageStyle}
                />
              ) : group.group_type == 'telegram' ? (
                <Image
                  source={require('../Assets/Images/telegramLine.png')}
                  style={styles.imageStyle}
                />
              ) : group.group_type == 'whatsapp' ? (
                <Image
                  source={require('../Assets/Images/whatsappLine.png')}
                  style={styles.imageStyle}
                />
              ) : group.group_type == 'viber' ? (
                <Image
                  source={require('../Assets/Images/viber.png')}
                  style={styles.imageStyle}
                />
              ) : (
                <Image
                  source={require('../Assets/Images/discord.png')}
                  style={styles.imageStyle}
                />
              )}
            </View>
            {group.categories.some(el => el.slug == '18') ? (
              <View
                style={[
                  styles.badgeContainer,
                  {
                    left: -5,
                    zIndex: 9999,
                    backgroundColor: '#FF0000',
                    width: 43,
                  },
                ]}>
                <Text style={[styles.badgeText, {fontSize: 10}]}>18</Text>
                <Text style={[styles.badgeText, {fontSize: 12}]}>+</Text>
              </View>
            ) : null}
            {group.trend_status ? (
              <View style={[styles.badgeContainer, {left: -8, zIndex: 999}]}>
                <Text style={styles.badgeText}>Trends</Text>
                <Image
                  source={require('../Assets/Images/starFill.png')}
                  style={styles.badgeImage}
                />
              </View>
            ) : null}
            {group.instagram_badge_status ? (
              <View
                style={[
                  styles.badgeContainer,
                  {
                    backgroundColor: '#C13584',
                    width: 86,
                    left: -10,
                    zIndex: 99,
                  },
                ]}>
                <Text style={styles.badgeText}>Instagram</Text>
                <Image
                  source={require('../Assets/Images/instagramWhiteIcon.png')}
                  style={styles.badgeImage}
                />
              </View>
            ) : null}
            {group.categories.some(el => el.slug == 'creator') ? (
              <View
                style={[
                  styles.badgeContainer,
                  {backgroundColor: '#0600AF', width: 86, left: -15, zIndex: 9},
                ]}>
                <Text style={styles.badgeText}>Creator</Text>
                <Image
                  source={require('../Assets/Images/creatorWhiteIcon.png')}
                  style={styles.badgeImage}
                />
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('GroupDetail', {groupId: group.id})
            }>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginVertical: 5,
                  color: group.is_link_expire ? '#C4C6C8' : '#205072',
                  fontFamily: FontStyle.MontExtBold,
                }}>
                {group.title}
              </Text>
              {!group.is_link_expire ? (
                <TouchableWithoutFeedback onPress={removeFavourite}>
                  <Icon
                    name="bookmark"
                    color={
                      group.group_favourite_status || favourite
                        ? '#FFA420'
                        : '#B9B9B9'
                    }
                    size={22}
                    solid={
                      group.group_favourite_status || favourite ? true : false
                    }
                  />
                </TouchableWithoutFeedback>
              ) : null}
            </View>

            {!group.is_link_expire ? (
              <FlatList
                horizontal={true}
                contentContainerStyle={{
                  height: 22,
                  width: '90%',
                  paddingHorizontal: '5%',
                }}
                data={group.categories}
                renderItem={({item}) => {
                  return (
                    <View
                      key={item.slug}
                      style={{
                        backgroundColor: '#205072',
                        marginHorizontal: 5,
                        height: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 80,
                        maxWidth: 'auto',
                        borderRadius: 5,
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 11,
                          fontFamily: FontStyle.MontBold,
                        }}>
                        {item.category}
                      </Text>
                    </View>
                  );
                }}
              />
            ) : null}

            {!group.is_link_expire ? (
              <FlatList
                horizontal={true}
                contentContainerStyle={{
                  width: '95%',
                  height: 22,
                  minHeight: 20,
                  maxHeight: 40,
                  paddingHorizontal: '8%',
                }}
                data={group.tags}
                renderItem={({item}) => {
                  return (
                    <View key={item} style={{minWidth: 38, maxWidth: 'auto'}}>
                      <Text
                        style={{
                          color: '#FFA420',
                          fontSize: 13,
                          fontFamily: FontStyle.MontMedium,
                        }}>
                        {item}
                      </Text>
                    </View>
                  );
                }}
              />
            ) : null}
            <Text
              ellipsizeMode={'tail'}
              numberOfLines={readMoreId !== group.id ? 5 : 12}
              style={{
                fontFamily: FontStyle.MontSemiBold,
                fontSize: group.is_link_expire ? 18 : 15,
                color: '#205072',
                paddingHorizontal: '8%',
                textAlign: 'left',
              }}>
              {group.is_link_expire
                ? 'Der Link dieser Gruppe ist nicht mehr gültig.'
                : group.description}
            </Text>
          </TouchableOpacity>
          {group.description.length > 160 ? (
            <View
              style={{
                height: 20,
                backgroundColor: '#fff',
                opacity: 0.6,
                marginTop: readMoreId === group.id ? 0 : -20,
              }}
            />
          ) : null}
          {group.description.length > 150 ? (
            <TouchableWithoutFeedback onPress={() => readMore(group.id)}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Icon
                  name={readMoreId !== group.id ? 'chevron-down' : 'chevron-up'}
                  size={30}
                  color="#205072"
                />
              </View>
            </TouchableWithoutFeedback>
          ) : null}
          <TouchableOpacity
            onPress={() => openLink(group.group_link)}
            style={{
              backgroundColor: group.is_link_expire
                ? '#EF3E36'
                : group.group_type == 'snapchat'
                ? '#FFFC00'
                : group.group_type == 'whatsapp'
                ? 'lightgreen'
                : group.group_type == 'line'
                ? 'green'
                : group.group_type == 'telegram'
                ? '#0088CC'
                : group.group_type == 'viber'
                ? '#665CAC'
                : group.group_type == 'discord'
                ? '#7289DA'
                : 'black',

              width: group.is_link_expire ? '30%' : '90%',
              height: 34,
              alignSelf: 'center',
              borderRadius: group.is_link_expire ? 5 : 15,
              marginVertical: 15,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: group.group_type == 'snapchat' ? '#205072' : '#fff',
                fontFamily: FontStyle.MontBold,
                fontSize: 16,
              }}>
              {group.is_link_expire ? 'Ok' : 'BEITRETEN'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative'}}>
          <View
            style={{
              alignSelf: 'flex-end',
              marginHorizontal: '5%',
              height: 22,
              top: -24,
              shadowColor: 'grey',
              backgroundColor: '#fff',
              width: 62,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,

              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.27,
              shadowRadius: 2.65,
              elevation: 2,
              position: 'absolute',
              right: 0,
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 9,
                color: group.is_link_expire ? '#C4C6C8' : '#205072',
              }}>
              {group.languages ? group.languages[0].language : null}
            </Text>
          </View>
        </View>
      </View>
      {boosterValue ? (
        <View
          style={[
            styles.boostContainerStyle,

            {height: group.id == selectedGroupName ? 270 : 50},
          ]}>
          {selectedGroupName == group.id ? (
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                  marginTop: 10,
                }}>
                <View>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      group.remaining_booster_time == null &&
                      group.reupload_points > 0
                        ? dispatch(reuploadGroup(group.id))
                        : null
                    }>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name={'redo-alt'}
                        size={21}
                        color={
                          group.remaining_booster_duration != null
                            ? '#FFBC20'
                            : group.reupload_points
                            ? '#205072'
                            : '#C4C6C8'
                        }
                      />
                      <Text
                        style={{
                          fontFamily: FontStyle.MontExtBold,
                          fontSize: 13,
                          color: '#205072',
                          bottom: 8,
                          left: 2,
                        }}>
                        {group.remaining_booster_time &&
                        group.remaining_booster_time != '0:0'
                          ? group.remaining_booster_time
                          : group.reupload_points > 0
                          ? `${group.reupload_points}X`
                          : null}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <Text
                    style={{
                      fontFamily: FontStyle.MontExtBold,
                      fontSize: 13,
                      color: '#FFBC20',
                    }}>
                    {group.remaining_booster_duration}
                  </Text>
                </View>
                <TouchableWithoutFeedback onPress={() => visibleUnvisible()}>
                  {group.visible_status ? (
                    <Image
                      source={require('../Assets/Images/openEye.png')}
                      style={styles.iconStyle}
                    />
                  ) : (
                    <Image
                      source={require('../Assets/Images/closeEye.png')}
                      style={styles.iconStyle}
                    />
                  )}
                </TouchableWithoutFeedback>

                <Icon
                  name={'pencil-alt'}
                  size={21}
                  color="#205072"
                  onPress={() =>
                    navigation.navigate('EditGroup', {groupId: group.id})
                  }
                />

                <TouchableWithoutFeedback
                  onPress={() =>
                    dispatch(
                      boostNotificationStatus({
                        groupId: group.id,
                        status: !group.mute_status,
                      }),
                    )
                  }>
                  {group.mute_status ? (
                    <Image
                      source={require('../Assets/Images/closebell.png')}
                      style={{height: 24, width: 24}}
                    />
                  ) : (
                    <Image
                      source={require('../Assets/Images/bell.png')}
                      style={{height: 24, width: 24}}
                    />
                  )}
                </TouchableWithoutFeedback>
                <Icon
                  name={'trash'}
                  size={21}
                  color="#205072"
                  onPress={() => setDeleteModal(true)}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 15,
                }}>
                <TouchableOpacity onPress={infoPress}>
                  <Image
                    source={require('../Assets/Images/infoBlue.png')}
                    style={{
                      height: 15,
                      width: 15,
                    }}
                  />
                </TouchableOpacity>
                <ProgressCircle
                  percent={percentageValue}
                  radius={50}
                  borderWidth={8}
                  color="#FFBC20"
                  shadowColor="#cbcbcb"
                  bgColor="#fff">
                  {group.x_times_of_boost_points < 1 ? (
                    <Image
                      source={require('../Assets/Images/arrowGrey.png')}
                      style={{height: 24, width: 24, resizeMode: 'contain'}}
                    />
                  ) : (
                    <Image
                      source={require('../Assets/Images/arrowOrange.png')}
                      style={{height: 24, width: 24, resizeMode: 'contain'}}
                    />
                  )}
                  <Text
                    style={{
                      fontFamily: FontStyle.MontExtBold,
                      fontSize: 13,
                      color:
                        group.x_times_of_boost_points > 0
                          ? '#FFBC20'
                          : '#CBCBCB',
                      marginTop: 5,
                    }}>
                    {group.x_times_of_boost_points
                      ? group.x_times_of_boost_points
                      : 0}
                    X
                  </Text>
                </ProgressCircle>
              </View>
              {group.x_times_of_boost_points < 1 ||
              group.remaining_booster_time != '' ? (
                <Button
                  width={110}
                  buttonText="Booster"
                  buttonColor1={'#CBCBCB'}
                  buttonColor2={'#CBCBCB'}
                />
              ) : (
                <Button
                  width={110}
                  buttonText="Booster"
                  onPress={() => dispatch(boostOwnGroup(group.id))}
                />
              )}
            </View>
          ) : null}
          <Icon
            name={selectedGroupName == group.id ? 'chevron-up' : 'chevron-down'}
            size={30}
            color="#205072"
            onPress={onPress}
            style={[selectedGroupName ? {marginTop: 0} : {marginTop: -5}]}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 170,
    maxHeight: 'auto',

    width: '90%',
    backgroundColor: '#fff',
    marginVertical: '5%',
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,

    elevation: 2,
  },
  boostContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingTop: '5%',
    backgroundColor: '#fff',
    marginTop: -18,
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 3,
    shadowRadius: 6,
    elevation: 2,
  },
  imageStyle: {
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
    left: 3,
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  badgeImage: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    left: 2,
  },
  badgeText: {
    fontFamily: FontStyle.MontExtBold,
    fontSize: 9,
    color: '#fff',
  },
  badgeContainer: {
    backgroundColor: '#FBD30D',
    height: 30,
    width: 63,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default GroupCard;
