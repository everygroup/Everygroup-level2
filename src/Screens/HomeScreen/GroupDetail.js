import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import Header from '../../Common/Header';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import LinearGradient from 'react-native-linear-gradient';
import SmallCard from '../../Common/SmallCard';
import {useDispatch, useSelector} from 'react-redux';
import {getGroupDetail} from '../../../Slice/GroupDetailReducer';

const GroupDetail = ({route}) => {
  const {groupId} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [bellValue, setBellValue] = useState(false);
  const [groupType] = useState('snapchat');

  const [otherGroup, setOtherGroup] = useState([
    {
      description: 'Eine coole Gruppe',
      socialGroup: 'snapchat',
    },
    {
      description: 'Nordsee Gruppe fur dies und das',
      socialGroup: 'whatsapp',
    },
    {
      description: 'Die Masterchill Gruppe zu plappern',
      socialGroup: 'line',
    },
    {
      description: 'Die Masterchill Gruppe zu plappern',
      socialGroup: 'telegram',
    },
  ]);

  const handleLoadMore = () => {
    setOtherGroup(prevValue => [...prevValue, ...otherGroup]);
  };

  useEffect(() => {
    dispatch(getGroupDetail(groupId));
    console.log(groupId, 'groupid');
  }, []);

  const {groupDetail, error, loading} = useSelector(state => {
    console.log(state.GroupDetailReducer, 'rohit aroar');
    return state.GroupDetailReducer;
  });
  console.log(groupDetail, 'deteil');
  return (
    <View style={{paddingTop: '21%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={
            groupDetail.group_type == 'line'
              ? ['#08C719', '#adebad']
              : groupDetail.group_type == 'snapchat'
              ? ['#FFFC00', '#ffffb3']
              : groupDetail.group_type == 'whatsapp'
              ? ['#08C719', '#9dfba5']
              : groupDetail.group_type == 'telegram'
              ? ['#058acd', '#9cdcfc']
              : ['#FFFC00', '#ffffb3']
          }
          style={styles.titelContainer}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: '2.5%',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../Assets/Images/back.png')}
                style={{width: 23, height: 23, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: FontStyle.MontBold,
                color: '#205072',
              }}>
              {groupDetail.title}
            </Text>
            <Image
              source={require('../../Assets/Images/snapchatLine.png')}
              style={{height: 44, width: 44, bottom: 30}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              top: 30,
              right: 10,
              alignItems: 'center',
            }}>
            <Text style={[styles.textStyle, {color: '#FF0000'}]}>18+ </Text>
            <View
              style={{
                width: 1,
                height: 15,
                marginLeft: 5,
                backgroundColor: '#205072',
              }}
            />
            <Text style={styles.textStyle}> Trends </Text>

            <Image
              source={require('../../Assets/Images/starBlue.png')}
              style={styles.imageStyle}
            />
            <View
              style={{
                width: 1,
                height: 15,
                marginLeft: 5,
                backgroundColor: '#205072',
              }}
            />
            <Text style={styles.textStyle}> Instagram </Text>
            <Image
              source={require('../../Assets/Images/instaBlue.png')}
              style={styles.imageStyle}
            />
            <View
              style={{
                width: 1,
                height: 15,
                marginLeft: 5,
                backgroundColor: '#205072',
              }}
            />
            <Text style={styles.textStyle}> Influencer</Text>
            <Image
              source={require('../../Assets/Images/starMenBlue.png')}
              style={styles.imageStyle}
            />
          </View>
        </LinearGradient>
        <View style={{paddingHorizontal: '1.5%'}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: '2.5%',
            }}>
            <FlatList
              data={groupDetail.categories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item: category}) => {
                return (
                  <View style={styles.categoryContainer}>
                    <Text
                      style={[
                        styles.textStyle,
                        {fontFamily: FontStyle.MontBold, color: '#fff'},
                      ]}>
                      {category.category}
                    </Text>
                  </View>
                );
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('OtherUserScreen')}>
              <LinearGradient
                colors={['#FFA420', '#FE7027']}
                style={[styles.linearGradient]}>
                <Text style={styles.buttonText}>{}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: '2.5%'}}>
            {groupDetail.languages ? (
              <Text style={[styles.textStyle, {fontSize: 13}]}>
                {groupDetail.languages.map(el => (
                  <Text>{el.language},</Text>
                ))}
              </Text>
            ) : null}
            <FlatList
              data={groupDetail.tags}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item: tags}) => {
                return (
                  <View style={{width: 36, height: 20}}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: FontStyle.MontMedium,
                        color: '#FFA420',
                      }}>
                      {tags}
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
                marginVertical: '7%',
              }}>
              {groupDetail.description}
            </Text>
            <View
              style={{
                backgroundColor:
                  groupDetail.group_type == 'snapchat'
                    ? '#FFFC00'
                    : groupDetail.group_type == 'whatsapp'
                    ? 'lightgreen'
                    : groupDetail.group_type == 'line'
                    ? 'green'
                    : groupDetail.group_type == 'telegram'
                    ? '#0088CC'
                    : 'black',
                width: '90%',
                height: 29,
                alignSelf: 'center',
                borderRadius: 15,
                marginVertical: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: FontStyle.MontBold,
                  color: '#205072',
                }}>
                BEITRETEN
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: '10%',
                justifyContent: 'space-between',
                width: '80%',
                alignSelf: 'center',
              }}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../Assets/Images/flagBlue.png')}
                  style={styles.imageStyleSecond}
                />
                <Text style={styles.textStyle}>Melden</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../Assets/Images/shareBlue.png')}
                  style={styles.imageStyleSecond}
                />
                <Text style={styles.textStyle}>Teilen</Text>
              </View>
              <View style={styles.verticalLine} />
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../Assets/Images/favoriteGrey.png')}
                  style={styles.imageStyleSecond}
                />
                <Text style={styles.textStyle}>Favorit</Text>
              </View>
            </View>
            <View
              style={{
                width: '90%',
                height: 122,
                backgroundColor: '#FFE4BC',
                alignSelf: 'center',
                borderRadius: 13,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: '5%',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: '2.5%',
                }}>
                <View />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('../../Assets/Images/infoBlue.png')}
                    style={{width: 11, height: 11, right: 5}}
                  />
                  <Text
                    style={{
                      fontSize: 23,
                      fontFamily: FontStyle.MontBold,
                      color: '#205072',
                    }}>
                    Booster
                  </Text>
                </View>
                <TouchableOpacity onPress={() => setBellValue(!bellValue)}>
                  {bellValue ? (
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../Assets/Images/arrowBlank.png')}
                    style={{width: 22, height: 26, resizeMode: 'contain'}}
                  />
                  <Text
                    style={{
                      fontFamily: FontStyle.MontBold,
                      color: '#205072',
                      fontSize: 13,
                    }}>
                    1x Boost
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../Assets/Images/booster5.png')}
                    style={{width: 22, height: 26, resizeMode: 'contain'}}
                  />
                  <Text
                    style={{
                      fontFamily: FontStyle.MontBold,
                      color: '#205072',
                      fontSize: 13,
                    }}>
                    5x Boost
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            alignSelf: 'center',
            marginTop: 140,
            marginBottom: 20,
          }}>
          Die Gruppen könnten dir auch gefallen
        </Text>
        <FlatList
          data={otherGroup}
          contentContainerStyle={{marginVertical: '2.5%'}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          onEndReached={handleLoadMore}
          onEndThreshold={0}
          renderItem={({item}) => {
            return <SmallCard group={item} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titelContainer: {
    backgroundColor: '#FFFC00',
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  textStyle: {
    fontFamily: FontStyle.MontExtBold,
    fontSize: 11,
    color: '#205072',
  },
  imageStyle: {
    height: 10,
    width: 10,
  },
  categoryContainer: {
    minWidth: 50,
    maxWidth: 'auto',
    height: 18,
    backgroundColor: '#205072',
    marginHorizontal: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearGradient: {
    borderRadius: 5,
    minWidth: 60,
    minHeight: 19,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: FontStyle.MontBold,
    textAlign: 'center',
    color: '#ffffff',
  },
  verticalLine: {
    height: 31,
    backgroundColor: '#205072',
    width: 1,
  },
  imageStyleSecond: {
    height: 24,
    width: 19,
    resizeMode: 'contain',
  },
});

export default GroupDetail;
