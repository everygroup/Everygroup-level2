import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../Common/Button';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '75%',
        }}>
        <Image source={require('../../Assets/Images/everyoneBanner.png')} />
        <Text
          style={{
            color: '#205072',
            fontSize: 21,
            fontFamily: FontStyle.MontBold,
            marginVertical: 10,
          }}>
          Willkommen bei everygroup
        </Text>
        <Text
          style={{
            color: '#205072',
            width: '60%',
            textAlign: 'center',
            fontFamily: FontStyle.MontSemiBold,
            fontSize: 17,
          }}>
          Deine Einstellung zählt hier! Halte dich deshalb bitte an unsere
          <TouchableOpacity
            onPress={() => navigation.navigate('BehaviourRules')}>
            <Text style={{color: '#3D60FF'}}> Verhaltensregeln.</Text>
          </TouchableOpacity>{' '}
          Damit ersparst du dir nicht nur die Löschung deines Accounts, sondern
          sammelst auch eine Menge Karmapunkte.
        </Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: '5%',
          }}>
          {checked ? (
            <TouchableOpacity onPress={() => setChecked(false)}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: '#06BA63',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="check" color="#fff" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setChecked(true)}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderColor: '#205072',
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
          )}

          <Text style={{fontSize: 17, left: 5, color: '#205072'}}>
            Ich verspreche es !
          </Text>
        </View>
        {checked ? (
          <Button
            buttonText="Los geht´s"
            onPress={() => navigation.navigate('HomeNavigator')}
          />
        ) : (
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Los geht´s</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    width: 206,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BCBCBC',
  },
  buttonText: {
    fontSize: 19,
    fontFamily: FontStyle.MontExtBold,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default ConfirmationScreen;
