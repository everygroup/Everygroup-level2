import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Button from '../../Common/Button';

const MessangerModal = ({modalValue, closeModal}) => {
  const [selectedMessenger, setSelectedMessenger] = useState([]);
  const [dataArray] = useState([
    'Whatsapp',
    'Telegram',
    'Discord',
    'Snapchat',
    'Line',
    'Viber',
  ]);

  const messengerSelection = messenger => {
    if (selectedMessenger.some(el => el == messenger)) {
      setSelectedMessenger(
        selectedMessenger.filter(item => item !== messenger),
      );
    } else {
      setSelectedMessenger(prevValue => [...prevValue, messenger]);
    }
  };
  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}>
        <View style={styles.container}>
          <FlatList
            data={dataArray}
            scrollEnabled={false}
            renderItem={({item, index}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => messengerSelection(item)}
                    style={{
                      height: 50,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: '5%',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontFamily: FontStyle.MontSemiBold,
                        fontSize: 19,
                        color: '#FFA420',
                      }}>
                      {item}
                    </Text>
                    {selectedMessenger.some(data => data === item) ? (
                      <Image
                        source={require('../../Assets/Images/check.png')}
                        style={{height: 24, width: 24}}
                      />
                    ) : (
                      <Image
                        source={require('../../Assets/Images/uncheck.png')}
                        style={{height: 24, width: 24}}
                      />
                    )}
                  </TouchableOpacity>
                  {index < 5 ? (
                    <View
                      style={{
                        width: '100%',
                        height: 2,
                        backgroundColor: '#DDDFE7',
                      }}
                    />
                  ) : null}
                </View>
              );
            }}
          />
          <View style={{alignSelf: 'center'}}>
            <Button onPress={closeModal} buttonText="Anwenden" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '90%',
    minHeight: '50%',
    maxHeight: 'auto',
    paddingVertical: '2%',
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default MessangerModal;
