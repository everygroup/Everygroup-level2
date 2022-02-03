import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Modal from 'react-native-modal';

const ErrorModal = ({modalValue, closeModal, message}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <View style={styles.container}>
          <Text style={{fontSize: 18, color: '#000'}}>{message}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '70%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default ErrorModal;
