import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import SwitchToggle from 'react-native-switch-toggle';
import {useDispatch, useSelector} from 'react-redux';
import {
  boostNotificationList,
  getNotification,
  removeBoostNotificationList,
  updateNotification,
} from '../../../Slice/NotificationReducer';

const NotificationGroupBooster = () => {
  const dispatch = useDispatch();
  const [groupArray] = useState([
    {
      groupName: 'Nordsee Gruppe',
      groupType: 'whatsapp',
    },
    {
      groupName: 'Nordsee Gruppe',
      groupType: 'telegram',
    },
  ]);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getNotification());
    dispatch(boostNotificationList());
  }, []);

  const {loading, notificationData, error, boostListNotify} = useSelector(
    state => {
      return state.NotificationReducer;
    },
  );
  console.log(boostListNotify, 'notify');

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Gruppenbooster</Text>
        <View />
      </View>
      <View style={styles.container}>
        <View style={{width: '80%'}}>
          <Text style={styles.titelText}>Boost Benachrichtigung</Text>
          <Text style={styles.descriptionText}>
            Automatisch Benachrichtigungen aktivieren für die Verfügbarkeit
            eines Boosters, sobald du eine Gruppe einmal geboostet hast.
          </Text>
        </View>
        <SwitchToggle
          switchOn={
            notificationData.is_group_notification_activate_automatically
          }
          onPress={() =>
            dispatch(
              updateNotification({
                is_group_notification_activate_automatically:
                  !notificationData.is_group_notification_activate_automatically,
              }),
            )
          }
          circleColorOff="#fff"
          circleColorOn="#fff"
          backgroundColorOff="#BECCD6"
          backgroundColorOn="#205072"
          containerStyle={styles.switchContainer}
          circleStyle={styles.switchCircle}
        />
      </View>
      <View style={{height: 1, width: '100%', backgroundColor: '#C7C7C7'}} />
      <View
        style={{alignItems: 'center', width: '100%', paddingHorizontal: '5%'}}>
        <Text style={[styles.titelText, {fontSize: 24, color: '#205072'}]}>
          Gruppen
        </Text>
        <Text
          style={[styles.descriptionText, {width: '80%', textAlign: 'center'}]}>
          Hier findest du alle Gruppen für die du eine Benachrichtigung
          erhältst, sobald du sie wieder boosten kannst.
        </Text>
      </View>
      {boostListNotify.length < 1 ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../Assets/Images/hand.png')}
            style={{
              height: 160,
              width: 160,
              resizeMode: 'contain',
              marginVertical: '5%',
            }}
          />
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              color: '#205072',
              fontSize: 19,
              textAlign: 'center',
            }}>
            {`Welche Gruppe sollen wir\n hier zeigen, wenn du bei\n keiner die Benachrichtigung\n aktiviert hast?`}
          </Text>
        </View>
      ) : (
        <FlatList
          data={boostListNotify}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={[styles.shadowContainer]}>
                <View style={{flexDirection: 'row', width: '90%'}}>
                  <View
                    style={{
                      backgroundColor:
                        item.group_type == 'snapchat'
                          ? '#FFFC00'
                          : item.group_type == 'whatsapp'
                          ? 'lightgreen'
                          : item.group_type == 'line'
                          ? 'green'
                          : item.group_type == 'telegram'
                          ? '#0088CC'
                          : item.group_type == 'viber'
                          ? '#665CAC'
                          : item.group_type == 'discord'
                          ? '#7289DA'
                          : 'black',
                      height: 30,
                      width: 30,
                      top: -20,
                      borderTopLeftRadius: 7,
                      borderBottomRightRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {item.group_type == 'snapchat' ? (
                      <Image
                        source={require('../../Assets/Images/snapchatLine.png')}
                        style={styles.imageStyle}
                      />
                    ) : item.group_type == 'line' ? (
                      <Image
                        source={require('../../Assets/Images/lineLine.png')}
                        style={styles.imageStyle}
                      />
                    ) : item.group_type == 'telegram' ? (
                      <Image
                        source={require('../../Assets/Images/telegramLine.png')}
                        style={styles.imageStyle}
                      />
                    ) : item.group_type == 'whatsapp' ? (
                      <Image
                        source={require('../../Assets/Images/whatsappLine.png')}
                        style={styles.imageStyle}
                      />
                    ) : item.group_type == 'viber' ? (
                      <Image
                        source={require('../../Assets/Images/viberLine.png')}
                        style={styles.imageStyle}
                      />
                    ) : (
                      <Image
                        source={require('../../Assets/Images/discordLine.png')}
                        style={styles.imageStyle}
                      />
                    )}
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: FontStyle.MontExtBold,
                      color: '#205072',
                      paddingLeft: 20,
                    }}>
                    {item.title}
                  </Text>
                </View>
                <TouchableWithoutFeedback
                  onPress={() =>
                    dispatch(
                      removeBoostNotificationList({
                        groupId: item.id,
                        status: true,
                      }),
                    )
                  }>
                  <Image
                    source={require('../../Assets/Images/bell.png')}
                    style={{width: 24, height: 24, resizeMode: 'contain'}}
                  />
                </TouchableWithoutFeedback>
              </View>
            );
          }}
        />
      )}
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <Image
          source={require('../../Assets/Images/greyLogo.png')}
          style={{
            width: 94,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
            bottom: 30,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titelText: {
    fontSize: 20,
    fontFamily: FontStyle.MontSemiBold,
    color: '#FFA420',
  },
  descriptionText: {
    fontFamily: FontStyle.MontSemiBold,
    fontSize: 12,
    color: '#C7C7C7',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: '2.5%',
  },
  shadowContainer: {
    width: '90%',
    borderRadius: 7,

    paddingVertical: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
    paddingRight: '2.5%',
    marginVertical: '2.5%',
  },
  imageStyle: {
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
    left: 3,
  },
  switchContainer: {
    width: 29,
    height: 13,
    borderRadius: 5,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.65,
    elevation: 2,
  },
});

export default NotificationGroupBooster;
