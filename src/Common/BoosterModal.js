import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';

const BoosterModal = ({modalValue, closeModal}) => {
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
        <View style={styles.mainContainer}>
          <Text
            style={{
              fontFamily: FontStyle.MontExtBold,
              fontSize: 19,
              color: '#205072',
              marginVertical: '5%',
            }}>
            Booster
          </Text>
          <View style={styles.insideContainer}>
            <View style={{alignItems: 'center', width: '20%'}}>
              <Image
                source={require('../Assets/Images/arrowYellow.png')}
                style={{width: 19, height: 22, resizeMode: 'cover'}}
              />
              <Text style={[styles.messageText, {fontSize: 9}]}>1x Boost</Text>
            </View>

            <Text style={[styles.messageText, {width: '80%'}]}>
              'Mit dem Booster hilfst du Gruppen mehr Reichweite zu erlangen.
              Wenn genug Leute der Gruppe einen Boost geben, erscheint die
              Gruppe für mehrere Tage automatisch ganz oben in den Ergebnissen.'
            </Text>
          </View>
          <View style={styles.insideContainer}>
            <View style={{alignItems: 'center', width: '20%'}}>
              <Image
                source={require('../Assets/Images/arrowOrangeBooster.png')}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
              <Text style={[styles.messageText, {fontSize: 9}]}>5x Boost</Text>
            </View>

            <Text style={[styles.messageText, {width: '80%'}]}>
              Du beschleunigst den Prozess, indem du der Gruppe einen Fünffachen
              Boost gibst
            </Text>
          </View>
          <View style={styles.insideContainer}>
            <View style={{alignItems: 'center', width: '20%'}}>
              <Image
                source={require('../Assets/Images/bell.png')}
                style={{width: 19, height: 22, resizeMode: 'cover'}}
              />
            </View>

            <Text style={[styles.messageText, {width: '80%'}]}>
              Du kannst eine Gruppe erst wieder Boosten, wenn der aktuelle Boost
              abgeschlossen ist. Lass dich von uns Benachrichtigen, wenn es
              wieder soweit ist für diese Gruppe.
            </Text>
          </View>
          <View style={{marginTop: '10%'}}>
            <Button onPress={closeModal} buttonText="Alles klar" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: '80%',
    height: '65%',
    paddingTop: '5%',
    paddingBottom: '5%',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: '2.5%',
  },
  messageText: {
    color: '#205072',
    fontSize: 13,
    fontFamily: FontStyle.MontSemiBold,
  },
  insideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
  },
});

export default BoosterModal;
