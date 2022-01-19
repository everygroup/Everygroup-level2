import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../../Assets/Fonts/FontStyle';

const SnapChatModal = ({
  modalValue,
  closeModal,
  message,
  description,
  leftButtonColor,
  rightButtonColor,
  onPress,
  rememberPress,
  rememberValue,
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
            width: '80%',
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
              fontSize: 14,
              fontFamily: 'Montserrat-SemiBold',
              textAlign: 'center',
              marginVertical: '5%',
            }}>
            {message}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              color: '#205072',
              fontSize: 14,
              width: '85%',
              textAlign: 'left',
            }}>
            Weitere Infos findest du in den{' '}
            <Text style={{color: '#FFA420'}}>FAQ</Text>
          </Text>
          <View>
            <TouchableOpacity
              onPress={closeModal}
              style={[
                styles.buttonView,
                {backgroundColor: leftButtonColor || '#06BA63'},
              ]}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  color: '#fff',
                  fontSize: 16,
                }}>
                Trotzdem Gruppe posten
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={[
                styles.buttonView,
                {backgroundColor: rightButtonColor || '#EF3E36'},
              ]}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  color: '#fff',
                  fontSize: 17,
                }}>
                Lieber nicht Gruppe posten
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginVertical: '10%',
              alignItems: 'center',
            }}
            onPress={rememberPress}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 16,
                color: '#205072',
              }}>
              Nicht nochmal erinnern
            </Text>
            {rememberValue ? (
              <Image
                source={require('../../Assets/Images/check.png')}
                style={{width: 24, height: 24, resizeMode: 'contain', left: 10}}
              />
            ) : (
              <Image
                source={require('../../Assets/Images/uncheck.png')}
                style={{width: 24, height: 24, resizeMode: 'contain', left: 10}}
              />
            )}
          </TouchableOpacity>
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
    width: 270,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginHorizontal: '5%',
    marginTop: '10%',
    paddingHorizontal: '2.5%',
  },
});

export default SnapChatModal;
