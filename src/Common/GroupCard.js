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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';
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
  return (
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
            left: '-6%',
            top: '-14%',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            height: 30,
          }}>
          <Text style={{fontSize: 16, color: '#205072'}}>
            {group.groupName}
          </Text>
          <Image
            source={require('../Assets/Images/back.png')}
            style={{width: 15, height: 19}}
          />
        </View>

        <FlatList
          horizontal={true}
          contentContainerStyle={{
            height: 22,
            width: '90%',
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
                <Text style={{color: '#fff', fontSize: 9}}>{item}</Text>
              </View>
            );
          }}
        />

        <FlatList
          horizontal={true}
          contentContainerStyle={{
            width: '90%',
            height: 22,
            minHeight: 20,
            maxHeight: 40,
          }}
          data={group.hashtagData}
          renderItem={({item}) => {
            return (
              <View style={{minWidth: 40, maxWidth: 'auto'}}>
                <Text style={{color: '#FFA420', fontSize: 11}}>{item}</Text>
              </View>
            );
          }}
        />
        <Text>{group.description}</Text>
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
            width: '100%',
            height: 29,
            alignSelf: 'center',
            borderRadius: 15,
            marginVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: group.socialGroup == 'snapchat' ? '#205072' : '#fff',
              fontFamily: FontStyle.MontBold,
              fontSize: 14,
            }}>
            BEITRETEN
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

                <Icon name={'pencil-alt'} size={30} color="#205072" />
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
    padding: '5%',
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
    // padding: '5%',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,

    elevation: 2,
  },
});

export default GroupCard;
