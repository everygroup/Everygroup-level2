import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {Switch} from 'react-native-paper';
const NotificationOwnGroup = () => {
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
        <Text style={Styles.headingText}>Eigene Gruppen</Text>
        <View />
      </View>
      <View style={styles.container}>
        <View style={{width: '80%'}}>
          <Text style={styles.titelText}>Reupload</Text>
          <Text style={styles.descriptionText}>
            Ich möchte eine Benachrichtigung erhalten, wenn ich eine Gruppe
            reuploaden kann.
          </Text>
        </View>
        <Switch
          color="#205072"
          value={uploadSwitch}
          onValueChange={() => setUploadSwitch(!uploadSwitch)}
          style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
        />
      </View>
      <View style={styles.container}>
        <View style={{width: '80%'}}>
          <Text style={styles.titelText}>Boost</Text>
          <Text style={styles.descriptionText}>
            Ich möchte benachrichtigt werden, wenn eine Gruppe einen Booster
            erhalten hat.
          </Text>
        </View>
        <Switch
          color="#205072"
          value={boostSwitch}
          onValueChange={() => setBoostSwitch(!boostSwitch)}
          style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
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
});

export default NotificationOwnGroup;
