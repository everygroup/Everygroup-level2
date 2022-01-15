import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Header from '../../Common/Header';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GroupCard from '../../Common/GroupCard';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {favouriteUser} from '../../../Slice/FavouriteUserReducer';
const OtherUserScreen = ({route}) => {
  const {otherUserId, otherUserName} = route.params;
  const dispatch = useDispatch();
  const [bouncy, setBouncy] = useState(new Animated.Value(0));
  const [starValue, setStarValue] = useState(false);
  const [groupArray] = useState([
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'snapchat',
    },
  ]);

  const navigation = useNavigation();

  const submitReport = () => {
    dispatch(favouriteUser(otherUserId));
  };

  const {loading, error, value} = useSelector(state => {
    console.log(state, 'stae');
    return state.FavouriteUserReducer;
  });

  useEffect(() => {
    if (value == 'success') {
      triggerBouncy();
    }
  }, [value]);

  const triggerBouncy = () => {
    setStarValue(true);
    Animated.spring(bouncy, {
      toValue: 2,
      friction: 3,
      useNativeDriver: true,
    }).start(() => {
      bouncy.setValue(0);
    });
  };

  const bouncyView = bouncy.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0.8, 1],
  });
  return (
    <View style={{paddingTop: '21%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      {error ? alert(error) : null}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
          marginVertical: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            width: '80%',
          }}>
          <Text
            style={{
              color: '#205072',
              fontSize: 20,
              fontFamily: FontStyle.MontMedium,
            }}>
            Alle Gruppen von:
          </Text>
          <Text
            style={{
              color: '#205072',
              fontSize: 24,
              fontFamily: FontStyle.MontBold,
            }}>
            {otherUserName}
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={() => submitReport()}>
          <Animated.View style={{transform: [{scale: bouncyView}]}}>
            <Icon name="star" size={30} color={'#FFCC00'} solid={starValue} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>

      <FlatList
        data={groupArray}
        showsVerticalScrollIndicator={false}
        renderItem={({item: group}) => {
          return <GroupCard group={group} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyleSecond: {
    height: 24,
    width: 19,
    resizeMode: 'contain',
  },
});

export default OtherUserScreen;
