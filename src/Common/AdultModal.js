import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';
const AdultModal = ({modalValue, closeModal, message, _18Press}) => {
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
            width: '80%',
            minHeight: '20%',
            maxHeight: 'auto',
            paddingVertical: '5%',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#205072',
              fontSize: 17,
              fontFamily: 'Montserrat-ExtraBold',
              textAlign: 'center',

              width: '80%',
            }}>
            {message}
          </Text>

          <View style={{marginVertical: '10%'}}>
            <Button onPress={closeModal} buttonText="Nein, noch nicht" />
          </View>
          <Text
            onPress={_18Press}
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 12,
              color: '#FFA420',
            }}>
            Ja, ich bin 18 Jahre alt
          </Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdultModal;
