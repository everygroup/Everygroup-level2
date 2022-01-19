import React from 'react';
import {View, Text} from 'react-native';
import {HelperText} from 'react-native-paper';
import Styles from '../Screens/UserScreens/Style';

const ErrorText = ({error, errorMessage}) => {
  return (
    <View style={{width: '85%'}}>
      {error == true ? (
        <HelperText style={[Styles.helperText]} type="error">
          {errorMessage}
        </HelperText>
      ) : null}
    </View>
  );
};

export default ErrorText;
