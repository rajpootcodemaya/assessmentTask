import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Input, Label} from '../../components';
import {ms} from 'react-native-size-matters';
import styles from './style';
import {useState} from 'react';
import {
  isFieldEmpty,
  isValidComparedPassword,
  isValidEmail,
  isValidPassword,
  isValidPasswordLength,
  showSnackBar,
} from '../../../utilities';
import * as alerts from '../../constants/alerts';
import {useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {SignUpUser} from '../../redux/slices/Auth/authApi';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../navigation/appRouteConfig';
import {useNavigation} from '@react-navigation/native';

type AuthScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParams,
  'Login'
>;

const SignUp = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const Navigation = useNavigation<AuthScreenNavigationProp>();

  const [button_loading, setButton_loading] = useState(false);

  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const HandleChange = (setState: (val: string) => void) => (val: string) => {
    setState(val);
  };

  const SignUP = () => {
    Keyboard.dismiss();
    var Isvalid = false;
    setButton_loading(true);

    if (
      !isFieldEmpty(email) ||
      !isFieldEmpty(password) ||
      !isFieldEmpty(confirmPassword)
    ) {
      if (!isFieldEmpty(email)) {
        if (isValidEmail(email)) {
          Isvalid = true;
        } else {
          setButton_loading(false);
          showSnackBar(alerts.IS_VALID_EMAIL);
          Isvalid = false;
          return;
        }
        if (!isFieldEmpty(password)) {
          if (isValidPasswordLength(password)) {
            if (isValidPassword(password)) {
              console.log('called');
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
          if (isValidComparedPassword(password, confirmPassword)) {
            Isvalid = true;
          } else {
            setButton_loading(false);
            showSnackBar(alerts.MATCH_PASSWORD);
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
      dispatch(SignUpUser({email: email, password: password}));
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
              <Text style={styles.Login_txt}>Sign Up</Text>
            </View>
            <View style={styles.Form_container}>
              <View style={styles.SubContainer_SideSpace}>
                <Label value="Email Id" IsTouchabledisabled={true} />
                <Input
                  name="Email"
                  placeholder="EmailId@gmail.com"
                  //   placeholderTextColor={c}
                  autoCapitalize="none"
                  value={email}
                  onChangeText={HandleChange(setEamil)}
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
                  value={password}
                  onChangeText={HandleChange(setPassword)}
                  secureTextEntry={true}
                  selectionColor={'#626C8C'}
                  returnKeyType="go"
                />
                <View style={{height: ms(30)}} />
                <Label value={'Confirm Password'} IsTouchabledisabled={true} />
                <Input
                  name="Confirm Password"
                  placeholder="Confirm Password"
                  autoCapitalize="none"
                  value={confirmPassword}
                  onChangeText={HandleChange(setConfirmPassword)}
                  secureTextEntry={true}
                  selectionColor={'#626C8C'}
                />

                <Label
                  value="Login"
                  IsTouchabledisabled={false}
                  LabelContainerStyle={{
                    marginTop: ms(10),
                    alignSelf: 'flex-end',
                  }}
                  onPress={() => {
                    Navigation.navigate('Login');
                  }}
                  LabeltxtStyle={{color: 'blue', fontSize: 14}}
                />
                <View style={styles.LoginBtn_container}>
                  <Button
                    disabled={
                      button_loading ||
                      (email === '' &&
                        password === '' &&
                        confirmPassword === '')
                    }
                    ButtonName="Sign Up"
                    onPress={SignUP}
                    Button_background={
                      email && password && confirmPassword ? {} : {opacity: 0.5}
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

export default SignUp;
