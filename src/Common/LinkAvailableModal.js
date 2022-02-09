import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';
const LinkAvailableModal = ({modalValue, closeModal, message}) => {
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
          left: 10,
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
          <Text
            style={{
              color: '#205072',
              fontSize: 15,
              fontFamily: FontStyle.MontSemiBold,
              textAlign: 'center',
              width: '80%',
            }}>
            {message}
          </Text>

          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              fontSize: 12,
              color: '#205072',
              marginTop: '5%',
            }}>
            Weitere Infos findest du in den{' '}
            <Text style={{color: '#FFA420'}}>FAQ</Text>
          </Text>

          <View style={{marginVertical: '5%'}}>
            <Button onPress={closeModal} buttonText="Alles klar" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LinkAvailableModal;
