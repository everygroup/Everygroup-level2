import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

const PersonCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <View style={{flex: 0.5}}>
        <Icons
          name={'close'}
          color="#EF3E36"
          light
          size={24}
          style={{
            alignSelf: 'flex-end',
            paddingHorizontal: '2.5%',
            paddingTop: '2.5%',
          }}
          onPress={() => alert('delete')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('OtherUserScreen')}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Montserrat-Bold',
              color: '#205072',
              padding: '2.5%',
            }}>
            {data.userName}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#F2F2F2',
          flex: 0.5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '3%',
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
    marginTop: '5%',
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
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    color: '#205072',
  },
});
export default PersonCard;
