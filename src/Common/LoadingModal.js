import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontStyle from '../Assets/Fonts/FontStyle';
import Button from './Button';

const LoadingModal = ({modalValue, source, closeModal, navigationModal}) => {
  const {createSuccess} = useSelector(state => {
    return state.createGroup;
  });

  return (
    <View>
      <Modal
        isVisible={modalValue}
        // onBackButtonPress={closeModal}
        // onBackdropPress={closeModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}>
        <View
          style={{
            backgroundColor: 'rgb(164, 165, 165)',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {createSuccess == 'success' ? (
            <View
              style={{
                backgroundColor: '#fff',
                width: '85%',
                height: '60%',

                padding: '5%',
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/Images/createGroup.png')}
                style={{height: 250, width: 250, resizeMode: 'cover'}}
              />
              <Image
                source={require('../Assets/Images/orangeRight.png')}
                style={{height: 30, width: 30, resizeMode: 'cover'}}
              />
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  color: '#205072',
                  fontSize: 17,
                  textAlign: 'center',
                  width: '80%',
                  marginVertical: 20,
                }}>
                Super, deine Gruppe wird in kürze hochgeladen! Unter
                <Text onPress={navigationModal} style={{color: '#FFA420'}}>
                  {' '}
                  Meine Gruppen
                </Text>{' '}
                findest du sie.
              </Text>
              <Button buttonText="Alles klar" onPress={closeModal} />
            </View>
          ) : (
            <LottieView
              autoPlay
              loop={false}
              style={{height: 8}}
              source={source}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoadingModal;
