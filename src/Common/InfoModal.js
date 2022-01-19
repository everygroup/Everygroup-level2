import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';
const InfoModal = ({modalValue, closeModal, message, Faq}) => {
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
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              textAlign: 'center',

              width: '80%',
            }}>
            {message}
          </Text>

          {Faq ? (
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 15,
                color: '#FFA420',
                marginTop: '5%',
              }}>
              Zu den FAQ
            </Text>
          ) : null}
          <View style={{marginVertical: '5%'}}>
            <Button onPress={closeModal} buttonText="Alles klar" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default InfoModal;
