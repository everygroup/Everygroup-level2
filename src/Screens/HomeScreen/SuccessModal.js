import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../../Assets/Fonts/FontStyle';
const SuccessModal = ({modalValue}) => {
  return (
    <View>
      <Modal
        isVisible={modalValue}
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
            paddingVertical: '2.5%',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <View style={{marginVertical: '5%', alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 15,
                color: '#205072',
              }}>
              Danke für dein Feedback!
            </Text>
            <Text
              style={{
                fontFamily: FontStyle.MontBold,
                fontSize: 12,
                color: '#205072',
                textAlign: 'center',
                marginVertical: '10%',
              }}>
              Wir werden uns in kürze die Gruppe genauer anschauen
            </Text>
            <Image
              source={require('../../Assets/Images/orangeRight.png')}
              style={{width: 40, height: 40, resizeMode: 'contain'}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SuccessModal;
