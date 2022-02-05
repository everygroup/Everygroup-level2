import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import authReducer from './Slice/AuthReducer';
import checkReducer from './Slice/CheckReducer';
import ProfileReducer from './Slice/ProfileReducer';
import CategoryReducer from './Slice/CategoryReducer';
import LanguageReducer from './Slice/LanguageReducer';
import CreateGroupReducer from './Slice/CreateGroupReducer';
import UserGroupReducer from './Slice/UserGroupReducer';
import GroupDetailReducer from './Slice/GroupDetailReducer';
import SearchReducer from './Slice/SearchReducer';
import SearchResultReducer from './Slice/SearchResultReducer';
import FavouriteUserReducer from './Slice/FavouriteUserReducer';
import OtherUserGroupReducer from './Slice/OtherUserGroupReducer';
import ReportGroupReducer from './Slice/ReportGroupReducer';
import AllGroupListReducer from './Slice/AllGroupListReducer';
import FavouriteGroupReducer from './Slice/FavouriteGroupReducer';
import GetDeleteUserOptionReducer from './Slice/GetDeleteUserOptionReducer';
import DeleteUserReducer from './Slice/DeleteUserReducer';
import RandomeReducer from './Slice/RandomeReducer';
import ActivateUserReducer from './Slice/ActivateUserReducer';
import messaging from '@react-native-firebase/messaging';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';
import NetInfo from '@react-native-community/netinfo';
import InternetModal from './src/Common/InternetModal';

messaging()
  .hasPermission()
  .then(async enabled => {
    console.log(enabled, 'enable');
    if (enabled) {
      await messaging()
        .getToken()
        .then(token => {
          AsyncStorageLib.setItem('deviceToken', token);
        })
        .catch(error => {});
    }
  })
  .catch(error => {});

messaging().onMessage(async remoteMessage => {
  // console.log('A new FCM message arrived!', remoteMessage.notification);
  const {body, title} = remoteMessage.notification;
  PushNotification.localNotification({
    title: title,
    message: body, // (required)
  });
});

const store = configureStore({
  reducer: {
    user: authReducer,
    check: checkReducer,
    changeProfile: ProfileReducer,
    getCategory: CategoryReducer,
    getLanguage: LanguageReducer,
    createGroup: CreateGroupReducer,
    UserGroupReducer,
    GroupDetailReducer,
    SearchReducer,
    SearchResultReducer,
    FavouriteUserReducer,
    OtherUserGroupReducer,
    ReportGroupReducer,
    AllGroupListReducer,
    FavouriteGroupReducer,
    GetDeleteUserOptionReducer,
    DeleteUserReducer,
    RandomeReducer,
    ActivateUserReducer,
  },
});

const App = () => {
  const [networkStatus, setNetworkStatus] = useState();
  const [internetStatus, setInternetStatus] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(networkState => {
      console.log('Connection type - ', networkState.type);
      setNetworkStatus(networkState.isConnected);
    });
    requestUserPermission();
    // createNotificationListeners();
    messaging().onNotificationOpenedApp(remoteMessage => {
      // console.log('FIREBASE IOS Background', remoteMessage);
      // PushNotification.localNotification({
      //   title: data.title,
      //   message: data.message,
      //   // (required)
      // });
    });
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        // console.log('TOKEN:', token);
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);

        if (Platform.OS === 'ios') {
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        } else {
          handleNotification(notification);
        }
      },
      senderID: '1015187978976',
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      // console.log('Authorization status:', authStatus);
    }
  };

  // const createNotificationListeners = async () => {
  //   messageListener = messaging().onMessage(message => {
  //     console.log(JSON.stringify(message));
  //     var msg = message.notification.android;
  //     var data = msg._data;
  //     console.log(data);
  //     PushNotification.localNotification({
  //       title: msg.title,
  //       message: msg.body, // (required)
  //       date: new Date(Date.now() + 2 * 1000),
  //     });
  //   });
  // };

  useEffect(() => {
    setInternetStatus(true);
    setTimeout(() => {
      setInternetStatus(false);
    }, 2000);
  }, [networkStatus]);

  return (
    <Provider store={store}>
      <InternetModal
        modalValue={internetStatus}
        internetStatus={networkStatus}
      />
      <View style={{flex: 1}}>
        <RootNavigator />
      </View>
    </Provider>
  );
};

export default App;
