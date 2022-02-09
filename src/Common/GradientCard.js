import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontStyle from '../Assets/Fonts/FontStyle';

import {useNavigation} from '@react-navigation/native';

const GradientCard = ({group}) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      key={group.id}
      colors={
        group.group_type == 'line'
          ? ['#08C719', '#adebad']
          : group.group_type == 'snapchat'
          ? ['#FFFC00', '#ffffb3']
          : group.group_type == 'whatsapp'
          ? ['#08C719', '#9dfba5']
          : group.group_type == 'telegram'
          ? ['#058acd', '#9cdcfc']
          : group.group_type == 'viber'
          ? ['#665CAC', '#b0aad4']
          : ['#7289DA', '#aebbea']
      }
      style={[styles.containerStyle]}>
      <Image
        source={
          group.group_type == 'whatsapp'
            ? require('../Assets/Images/whatsappLine.png')
            : group.group_type == 'snapchat'
            ? require('../Assets/Images/snapchatLine.png')
            : group.group_type == 'viber'
            ? require('../Assets/Images/viberLine.png')
            : group.group_type == 'discord'
            ? require('../Assets/Images/discordLine.png')
            : group.group_type == 'telegram'
            ? require('../Assets/Images/telegramLine.png')
            : require('../Assets/Images/lineLine.png')
        }
        style={styles.imageStyle}
      />

      <Text
        ellipsizeMode={'tail'}
        numberOfLines={4}
        style={{
          fontSize: 15,
          fontFamily: FontStyle.MontBold,
          color: group.group_type == 'snapchat' ? '#205072' : '#fff',
          textAlign: 'center',
          width: '80%',
        }}>
        {group.description}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('GroupDetail', {groupId: group.id})}>
        <View
          style={[
            styles.buttonStyle,
            group.group_type == 'snapchat'
              ? {borderColor: '#205072'}
              : {borderColor: '#fff'},
          ]}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FontStyle.MontBold,
              color: group.group_type == 'snapchat' ? '#205072' : '#fff',
            }}>
            Mehr sehen
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>

    // </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
    width: 280,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 7,
    paddingTop: '1%',
    paddingBottom: '2%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
  },
  buttonStyle: {
    width: 125,
    height: 24,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 34,
    width: 34,
    alignSelf: 'flex-start',
  },
});

export default GradientCard;
