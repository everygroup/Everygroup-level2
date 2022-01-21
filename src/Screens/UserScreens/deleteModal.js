import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../../Assets/Fonts/FontStyle';

const DeleteModal = ({
  modalValue,
  closeModal,
  message,
  deleteImage,
  buttonLeftColor,
  buttonRightColor,
  deletePress,
}) => {
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
            width: '80%',
            minHeight: '20%',
            maxHeight: 'auto',
            paddingVertical: '5%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {deleteImage ? (
            <Image
              source={require('../../Assets/Images/Trash.png')}
              style={{width: 160, height: 120, resizeMode: 'contain'}}
            />
          ) : null}
          <Text
            style={{
              color: '#205072',
              fontSize: 16,
              fontFamily: FontStyle.MontBold,
              textAlign: 'center',
              marginTop: '2.5%',
            }}>
            {message}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={closeModal}
              style={[styles.buttonView, {backgroundColor: buttonLeftColor}]}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  color: '#fff',
                  fontSize: 17,
                }}>
                Doch nicht
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={deletePress}
              style={[styles.buttonView, {backgroundColor: buttonRightColor}]}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  color: '#fff',
                  fontSize: 17,
                }}>
                Löschen
              </Text>
            </TouchableOpacity>
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
    marginHorizontal: '2.5%',
    marginTop: '8%',
  },
});

export default DeleteModal;
