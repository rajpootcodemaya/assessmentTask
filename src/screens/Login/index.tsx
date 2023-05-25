import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ms} from 'react-native-size-matters';
import {Button, Checkbox, Input, Label} from '../../components';
import * as alerts from '../../constants/alerts';
import {
  isFieldEmpty,
  isValidEmail,
  isValidPassword,
  isValidPasswordLength,
  showSnackBar,
} from '../../../utilities/index';
import styles from './style';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {SignInUser} from '../../redux/slices/Auth/signInApi';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../navigation/appRouteConfig';
import {useNavigation} from '@react-navigation/native';

type AuthScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  'SignUp'
>;

const Login = (props: any) => {
  const Navigation = useNavigation<AuthScreenNavigationProp>();
  const [button_loading, setButton_loading] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [userTrue, setUserTrue] = useState(true);
  const [userPassTrue, setUserPassTrue] = useState(true);
  const [tnC, setTnc] = useState<boolean>(false);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const onChangeText = (name: any, value: any) => {
    name == 'Email' && setEmail(value);
    name == 'Password' && setPassword(value);
  };

  const onLogin = () => {
    Keyboard.dismiss();
    var Isvalid = false;
    setButton_loading(true);

    if (!isFieldEmpty(Email) || !isFieldEmpty(Password)) {
      if (!isFieldEmpty(Email)) {
        if (isValidEmail(Email)) {
          Isvalid = true;
        } else {
          setButton_loading(false);
          showSnackBar(alerts.IS_VALID_EMAIL);
          Isvalid = false;
          return;
        }
        if (!isFieldEmpty(Password)) {
          if (isValidPasswordLength(Password)) {
            if (isValidPassword(Password)) {
              Isvalid = true;
            } else {
              setButton_loading(false);
              showSnackBar('Enter valid Password');
              Isvalid = false;
              return;
            }
          } else {
            setButton_loading(false);
            showSnackBar(alerts.PASSWORD_LENGTH_INVALID);
            Isvalid = false;
            return;
          }
        } else {
          setButton_loading(false);
          showSnackBar(alerts.ENTER_PASSWORD);
          Isvalid = false;
          return;
        }
      } else {
        setButton_loading(false);
        showSnackBar(alerts.ENTER_EMAIL);
        Isvalid = false;
        return;
      }
    } else {
      setButton_loading(false);
      showSnackBar(alerts.ENTER_EMAIL_PASSWORD);
      Isvalid = false;
      return;
    }

    if (Isvalid) {
      Keyboard.dismiss();
      setButton_loading(false);
      let cred = {Email, Password};
      dispatch(SignInUser({email: Email, password: Password}));
    }
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <KeyboardAwareScrollView>
          <View style={{flex: 1}}>
            <View style={styles.headContainer}>
              <Text style={styles.Login_txt}>Log In</Text>
            </View>
            <View style={styles.Form_container}>
              <View style={styles.SubContainer_SideSpace}>
                <Label value="Email Id" IsTouchabledisabled={true} />
                <Input
                  name="Email"
                  placeholder="EmailId@gmail.com"
                  autoCapitalize="none"
                  value={Email}
                  onChangeText={(value: any) => {
                    onChangeText('Email', value);
                    setUserTrue(false);
                  }}
                  keyboardType="email-address"
                  selectionColor={'#626C8C'}
                  caretHidden={false}
                  editable={true}
                />
                <View style={{height: ms(30)}} />
                <Label value={'Password'} IsTouchabledisabled={true} />
                <Input
                  name="Password"
                  placeholder="Password"
                  autoCapitalize="none"
                  value={Password}
                  onChangeText={(value: any) => {
                    onChangeText('Password', value);
                    setUserPassTrue(false);
                  }}
                  secureTextEntry={true}
                  selectionColor={'#626C8C'}
                  returnKeyType="go"
                  onSubmitEditing={onLogin}
                />
                <Checkbox
                  icon={require('../../assets/check.png')}
                  isChecked={tnC}
                  onClick={() => setTnc(!tnC)}
                />
                <Label
                  value="Sign Up"
                  IsTouchabledisabled={false}
                  LabelContainerStyle={{
                    marginTop: ms(10),
                    alignSelf: 'flex-end',
                  }}
                  onPress={() => {
                    Navigation.navigate('SignUp');
                  }}
                  LabeltxtStyle={{color: 'blue', fontSize: 14}}
                />
                <View style={styles.LoginBtn_container}>
                  <Button
                    disabled={
                      button_loading ||
                      (Email === '' && Password === '' && !tnC)
                    }
                    ButtonName="Log In"
                    onPress={onLogin}
                    Button_background={
                      Email && Password && tnC ? {} : {opacity: 0.5}
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
