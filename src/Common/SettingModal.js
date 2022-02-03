import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';

const SettingModal = ({modalValue, closeModal}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <View style={styles.container}>
          <View style={styles.insideContainer}>
            <Image
              source={require('../Assets/Images/favoriteGrey.png')}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>Favorit</Text>
          </View>
          <View style={styles.insideContainer}>
            <Image
              source={require('../Assets/Images/flagBlue.png')}
              style={styles.imageStyle}
            />
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
