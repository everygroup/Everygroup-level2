import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteGroup, updateGroup} from '../../Slice/UserGroupReducer';
import InfoModal from './InfoModal';
const GroupCard = ({
  group,
  boosterValue,
  onPress,
  selectedGroupName,
  eyePress,
  bellPress,
  eyeValue,
  bellValue,
  infoPress,
  favourite,
  removeFavourite,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalValue, setModalValue] = useState(false);
  const visibleUnvisible = () => {
    if (group.visible_status == true) {
      setModalValue(true);
    }
    dispatch(updateGroup({groupId: group.id, visible: !group.visible_status}));
  };
  console.log(group, 'group');
  return (
    <View>
      <InfoModal
        modalValue={modalValue}
        closeModal={() => setModalValue(false)}
        titel="Unsichtbar"
        message={
          'Deine Gruppe ist jetzt nicht mehr sichtbar für andere Nutzer. Ebenfalls wird sie nicht mehr in den Favoriten von anderen gezeigt, die deine Gruppe als Favorit markiert haben.'
        }
      />
      <View style={{position: 'relative', zIndex: 99999}}>
        <View style={[styles.containerStyle, {borderBottomRightRadius: 0}]}>
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
              borderTopLeftRadius: 7,
              borderBottomRightRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('GroupDetail', {groupId: group.id})
            }>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 30,
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginVertical: 5,
                  color: '#205072',
                  fontFamily: FontStyle.MontExtBold,
                }}>
                {group.title}
              </Text>
              <TouchableWithoutFeedback onPress={removeFavourite}>
                <Icon
                  name="bookmark"
                  color={
                    group.group_favourite_status || favourite
                      ? '#FFA420'
                      : '#B9B9B9'
                  }
                  size={22}
                  solid={
                    group.group_favourite_status || favourite ? true : false
                  }
                />
              </TouchableWithoutFeedback>
            </View>

            <FlatList
              horizontal={true}
              contentContainerStyle={{
                height: 22,
                width: '90%',
                paddingHorizontal: '5%',
              }}
              data={group.categories}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      backgroundColor: '#205072',
                      marginHorizontal: 5,
                      height: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: 80,
                      maxWidth: 'auto',
                      borderRadius: 5,
                      paddingHorizontal: 5,
                    }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 11,
                        fontFamily: FontStyle.MontBold,
                      }}>
                      {item.category}
                    </Text>
                  </View>
                );
              }}
            />

            <FlatList
              horizontal={true}
              contentContainerStyle={{
                width: '95%',
                height: 22,
                minHeight: 20,
                maxHeight: 40,
                paddingHorizontal: '8%',
              }}
              data={group.tags}
              renderItem={({item}) => {
                return (
                  <View style={{minWidth: 38, maxWidth: 'auto'}}>
                    <Text
                      style={{
                        color: '#FFA420',
                        fontSize: 13,
                        fontFamily: FontStyle.MontMedium,
                      }}>
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
            <Text
              style={{
                fontFamily: FontStyle.MontSemiBold,
                fontSize: 15,
                color: '#205072',
                paddingHorizontal: '8%',
              }}>
              {group.description}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL(group.group_link)}
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
              width: '90%',
              height: 34,
              alignSelf: 'center',
              borderRadius: 15,
              marginVertical: 15,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: group.group_type == 'snapchat' ? '#205072' : '#fff',
                fontFamily: FontStyle.MontBold,
                fontSize: 16,
              }}>
              BEITRETEN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{position: 'relative'}}>
          <View
            style={{
              alignSelf: 'flex-end',
              marginHorizontal: '5%',
              height: 22,
              top: -24,
              shadowColor: 'grey',
              backgroundColor: '#fff',
              width: 62,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,

              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.27,
              shadowRadius: 2.65,
              elevation: 2,
              position: 'absolute',
              right: 0,
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 9,
                color: '#205072',
              }}>
              {group.languages[0].language}
            </Text>
          </View>
        </View>
      </View>
      {boosterValue ? (
        <View
          style={[
            styles.boostContainerStyle,

            {height: group.id == selectedGroupName ? 240 : 50},
          ]}>
          {selectedGroupName == group.id ? (
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                }}>
                <Icon name={'redo-alt'} size={21} color="#C4C6C8" />

                <TouchableWithoutFeedback onPress={() => visibleUnvisible()}>
                  {group.visible_status ? (
                    <Image
                      source={require('../Assets/Images/openEye.png')}
                      style={styles.iconStyle}
                    />
                  ) : (
                    <Image
                      source={require('../Assets/Images/closeEye.png')}
                      style={styles.iconStyle}
                    />
                  )}
                </TouchableWithoutFeedback>

                <Icon
                  name={'pencil-alt'}
                  size={21}
                  color="#205072"
                  onPress={() =>
                    navigation.navigate('EditGroup', {groupId: group.id})
                  }
                />

                <TouchableOpacity onPress={bellPress}>
                  {bellValue ? (
                    <Image
                      source={require('../Assets/Images/bell.png')}
                      style={{height: 24, width: 24}}
                    />
                  ) : (
                    <Image
                      source={require('../Assets/Images/closebell.png')}
                      style={{height: 24, width: 24}}
                    />
                  )}
                </TouchableOpacity>
                <Icon
                  name={'trash'}
                  size={21}
                  color="#205072"
                  onPress={() => dispatch(deleteGroup(group.id))}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: 15,
                }}>
                <TouchableOpacity onPress={infoPress}>
                  <Image
                    source={require('../Assets/Images/infoBlue.png')}
                    style={{
                      height: 15,
                      width: 15,
                    }}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../Assets/Images/boost.png')}
                  style={{
                    height: 61,
                    width: 61,
                    marginRight: 20,
                  }}
                />
              </View>
              <Button width={103} buttonText="Booster" />
            </View>
          ) : null}
          <Icon
            name={selectedGroupName == group.id ? 'chevron-up' : 'chevron-down'}
            size={30}
            color="#205072"
            onPress={onPress}
            style={[selectedGroupName ? {marginTop: 0} : {marginTop: -5}]}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 170,
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
  boostContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingTop: '5%',
    backgroundColor: '#fff',
    marginTop: -18,
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 3,
    shadowRadius: 6,
    elevation: 2,
  },
  imageStyle: {
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
    left: 3,
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default GroupCard;
