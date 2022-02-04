import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {favouriteGroup} from '../../Slice/FavouriteGroupReducer';
import {useSelector} from 'react-redux';
import ReportModal from '../Screens/HomeScreen/ReportModal';
import {reportGroup, resetReport} from '../../Slice/ReportGroupReducer';
import SuccessModal from '../Screens/HomeScreen/SuccessModal';

const SettingModal = ({
  modalValue,
  closeModal,
  favouriteStatus,
  groupId,
  flagStatus,
}) => {
  const dispatch = useDispatch();
  const [flagValue, setFlagValue] = useState(false);
  const [reportModal, setReportModal] = useState(false);

  const [bouncy, setBouncy] = useState(new Animated.Value(0));
  const updateFavouriteGroup = () => {
    dispatch(favouriteGroup(groupId));
  };

  const {status} = useSelector(state => {
    return state.ReportGroupReducer;
  });

  useEffect(() => {
    if (status == 'success') {
      setTimeout(() => {
        triggerBouncy();

        resetReport();
      }, 500);
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

  const submitReport = useCallback(value => {
    setReportModal(false);
    setTimeout(() => {
      runFunction(value);
    }, 500);
  }, []);

  const runFunction = value => {
    dispatch(reportGroup({value, groupId}));
  };
  // console.log(status, groupId);
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
        {/* <SuccessModal modalValue={SuccessModalValue} /> */}
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
            {flagStatus || flagValue ? (
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
            <Image
              source={require('../Assets/Images/closebell.png')}
              style={styles.imageStyle}
            />
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
