import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontStyle from '../../Assets/Fonts/FontStyle';

function Interface(props) {
  const navigation = useNavigation();
  const [groupArray] = useState([
    {
      groupName: 'Nordsee Gruppe 1',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['test', 'test', 'test', 'test', 'test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'snapchat',
    },
    {
      groupName: 'Nordsee Gruppe 2',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['test', 'test', 'test', 'test', 'test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'whatsapp',
    },
    {
      groupName: 'Nordsee Gruppe 3',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['test', 'test', 'test', 'test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'line',
    },
    {
      groupName: 'Nordsee Gruppe 4',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['test', 'test', 'test', 'test', 'test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'telegram',
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SwiperFlatList
        index={0}
        showPagination={false}
        data={groupArray}
        vertical={true}
        renderItem={({item}) => (
          <View
            style={[styles.child, {backgroundColor: '#fff', paddingTop: 10}]}>
            <View style={styles.subContainer}>
              <View style={styles.header}>
                <Entypo
                  name="cross"
                  size={35}
                  color="#FF0000"
                  onPress={() => navigation.navigate('Dashboard')}
                />
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: '#205072',
                      fontSize: 16,
                      fontFamily: FontStyle.MontBold,
                    }}>
                    Filter
                  </Text>
                  <Entypo name="chevron-down" size={30} color="#205072" />
                </TouchableOpacity>
              </View>
              <View style={styles.subHeader}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FF6600',
                    padding: 10,
                    borderRadius: 8,
                  }}>
                  <Text style={{color: '#fff', fontFamily: FontStyle.MontBold}}>
                    Superman98
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 6, borderRadius: 12}}>
                  <Image
                    style={{height: 50, width: 50, resizeMode: 'contain'}}
                    source={
                      item.socialGroup === 'whatsapp'
                        ? require('../../Assets/Images/whatsappLine.png')
                        : item.socialGroup === 'snapchat'
                        ? require('../../Assets/Images/snapchatLine.png')
                        : item.socialGroup === 'telegram'
                        ? require('../../Assets/Images/telegramLine.png')
                        : item.socialGroup === 'line'
                        ? require('../../Assets/Images/lineLine.png')
                        : null
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.groupName}>{item.groupName}</Text>
            <View style={styles.categoryContainer}>
              {item.category.map((item, index) => (
                <View
                  style={{
                    backgroundColor: '#205072',
                    height: 30,
                    minWidth: 50,
                    maxWidth: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 5,
                    borderRadius: 10,
                  }}>
                  <Text key={index.toString()} style={styles.category}>
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.hashtagContainer}>
              {item.hashtagData.map(item => (
                <Text
                  style={{
                    color: '#FFA420',
                    margin: 3,
                    fontFamily: FontStyle.MontMedium,
                  }}>
                  #{item}
                </Text>
              ))}
            </View>

            <Text
              style={{
                color: '#205072',
                fontSize: 13,
                marginTop: 15,
                marginLeft: 18,
                fontFamily: FontStyle.MontMedium,
              }}>
              {item.description}
            </Text>
            <View style={styles.verticalIcons}>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={30} color="#205072" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../Assets/Images/whatsappLine.png')}
                  style={{height: 35, width: 28, marginTop: 8}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../Assets/Images/whatsappLine.png')}
                  style={{height: 45, width: 32, marginTop: 8}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="dots-three-horizontal"
                  color="#205072"
                  size={30}
                  style={{marginTop: 5}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: '#fff',
            fontWeight: '900',
          }}>
          Beitreten
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  child: {
    height,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: '#25D366',
    alignSelf: 'center',
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 12,
    paddingBottom: 15,
    borderRadius: 22,
  },
  verticalIcons: {
    position: 'absolute',
    right: 10,
    bottom: 150,
    alignItems: 'center',
  },
  hashtagContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  category: {
    color: '#fff',
    fontSize: 10,
    fontFamily: FontStyle.MontBold,
  },
  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 30,
  },
  groupName: {
    fontSize: 25,
    color: '#205072',
    fontFamily: FontStyle.MontBold,
    marginTop: 25,
    marginLeft: 25,
  },
  subContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },
});

export default Interface;
