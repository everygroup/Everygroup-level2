import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontStyle from '../Assets/Fonts/FontStyle';
const GradientCard = ({group}) => {
  return (
    <LinearGradient
      colors={
        group.socialGroup == 'line'
          ? ['#08C719', '#adebad']
          : group.socialGroup == 'snapchat'
          ? ['#FFFC00', '#ffffb3']
          : group.socialGroup == 'whatsapp'
          ? ['#08C719', '#9dfba5']
          : group.socialGroup == 'telegram'
          ? ['#058acd', '#9cdcfc']
          : ['#08C719', '#adebad']
      }
      style={[styles.containerStyle]}>
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
      <Text
        style={{
          fontSize: 15,
          fontFamily: FontStyle.MontBold,
          color: group.socialGroup == 'snapchat' ? '#205072' : '#fff',
          textAlign: 'center',
          width: '80%',
        }}>
        {group.description}
      </Text>
      <View
        style={[
          styles.buttonStyle,
          group.socialGroup == 'snapchat'
            ? {borderColor: '#205072'}
            : {borderColor: '#fff'},
        ]}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: FontStyle.MontBold,
            color: group.socialGroup == 'snapchat' ? '#205072' : '#fff',
          }}>
          Mehr sehen
        </Text>
      </View>
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
