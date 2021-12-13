import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

import FontStyle from '../Assets/Fonts/FontStyle';
const SmallCard = ({group}) => {
  return (
    <View style={styles.containerStyle}>
      <View
        style={{
          backgroundColor:
            group.socialGroup == 'snapchat'
              ? '#FFFC00'
              : group.socialGroup == 'whatsapp'
              ? 'lightgreen'
              : group.socialGroup == 'line'
              ? 'green'
              : group.socialGroup == 'telegram'
              ? '#0088CC'
              : 'black',
          height: 30,
          width: 30,
          top: -10,
          left: -10,
          borderBottomEndRadius: 5,
          alignItems: 'center',
        }}>
        {group.socialGroup == 'snapchat' ? (
          <Image
            source={require('../Assets/Images/snapchatLine.png')}
            style={styles.imageStyle}
          />
        ) : group.socialGroup == 'line' ? (
          <Image
            source={require('../Assets/Images/lineLine.png')}
            style={styles.imageStyle}
          />
        ) : group.socialGroup == 'telegram' ? (
          <Image
            source={require('../Assets/Images/telegramLine.png')}
            style={styles.imageStyle}
          />
        ) : group.socialGroup == 'whatsapp' ? (
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
            fontSize: 14,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            textAlign: 'center',
          }}>
          {group.description}
        </Text>
      </View>
      <View
        style={[
          styles.buttonStyle,
          {
            backgroundColor:
              group.socialGroup == 'snapchat'
                ? '#FFFC00'
                : group.socialGroup == 'whatsapp'
                ? '#25D366'
                : group.socialGroup == 'line'
                ? '#00B900'
                : group.socialGroup == 'telegram'
                ? '#0088CC'
                : 'red',
          },
        ]}>
        <Text
          style={{fontFamily: FontStyle.MontBold, color: '#fff', fontSize: 10}}>
          Mehr Sehen
        </Text>
      </View>
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
    padding: '5%',
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
    // alignSelf: 'flex-start',
  },
});

export default SmallCard;
