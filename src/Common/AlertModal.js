import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';

const AlertModal = ({
  modalValue,
  closeModal,
  message,
  description,
  leftButtonColor,
  rightButtonColor,
  onPress,
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
              color: '#205072',
              fontSize: 20,
              fontFamily: FontStyle.MontBold,
              textAlign: 'center',
              marginVertical: '5%',
            }}>
            {message || `Username wirklich ändern?`}
          </Text>
          <Text
            style={{
              fontFamily: FontStyle.MontMedium,
              color: '#205072',
              fontSize: 14,
              width: '85%',
              textAlign: 'left',
            }}>
            {description ||
              'Danach kannst du deinen Usernamen nicht mehr ändern.'}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={closeModal}
              style={[
                styles.buttonView,
                {backgroundColor: leftButtonColor || '#205072'},
              ]}>
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
              onPress={onPress}
              style={[
                styles.buttonView,
                {backgroundColor: rightButtonColor || '#06BA63'},
              ]}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  color: '#fff',
                  fontSize: 17,
                }}>
                Ändern
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
    marginHorizontal: '5%',
    marginTop: '10%',
  },
});

export default AlertModal;
