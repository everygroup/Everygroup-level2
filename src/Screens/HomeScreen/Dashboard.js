import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  NativeModules,
  Platform,
} from 'react-native';
import Header from '../../Common/Header';
import GroupCard from '../../Common/GroupCard';
import GradientCard from '../../Common/GradientCard';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {getCategory} from '../../../Slice/CategoryReducer';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {
  getAllGroup,
  getTrendingGroup,
} from '../../../Slice/AllGroupListReducer';
import MainLoader from '../../Common/MainLoader';

const {width, height} = Dimensions.get('screen');
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [trendingGroup, setTrendingGroup] = useState([]);

  const handleLoadMore = () => {
    setTrendingGroup(prevValue => [...prevValue, ...trendingData]);
  };

  const la =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  useEffect(() => {
    dispatch(getAllGroup());
    AsyncStorageLib.setItem(
      'systemLang',
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier,
    );

    dispatch(getCategory());
  }, []);

  // Redux code
  const {groupData, trendingData, error, loading} = useSelector(state => {
    return state.AllGroupListReducer;
  });

  const {createSuccess} = useSelector(state => {
    return state.createGroup;
  });
  useEffect(() => {
    dispatch(getTrendingGroup());
    if (createSuccess != '') {
      dispatch(getAllGroup());
    }
  }, [createSuccess]);
  useEffect(() => {
    setTrendingGroup(trendingData);
  }, [trendingData]);
  //////////////////////////////
  console.log(trendingData, 'groupData');
  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? '25%' : '15%',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <Header />

      {loading ? (
        <MainLoader heightValue={1.1} />
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: '10%'}}>
            <View style={{height: height * 0.3, backgroundColor: '#fff'}}>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: FontStyle.MontBold,
                    fontSize: 38,
                    color: '#205072',
                    left: 3,
                  }}>
                  Trends
                </Text>
                <Text
                  style={{
                    fontFamily: FontStyle.MontBold,
                    fontSize: 18,
                    color: '#205072',
                  }}>
                  Die beliebtesten Gruppen
                </Text>
              </View>
              <FlatList
                initialScrollIndex={2}
                onScrollToIndexFailed={info => {
                  const wait = new Promise(resolve => setTimeout(resolve, 500));
                  wait.then(() => {
                    flatList.current?.scrollToIndex({
                      index: info.index,
                      animated: true,
                    });
                  });
                }}
                getItemLayout={(data, index) => {
                  return {length: 131, offset: 131 * index, index};
                }}
                horizontal={true}
                data={trendingGroup}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  backgroundColor: '#fff',
                }}
                renderItem={({item: trending}) => {
                  return <GradientCard group={trending} />;
                }}
                onEndReached={handleLoadMore}
                onEndThreshold={0}
              />

              <View
                style={{
                  backgroundColor: '#FFA420',
                  height: 2,
                  width: '50%',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View style={{backgroundColor: '#fff'}}>
              <Text
                style={{
                  fontSize: 26,
                  color: '#205072',
                  fontFamily: FontStyle.MontBold,
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Neu hinzugefügt
              </Text>
              <ScrollView style={{paddingBottom: 20}}>
                {groupData.map(group => {
                  return <GroupCard group={group} />;
                })}
              </ScrollView>
              <TouchableOpacity style={styles.moreGroupButton}>
                <Text
                  style={{
                    fontFamily: FontStyle.MontBold,
                    fontSize: 14,
                    color: '#fff',
                  }}>
                  Mehr Gruppen
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Interface')}
            style={{
              position: 'absolute',
              bottom: '10%',
              alignSelf: 'flex-end',
              right: '8%',
            }}>
            <Image
              source={require('../../Assets/Images/group.png')}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  moreGroupButton: {
    backgroundColor: '#FFA420',
    width: 222,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default Dashboard;
