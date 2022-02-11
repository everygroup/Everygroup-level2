import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';

import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {favouriteGroup} from '../../Slice/FavouriteGroupReducer';
import {useSelector} from 'react-redux';
import ReportModal from '../Screens/HomeScreen/ReportModal';

import SuccessModal from '../Screens/HomeScreen/SuccessModal';
import {
  reportGroupRandomeList,
  resetReportRandomeList,
} from '../../Slice/RandomeReducer';
import {removeBoostNotificationList} from '../../Slice/NotificationReducer';
import {updateGroupBoostNotification} from '../../Slice/GroupDetailReducer';

const SettingModal = ({
  modalValue,
  closeModal,
  favouriteStatus,
  groupId,
  flagStatus,
  boosted_mute_id,
  boosted_mute_status,
}) => {
  const dispatch = useDispatch();
  const [flagId, setFlagId] = useState('');
  const [reportModal, setReportModal] = useState(false);

  const [bouncy, setBouncy] = useState(new Animated.Value(0));
  const [SuccessModalValue, setSuccessModalValue] = useState(false);
  const updateFavouriteGroup = () => {
    dispatch(favouriteGroup(groupId));
  };

  const {reportStatus, reportId} = useSelector(state => {
    return state.RandomeReducer;
  });

  useEffect(() => {
    if (reportStatus == 'success') {
      setSuccessModalValue(true);
      setTimeout(() => {
        setSuccessModalValue(false);
        setTimeout(() => {
          triggerBouncy();
          dispatch(resetReportRandomeList());
        }, 500);
      }, 2000);
    }
  }, [reportStatus]);

  const triggerBouncy = () => {
    setFlagId(reportId);
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

  const submitReport = useCallback(value => {
    setReportModal(false);
    console.log(value, 'value');
    setTimeout(() => {
      dispatch(reportGroupRandomeList({value: value, groupId: value.groupId}));
    }, 500);
  }, []);

  console.log(reportStatus, groupId);
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <ReportModal
          modalValue={reportModal}
          closeModal={() => setReportModal(false)}
          parentCallBack={submitReport}
          groupId={groupId}
        />
        <SuccessModal modalValue={SuccessModalValue} />

        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => updateFavouriteGroup()}>
            <View style={styles.insideContainer}>
              <Icon
                name="bookmark"
                color="#B9B9B9"
                color={favouriteStatus ? '#FFA420' : '#B9B9B9'}
                size={22}
                solid={favouriteStatus ? true : false}
              />
              <Text style={styles.textStyle}>Favorit</Text>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.insideContainer}>
            {flagStatus || flagId == groupId ? (
              <Animated.View style={{transform: [{scale: bouncyView}]}}>
                <Image
                  source={require('../Assets/Images/flagRed.png')}
                  style={styles.imageStyle}
                />
              </Animated.View>
            ) : (
              <TouchableWithoutFeedback onPress={() => setReportModal(true)}>
                <Image
                  source={require('../Assets/Images/flagBlue.png')}
                  style={styles.imageStyle}
                />
              </TouchableWithoutFeedback>
            )}
            <Text style={styles.textStyle}>Melden</Text>
          </View>
          <View style={styles.insideContainer}>
            {!boosted_mute_id ? (
              <Image
                source={require('../Assets/Images/disableBell.png')}
                style={{height: 24, width: 24, resizeMode: 'contain'}}
              />
            ) : boosted_mute_status ? (
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    removeBoostNotificationList({
                      itemId: boosted_mute_id,
                      status: false,
                    }),
                  );
                }}>
                <Image
                  source={require('../Assets/Images/bell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    removeBoostNotificationList({
                      itemId: boosted_mute_id,
                      status: true,
                    }),
                  );
                }}>
                <Image
                  source={require('../Assets/Images/closebell.png')}
                  style={{height: 24, width: 24}}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.textStyle}>Erinnerung</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    height: '15%',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  imageStyle: {
    height: 24,
    width: 18,
    resizeMode: 'contain',
  },
  insideContainer: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#205072',
    fontSize: 12,
    fontFamily: FontStyle.MontSemiBold,
  },
});

export default SettingModal;
