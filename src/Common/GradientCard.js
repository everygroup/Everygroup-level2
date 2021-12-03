import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const GradientCard = ({group}) => {
  return (
    <View
      style={[
        styles.containerStyle,
        {
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
        },
      ]}>
      <Image />
      <Text style={{fontSize: 13, color: '#fff', textAlign: 'center'}}>
        {group.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 150,
    width: 280,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 7,

    padding: '5%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
  },
});

export default GradientCard;
