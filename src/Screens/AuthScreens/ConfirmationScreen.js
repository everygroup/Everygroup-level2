import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../Common/Button';
import {useNavigation} from '@react-navigation/native';

const ConfirmationScreen = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '40%',
        }}>
        <Image
          source={require('../../Assets/Images/blueLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
            marginRight: '4%',
          }}
        />
        <Text style={{color: '#FFA420', fontSize: 32}}>everygroup</Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={{color: '#205072', fontSize: 19}}>
          Willkommen bei everygroup
        </Text>
        <Text style={{color: '#205072', width: '50%', textAlign: 'center'}}>
          Deine Einstellung zählt hier! Halte dich deshalb bitte an unsere
          <Text style={{color: '#3D60FF'}}> Verhaltensregeln.</Text> Damit
          ersparst du dir nicht nur die Löschung deines Accounts, sondern
          sammelst auch eine Menge Karmapunkte.
        </Text>
      </View>
      <View style={{width: '100%', alignItems: 'center', marginVertical: '5%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
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

          <Text style={{fontSize: 15, left: 5, color: '#205072'}}>
            Ich verspreche es !
          </Text>
        </View>
        <Button
          buttonText="Los geht´s"
          onPress={() => navigation.navigate('HomeNavigator')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;
