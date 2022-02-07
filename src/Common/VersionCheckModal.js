import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';

const VersionCheckModal = ({
  modalValue,
  closeModal,
  message,
  description,
  leftButtonColor,
  rightButtonColor,
  onPress,
  apiDetail,
  buttonText,
}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          opacity: 1,
          backgroundColor: '#00000099',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '85%',
            minHeight: '20%',
            maxHeight: 'auto',
            paddingVertical: '2%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '2.5%',
          }}>
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              color: '#205072',
              fontSize: 14,
              width: '85%',
              textAlign: 'center',
              marginBottom: '5%',
            }}>
            {description}
          </Text>
          {apiDetail ? (
            <>
              <Image
                source={require('../Assets/Images/orangeLogo.png')}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontFamily: FontStyle.MontSemiBold,
                  color: '#3A76F0',
                  fontSize: 11,
                  marginVertical: '10%',
                }}>
                {apiDetail}
              </Text>
            </>
          ) : null}
          <View>
            <Button
              onPress={closeModal}
              buttonText={buttonText}
              fontSize={13}
            />
          </View>
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
    fontSize: 18,
    color: '#fff',
  },
  buttonView: {
    width: 122,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginHorizontal: '5%',
    marginTop: '10%',
  },
});

export default VersionCheckModal;
