import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';

const SuccessModal = ({modalValue, closeModal, message}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '70%',
            minHeight: '20%',
            maxHeight: 'auto',
            paddingVertical: '5%',
            borderRadius: 10,

            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/Images/Done.png')}
            style={{height: 160, width: 160}}
          />
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 16,
              color: '#205072',
              width: '70%',
              textAlign: 'center',
              marginVertical: '2.5%',
            }}>
            Glückwunsch! Du hast{' '}
            <Text style={{color: '#004EF8'}}>9x Reuploads</Text> erhalten!
          </Text>
          <Button buttonText="Alles klar" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '45%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#004ACE',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: FontStyle.bold,
    fontSize: 16,
    color: '#fff',
  },
  buttonView: {
    width: 122,
    height: 45,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginHorizontal: '5%',
    marginTop: '10%',
  },
});

export default SuccessModal;
