import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import SwitchToggle from 'react-native-switch-toggle';
import {useDispatch, useSelector} from 'react-redux';
import {getNotification} from '../../../Slice/NotificationReducer';
const NotificationOwnGroup = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getNotification());
  }, []);

  const {loading, notificationData, error} = useSelector(state => {
    return state.NotificationReducer;
  });

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
        <Text style={Styles.headingText}>Eigene Gruppen</Text>
        <View />
      </View>
      <View style={styles.container}>
        <View style={{width: '80%'}}>
          <Text style={styles.titelText}>Reupload</Text>
          <Text style={styles.descriptionText}>
            Ich möchte eine Benachrichtigung erhalten, wenn ich eine Gruppe
            reuploaden kann.
          </Text>
        </View>
        <SwitchToggle
          switchOn={notificationData.is_own_group_reupload_notification}
          // onPress={() => setUploadSwitch(!uploadSwitch)}
          circleColorOff="#fff"
          circleColorOn="#fff"
          backgroundColorOff="#BECCD6"
          backgroundColorOn="#205072"
          containerStyle={styles.switchContainer}
          circleStyle={styles.switchCircle}
        />
      </View>
      <View style={styles.container}>
        <View style={{width: '80%'}}>
          <Text style={styles.titelText}>Boost</Text>
          <Text style={styles.descriptionText}>
            Ich möchte benachrichtigt werden, wenn eine Gruppe einen Booster
            erhalten hat.
          </Text>
        </View>
        <SwitchToggle
          switchOn={notificationData.is_own_group_boost_notification}
          // onPress={() => setBoostSwitch(!boostSwitch)}
          circleColorOff="#fff"
          circleColorOn="#fff"
          backgroundColorOff="#BECCD6"
          backgroundColorOn="#205072"
          containerStyle={styles.switchContainer}
          circleStyle={styles.switchCircle}
        />
        {/* <Switch
          color="#205072"
          value={boostSwitch}
          onValueChange={() => setBoostSwitch(!boostSwitch)}
          style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
        /> */}
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

export default NotificationOwnGroup;
