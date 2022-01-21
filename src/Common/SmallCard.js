import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import FontStyle from '../Assets/Fonts/FontStyle';
const SmallCard = ({group, mehrSehen}) => {
  return (
    <View style={styles.containerStyle}>
      <View
        style={{
          backgroundColor:
            group.group_type == 'snapchat'
              ? '#FFFC00'
              : group.group_type == 'whatsapp'
              ? 'lightgreen'
              : group.group_type == 'line'
              ? 'green'
              : group.group_type == 'telegram'
              ? '#0088CC'
              : 'black',
          height: 30,
          width: 30,
          top: -10,
          left: -10,
          borderBottomEndRadius: 5,
          borderTopLeftRadius: 5,
          alignItems: 'center',
        }}>
        {group.group_type == 'snapchat' ? (
          <Image
            source={require('../Assets/Images/snapchatLine.png')}
            style={styles.imageStyle}
          />
        ) : group.group_type == 'line' ? (
          <Image
            source={require('../Assets/Images/lineLine.png')}
            style={styles.imageStyle}
          />
        ) : group.group_type == 'telegram' ? (
          <Image
            source={require('../Assets/Images/telegramLine.png')}
            style={styles.imageStyle}
          />
        ) : group.group_type == 'whatsapp' ? (
          <Image
            source={require('../Assets/Images/whatsappLine.png')}
            style={styles.imageStyle}
          />
        ) : (
          <Image
            source={require('../Assets/Images/orangeLogo.png')}
            style={styles.imageStyle}
          />
        )}
      </View>
      <View style={{height: 40}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            textAlign: 'center',
          }}>
          {group.description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={mehrSehen}
        style={[
          styles.buttonStyle,
          {
            backgroundColor:
              group.group_type == 'snapchat'
                ? '#FFFC00'
                : group.group_type == 'whatsapp'
                ? '#25D366'
                : group.group_type == 'line'
                ? '#00B900'
                : group.group_type == 'telegram'
                ? '#0088CC'
                : 'red',
          },
        ]}>
        <Text
          style={{
            fontFamily: FontStyle.MontBold,
            color: group.group_type == 'snapchat' ? '#205072' : '#fff',
            fontSize: 12,
          }}>
          Mehr Sehen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 110,
    width: 185,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#fff',
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

    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: 34,
    width: 34,
    bottom: 2,
    // alignSelf: 'flex-start',
  },
});

export default SmallCard;
