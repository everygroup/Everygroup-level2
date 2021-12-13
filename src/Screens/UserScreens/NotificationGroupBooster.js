import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
const NotificationGroupBooster = () => {
  const [groupArray] = useState([
    {
      groupName: 'Nordsee Gruppe',
      groupType: 'whatsapp',
    },
    {
      groupName: 'Nordsee Gruppe',
      groupType: 'telegram',
    },
  ]);
  const [uploadSwitch, setUploadSwitch] = useState(true);
  const [boostSwitch, setBoostSwitch] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Gruppenbooster</Text>
        <View />
      </View>
      <View style={styles.container}>
        <View style={{width: '80%'}}>
          <Text style={styles.titelText}>Boost Benachrichtigung</Text>
          <Text style={styles.descriptionText}>
            Automatisch Benachrichtigungen aktivieren für die Verfügbarkeit
            eines Boosters, sobald du eine Gruppe einmal geboostet hast.
          </Text>
        </View>
        <Switch
          color="#205072"
          value={uploadSwitch}
          onValueChange={() => setUploadSwitch(!uploadSwitch)}
          style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
        />
      </View>
      <View style={{height: 1, width: '100%', backgroundColor: '#C7C7C7'}} />
      <View
        style={{alignItems: 'center', width: '100%', paddingHorizontal: '5%'}}>
        <Text style={[styles.titelText, {fontSize: 20, color: '#205072'}]}>
          Gruppen
        </Text>
        <Text
          style={[styles.descriptionText, {width: '80%', textAlign: 'center'}]}>
          Hier findest du alle Gruppen für die du eine Benachrichtigung
          erhältst, sobald du sie wieder boosten kannst.
        </Text>
      </View>
      <FlatList
        data={groupArray}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={[styles.shadowContainer]}>
              <View
                style={{
                  backgroundColor:
                    item.groupType == 'snapchat'
                      ? '#FFFC00'
                      : item.groupType == 'whatsapp'
                      ? 'lightgreen'
                      : item.groupType == 'line'
                      ? 'green'
                      : item.groupType == 'telegram'
                      ? '#0088CC'
                      : 'black',
                  height: 30,
                  width: 30,
                  top: -20,
                  borderTopLeftRadius: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {item.groupType == 'snapchat' ? (
                  <Image
                    source={require('../../Assets/Images/snapchatLine.png')}
                    style={styles.imageStyle}
                  />
                ) : item.groupType == 'line' ? (
                  <Image
                    source={require('../../Assets/Images/lineLine.png')}
                    style={styles.imageStyle}
                  />
                ) : item.groupType == 'telegram' ? (
                  <Image
                    source={require('../../Assets/Images/telegramLine.png')}
                    style={styles.imageStyle}
                  />
                ) : item.groupType == 'whatsapp' ? (
                  <Image
                    source={require('../../Assets/Images/whatsappLine.png')}
                    style={styles.imageStyle}
                  />
                ) : (
                  <Image
                    source={require('../../Assets/Images/orangeLogo.png')}
                    style={styles.imageStyle}
                  />
                )}
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FontStyle.MontExtBold,
                  color: '#205072',
                }}>
                {item.groupName}
              </Text>
              <Icon name={'bell'} size={30} color="#205072" solid />
            </View>
          );
        }}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <Image
          source={require('../../Assets/Images/greyLogo.png')}
          style={{
            width: 94,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
            bottom: 30,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titelText: {
    fontSize: 18,
    fontFamily: FontStyle.MontSemiBold,
    color: '#FFA420',
  },
  descriptionText: {
    fontFamily: FontStyle.MontSemiBold,
    fontSize: 10,
    color: '#C7C7C7',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginVertical: '2.5%',
  },
  shadowContainer: {
    width: '80%',
    borderRadius: 7,

    paddingVertical: '5%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
    paddingRight: '2.5%',
    marginVertical: '2.5%',
  },
  imageStyle: {
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
  },
});

export default NotificationGroupBooster;
