import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';

import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteFavouriteUser,
  updatePersonNotification,
} from '../../../Slice/FavouriteUserReducer';

const PersonCard = ({data}) => {
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(140));
  const [deleteId, setDeleteId] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const deleteUser = async personId => {
    await setDeleteId(personId);
    setTimeout(() => {
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        animatedHeight.setValue(140);
        dispatch(deleteFavouriteUser(personId));
      });
    }, 500);
  };

  return (
    <Animated.View
      style={[
        styles.containerStyle,
        {height: data.id == deleteId ? animatedHeight : 140},
      ]}>
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
          onPress={() => deleteUser(data.id)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('OtherUserScreen')}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: FontStyle.MontBold,
              color: '#205072',
              padding: '2.5%',
            }}>
            {data.username}
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
        <TouchableOpacity
          onPress={() =>
            dispatch(
              updatePersonNotification({
                id: data.id,
                value: !data.notification,
              }),
            )
          }>
          {data.notification ? (
            <Image
              source={require('../../Assets/Images/bell.png')}
              style={{height: 24, width: 24}}
            />
          ) : (
            <Image
              source={require('../../Assets/Images/closebell.png')}
              style={{height: 24, width: 24}}
            />
          )}
        </TouchableOpacity>
      </View>
    </Animated.View>
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
    fontFamily: FontStyle.MontMedium,
    color: '#205072',
  },
});
export default PersonCard;
