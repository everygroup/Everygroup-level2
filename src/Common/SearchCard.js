import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  Easing,
  Platform,
  TouchableOpacity,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {
  deleteSearch,
  updateSearchNotification,
} from '../../Slice/SearchReducer';

const SearchCard = ({data, onPress, bellPress}) => {
  const dispatch = useDispatch();
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(310));
  const [deleteId, setDeleteId] = useState();

  const deleteSearchData = searchId => {
    setDeleteId(searchId);
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      animatedHeight.setValue(310);
      dispatch(deleteSearch(searchId));
    });
  };

  return (
    <Animated.View
      style={[
        styles.containerStyle,
        {height: data.id == deleteId ? animatedHeight : null},
      ]}>
      <View style={[styles.spacing, {paddingTop: '2.5%'}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Suchbegriff:</Text>
          <Icons
            name={'close'}
            color="#EF3E36"
            light
            size={26}
            onPress={() => deleteSearchData(data.id)}
          />
        </View>
        <Text style={styles.descriptionText}>{data.query}</Text>
      </View>
      <View style={styles.spacing}>
        <Text style={styles.titleText}>Messenger:</Text>
        <FlatList
          numColumns={4}
          data={data.group_type}
          renderItem={({item: groupType}) => {
            return (
              <Text key={groupType} style={styles.descriptionText}>
                {groupType},
              </Text>
            );
          }}
        />
      </View>
      <View style={styles.spacing}>
        <Text style={styles.titleText}>Kategorie:</Text>
        <FlatList
          numColumns={4}
          data={data.group_category}
          listKey={(item, index) => index.toString()}
          renderItem={({item: groupCategory}) => {
            return (
              <Text key={groupCategory} style={styles.descriptionText}>
                {groupCategory},
              </Text>
            );
          }}
        />
      </View>
      <View style={styles.spacing}>
        <Text style={styles.titleText}>Sprache:</Text>
        <FlatList
          numColumns={4}
          data={data.group_language}
          listKey={(item, index) => index.toString()}
          renderItem={({item: language}) => {
            return <Text style={styles.descriptionText}>{language},</Text>;
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#F2F2F2',
          height: 50,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '3%',
          width: '100%',
        }}>
        <Text style={styles.titleText}>Benachrichtigung</Text>

        <TouchableOpacity
          onPress={() =>
            dispatch(
              updateSearchNotification({
                id: data.id,
                value: !data.notification,
              }),
            )
          }>
          {data.notification ? (
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
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
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
  titleText: {
    fontSize: 18,
    color: '#205072',
    fontFamily: FontStyle.MontBold,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#205072',
  },
  descriptionText: {
    fontSize: 17,
    color: '#205072',
    fontFamily: FontStyle.MontMedium,
  },
  spacing: {paddingHorizontal: '2.5%', paddingBottom: '2.5%'},
});

export default SearchCard;
