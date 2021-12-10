import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PersonCard = ({data}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 0.5}}>
        <Icon
          name={'times'}
          color="#EF3E36"
          light
          size={24}
          style={{
            alignSelf: 'flex-end',
            paddingHorizontal: '5%',
            paddingTop: '2.5%',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            padding: '2.5%',
          }}>
          {data.userName}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F2F2F2',
          flex: 0.5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '2.5%',
        }}>
        <Text style={styles.notificationText}>Benachrichtigung</Text>
        <Icon
          name={data.notificationValue ? 'bell' : 'bell-slash'}
          color="#205072"
          solid
          size={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 140,
    maxHeight: 'auto',
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: '5%',
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
  },
  notificationText: {
    fontSize: 16,
    fontFamily: FontStyle.MontMedium,
    color: '#205072',
  },
});
export default PersonCard;
