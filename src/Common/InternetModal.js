import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';

const InternetModal = ({modalValue, closeModal, internetStatus}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        animationInTiming={0}
        animationOutTiming={0}
        style={{
          alignItems: 'center',
          flex: 1,
          margin: 0,
          paddingTop: '10%',
          backgroundColor: 'transparent',
          opacity: 2,
          justifyContent: 'flex-start',
        }}>
        <View
          style={[
            styles.buttonStyle,
            !internetStatus ? {backgroundColor: '#EF3E36'} : null,
          ]}>
          <Text style={styles.textStyle}>
            {internetStatus ? 'Online' : 'Offline'}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#06BA63',
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    width: 83,
    borderRadius: 8,
  },
  textStyle: {
    color: '#fff',
    fontFamily: FontStyle.MontSemiBold,
    fontSize: 13,
  },
});

export default InternetModal;
