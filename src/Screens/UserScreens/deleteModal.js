import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../../Assets/Fonts/FontStyle';

const DeleteModal = ({modalValue, closeModal, message}) => {
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
            paddingVertical: '2%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
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
            Danach kannst du deinen Usernamen nicht mehr ändern.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={closeModal} style={styles.buttonView}>
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
              onPress={closeModal}
              style={[styles.buttonView, {backgroundColor: '#06BA63'}]}>
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
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginHorizontal: '5%',
    marginTop: '10%',
  },
});

export default DeleteModal;
