import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Header from '../../Common/Header';
import Styles from './Style';
import EditInput from '../../Common/EditInput';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getGroupDetail} from '../../../Slice/GroupDetailReducer';
import {updateGroupDetail} from '../../../Slice/AddGroupReducer';

const EditGroup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // const [groupName, setGroupName] = useState('Nordsee Gruppe');
  const [category] = useState(['Dienstleistungen', 'Interessen', 'Unt']);

  const {groupDetail, error, loading} = useSelector(state => {
    console.log(state.AddGroupReducer, 'detail');
    // setGroupName(state.GroupDetailReducer.groupDetail.title);
    return state.AddGroupReducer;
  });

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Gruppe bearbeiten</Text>
        <View />
      </View>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <EditInput
          onChangeText={text => dispatch(updateGroupDetail({groupName: text}))}
        />
        <EditInput
          onChangeText={text => setGroupName(text)}
          value={groupDetail.group_link}
        />

        <View
          style={[
            styles.inputContainer,
            {flexDirection: 'row', alignItems: 'center'},
          ]}>
          <FlatList
            data={category}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    height: '100%',
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: FontStyle.MontBold,
                      fontSize: 17,
                      color: '#FFA420',
                    }}>
                    {item},
                  </Text>
                </View>
              );
            }}
          />
          <Icon name={'caretdown'} size={20} color="#205072" />
        </View>
        <EditInput
          height={140}
          multiline={true}
          placeholder="Hey, wir sind ein nette Gruppe"
          onChangeText={text =>
            dispatch(updateGroupDetail({description: text}))
          }
        />
        <EditInput placeholder="#test #test1 #test2 #test3 #test4" />
        <Text
          style={{
            fontSize: 17,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            width: '70%',
            textAlign: 'center',
          }}>
          Welche Sprache wird in dieser Gruppe gesprochen?
        </Text>
        <View
          style={[
            styles.inputContainer,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 17,
              color: '#BECCD6',
            }}>
            Sprache auswählen..
          </Text>
          <Icon name={'plus'} size={20} color="#BECCD6" />
        </View>
        <Text
          style={{
            fontSize: 17,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            width: '75%',
            textAlign: 'center',
          }}>
          Dürfen alle User der Gruppe beitreten, egal welche Sprache sie
          sprechen?
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <View style={[styles.buttonView, {backgroundColor: '#BECCD6'}]}>
            <Text
              style={{
                fontSize: 12,
                color: '#fff',
                fontFamily: FontStyle.MontBold,
              }}>
              Alle dürfen beitreten
            </Text>
          </View>
          <View style={styles.buttonView}>
            <Text
              style={{
                fontSize: 12,
                color: '#fff',
                fontFamily: FontStyle.MontBold,
              }}>
              Nur folgende Sprachen:
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.inputContainer,
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 17,
              color: '#BECCD6',
            }}>
            Sprache auswählen..
          </Text>
          <Icon name={'plus'} size={20} color="#BECCD6" />
        </View>
        <View
          style={{
            backgroundColor: '#205072',
            height: 43,
            width: '50%',
            borderRadius: 11,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              color: '#fff',
              fontSize: 19,
            }}>
            Gruppe ändern
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '37%',
    height: 35,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  inputContainer: {
    height: 40,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 7,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
    paddingHorizontal: '2.5%',
    marginVertical: '2.5%',
  },
});

export default EditGroup;
