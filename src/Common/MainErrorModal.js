import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';

import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';

const MainErrorModal = ({modalValue, closeModal, message}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 13,
              color: '#205072',
              fontFamily: FontStyle.MontSemiBold,
              textAlign: 'center',
              marginTop: '5%',
              marginBottom: '10%',
            }}>
            {message ||
              'Ein Fehler ist aufgetreten. Bitte versuche es später erneut'}
          </Text>
          <Button buttonText="Alles klar" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    minHeight: '20%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default MainErrorModal;
