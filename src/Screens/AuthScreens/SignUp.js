import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Button from '../../Common/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../../Common/Input';
import {Switch} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [switchOn, setSwitchOn] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const iconPress = () => {
    setShowPassword(!showPassword), setSecureTextEntry(!secureTextEntry);
  };

  const onToggleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Icon
          name="chevron-left"
          size={30}
          color="#205072"
          style={{paddingLeft: '4%'}}
        />
        <Image
          source={require('../../Assets/Images/blueLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
            marginRight: '4%',
          }}
        />
        <View style={{width: '4%'}} />
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text style={{color: '#FFA420', fontSize: 32}}>everygroup</Text>
      </View>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '35%',
          justifyContent: 'center',
        }}>
        <Input placeholder="E-Mail" />
        <Input placeholder="Nutzername" />
        <Input
          placeholder="Passwort"
          iconName={showPassword ? 'eye-slash' : 'eye'}
          showPassword={showPassword}
          iconPress={iconPress}
          secureTextEntry={secureTextEntry}
        />
        <View style={{width: '70%', flexDirection: 'row'}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 10,
              color: '#205072',
              width: '85%',
            }}>
            Ich möchte regelmäßig Mails erhalten mit Produktinfos, Tipps und
            Gewinnspielen von everygroup. Eine Abmeldung kann jederzeit
            vorgenommen werden.
          </Text>
          <Switch
            color="#205072"
            value={switchOn}
            onValueChange={onToggleSwitch}
            style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button
          onPress={() => navigation.navigate('VerifyMail')}
          buttonText="Registrieren"
        />
      </View>
      <View style={{width: '72%', alignSelf: 'center', flexDirection: 'row'}}>
        <Text style={{fontSize: 10, color: '#205072', marginVertical: '5%'}}>
          Es gelten unsere
        </Text>
        <Text style={{fontSize: 10, color: '#3D60FF', marginVertical: '5%'}}>
          {' '}
          AGB.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: '2.5%',
        }}>
        <Text style={{color: '#205072'}}>
          In unserer{' '}
          <Text style={{color: '#3D60FF'}}> Datenschutzerklärung</Text> findest
          du Informationen über die Verarbeitung deiner Daten.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
