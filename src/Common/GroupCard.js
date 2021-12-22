import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
const GroupCard = ({
  group,
  boosterValue,
  onPress,
  selectedGroupName,
  eyePress,
  bellPress,
  eyeValue,
  bellValue,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View>
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
              borderTopLeftRadius: 7,
              borderBottomRightRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
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
          <TouchableOpacity onPress={() => navigation.navigate('GroupDetail')}>
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
                  color: '#205072',
                  fontFamily: FontStyle.MontExtBold,
                }}>
                {group.groupName}
              </Text>
              <Icon name="bookmark" color="#B9B9B9" size={22} />
            </View>

            <FlatList
              horizontal={true}
              contentContainerStyle={{
                height: 22,
                width: '90%',
                paddingHorizontal: '5%',
              }}
              data={group.category}
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
                      {item}
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
              data={group.hashtagData}
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
            onPress={() =>
              Linking.openURL(
                'https://chat.whatsapp.com/K1qNdhQvHgoD0cUj1DoEQs',
              )
            }
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
                color: group.socialGroup == 'snapchat' ? '#205072' : '#fff',
                fontFamily: FontStyle.MontBold,
                fontSize: 16,
              }}>
              BEITRETEN
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: '5%',
            height: 22,
            top: -21,
            shadowColor: 'grey',
            backgroundColor: '#fff',
            width: 62,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,

            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.27,
            shadowRadius: 2.65,
            elevation: 2,
          }}>
          <Text
            style={{
              fontFamily: FontStyle.MontExtBold,
              fontSize: 9,
              color: '#205072',
            }}>
            Deutch
          </Text>
        </View>
      </View>
      {boosterValue ? (
        <View
          style={[
            styles.boostContainerStyle,
            {height: group.groupId == selectedGroupName ? 200 : 50},
          ]}>
          {selectedGroupName == group.groupId ? (
            <View style={{width: '100%', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                }}>
                <Icon name={'redo-alt'} size={30} color="#C4C6C8" />

                <Icon
                  name={eyeValue ? 'eye' : 'eye-slash'}
                  size={30}
                  color="#205072"
                  onPress={eyePress}
                />

                <Icon
                  name={'pencil-alt'}
                  size={30}
                  color="#205072"
                  onPress={() => navigation.navigate('EditGroup')}
                />
                <Icon
                  name={bellValue ? 'bell' : 'bell-slash'}
                  size={30}
                  color="#205072"
                  solid
                  onPress={bellPress}
                />
                <Icon name={'trash'} size={30} color="#205072" />
              </View>
              <Image
                source={require('../Assets/Images/boost.png')}
                style={{
                  height: 61,
                  width: 61,
                  alignSelf: 'center',
                  marginVertical: 15,
                }}
              />
              <Button width={103} buttonText="Booster" />
            </View>
          ) : null}
          <Icon
            name={
              selectedGroupName == group.groupId ? 'chevron-up' : 'chevron-down'
            }
            size={30}
            color="#205072"
            onPress={onPress}
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
    backgroundColor: '#F3F3F3',
    top: -25,
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: '#F3F3F3',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,

    elevation: 2,
  },
  imageStyle: {
    height: 24,
    width: 24,
    alignSelf: 'flex-start',
    left: 3,
  },
});

export default GroupCard;
