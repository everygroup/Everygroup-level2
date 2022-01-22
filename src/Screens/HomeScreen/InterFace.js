import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icons from 'react-native-vector-icons/Ionicons';
import MessangerModal from './MessangerModal';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {updateTutorialStatus} from '../../../Slice/AuthReducer';
import {getRandomeList} from '../../../Slice/RandomeReducer';

function Interface(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalValue, setModalValue] = useState(false);
  const [tutorialStatus, setTutorialStatus] = useState('');
  const [systemLang, setSystemLang] = useState('');
  const [animation] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: -60,
          duration: 1500,
          delay: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 1000,
      },
    ).start();
  };

  useEffect(() => {
    getStatus();
    startAnimation();
  }, []);

  const getStatus = async () => {
    setTutorialStatus(await AsyncStorageLib.getItem('tutorial'));
    setSystemLang(await AsyncStorageLib.getItem('systemLang'));
  };

  useEffect(() => {
    dispatch(getRandomeList());
  }, []);

  const {randomeList, error, loading} = useSelector(state => {
    return state.RandomeReducer;
  });

  const updateStatus = async () => {
    setTutorialStatus('True');
    dispatch(updateTutorialStatus());
    await AsyncStorageLib.setItem('tutorial', 'True');
  };

  console.log(randomeList, 'lang');

  return (
    <View style={{flex: 1, backgroundColor: '#dcdcdc'}}>
      <MessangerModal
        modalValue={modalValue}
        closeModal={() => setModalValue(false)}
      />
      <ScrollView
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y;

          if (scrolling > 250) {
            updateStatus();
          }
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        decelerationRate="fast">
        {randomeList.map(item => {
          return (
            <View
              style={{height: height}}
              pointerEvents={tutorialStatus == 'False' ? 'none' : 'auto'}>
              <View
                style={[
                  styles.child,
                  {
                    backgroundColor:
                      tutorialStatus == 'True' ? '#fff' : 'rgb(190,191,191)',
                    paddingTop: 20,
                  },
                ]}>
                <View style={styles.subContainer}>
                  <View style={styles.header}>
                    <Icons
                      name={'close'}
                      color="#EF3E36"
                      size={35}
                      onPress={() => navigation.navigate('Dashboard')}
                    />

                    <TouchableWithoutFeedback
                      onPress={() => setModalValue(!modalValue)}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                          style={{
                            color: '#205072',
                            fontSize: 18,
                            fontFamily: FontStyle.MontBold,
                          }}>
                          Filter
                        </Text>
                        <Entypo name="chevron-down" size={30} color="#205072" />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={[styles.subHeader]}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('OtherUserScreen')}
                      style={{
                        backgroundColor: '#FF6600',
                        padding: 10,
                        borderRadius: 8,
                      }}>
                      <Text
                        style={{color: '#fff', fontFamily: FontStyle.MontBold}}>
                        {item.owner_name}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 6, borderRadius: 12}}>
                      <Image
                        style={{height: 50, width: 50, resizeMode: 'contain'}}
                        source={
                          item.group_type === 'whatsapp'
                            ? require('../../Assets/Images/whatsapp.png')
                            : item.group_type === 'snapchat'
                            ? require('../../Assets/Images/snapchat.png')
                            : item.group_type === 'telegram'
                            ? require('../../Assets/Images/telegram.png')
                            : item.group_type === 'line'
                            ? require('../../Assets/Images/line.png')
                            : null
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.groupName}>{item.title}</Text>
                <View style={styles.categoryContainer}>
                  {item.categories.map((categories, index) => (
                    <View
                      style={{
                        backgroundColor: '#205072',
                        height: 20,
                        minWidth: 50,
                        maxWidth: 'auto',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        borderRadius: 5,
                        paddingHorizontal: 5,
                      }}>
                      <Text key={index.toString()} style={styles.category}>
                        {categories.category}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.hashtagContainer}>
                  {item.tags.map(tags => (
                    <Text
                      style={{
                        color: '#FFA420',
                        margin: 3,
                        fontFamily: FontStyle.MontMedium,
                        fontSize: 14,
                      }}>
                      {tags}
                    </Text>
                  ))}
                </View>

                <Text
                  style={{
                    color: '#205072',
                    fontSize: 15,
                    marginTop: 15,
                    marginLeft: 18,
                    fontFamily: FontStyle.MontMedium,
                  }}>
                  {item.description}
                </Text>
                {tutorialStatus == 'False' ? (
                  <View
                    style={{
                      alignSelf: 'flex-end',
                      flexDirection: 'row',
                      height: 180,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                    }}>
                    <Image
                      source={require('../../Assets/Images/arrowanimation.png')}
                      style={{
                        height: 39,
                        width: 26,
                        top: 10,
                        right: -15,
                        resizeMode: 'contain',
                        alignSelf: 'flex-start',
                      }}
                    />
                    <Animated.Image
                      source={require('../../Assets/Images/handanimation.png')}
                      style={{
                        height: 110,
                        width: 88,
                        marginRight: 30,
                        marginTop: 40,
                        resizeMode: 'contain',
                        transform: [{translateY: animation}],
                      }}
                    />
                  </View>
                ) : null}
                <View style={styles.verticalIcons}>
                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/share.png')}
                      style={{
                        height: 22,
                        width: 22,
                        resizeMode: 'contain',
                        marginVertical: 10,
                        right: 5,
                      }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/arrowBlank.png')}
                      style={{
                        height: 22,
                        width: 22,
                        resizeMode: 'contain',
                        right: 5,
                        marginVertical: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/mediaArrow.png')}
                      style={{
                        height: 38,
                        width: 34,
                        resizeMode: 'contain',
                        marginVertical: 10,
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../Assets/Images/setting.png')}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        marginVertical: 10,
                        right: 5,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <LinearGradient
                colors={
                  item.group_type == 'line'
                    ? ['#08C719', '#adebad']
                    : item.group_type == 'snapchat'
                    ? ['#FFFC00', '#ffffb3']
                    : item.group_type == 'whatsapp'
                    ? ['#08C719', '#9dfba5']
                    : item.group_type == 'telegram'
                    ? ['#058acd', '#9cdcfc']
                    : ['#FFFC00', '#ffffb3']
                }
                style={styles.button}>
                <Text
                  style={{
                    color: item.group_type == 'snapchat' ? '#205072' : '#fff',
                    fontFamily: FontStyle.MontBold,
                    fontSize: 19,
                  }}>
                  Beitreten
                </Text>
              </LinearGradient>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  child: {
    height: height * 0.98,
    backgroundColor: 'gray',
  },

  button: {
    backgroundColor: '#25D366',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    width: 224,
    height: 45,
    bottom: height * 0.12,
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
    fontSize: 12,
  },
  groupName: {
    fontSize: 25,
    color: '#205072',
    fontFamily: FontStyle.MontBold,
    marginTop: 25,
    marginLeft: 25,
  },
  subContainer: {
    width: '100%',
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
    // backgroundColor: 'green',
  },
  subHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },
});

export default Interface;
