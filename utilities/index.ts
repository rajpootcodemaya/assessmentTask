import {Platform, Alert, Dimensions, Keyboard} from 'react-native';
import Snackbar from 'react-native-snackbar';

export const getDeviceWidth = () => Math.round(Dimensions.get('window').width);

export const getDeviceHeight = () =>
  Math.round(Dimensions.get('window').height);

export const getPageLimit = (_: any) => 10;

export const isFieldEmpty = (text: string) => text === '' || text == null;

export const isValidEmail = (email: string) => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@\w+([\.-]?\w+)*(\.\w{2,3})+$/; ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === true) {
    return true;
  }
  return false;
};

export const isValidPasswordLength = (password: string) => {
  console.log(password);
  if (password.length >= 8) {
    return true;
  }

  return false;
};
export const isValidPassword = (password: string) => {
  console.log('sdfsfs', password);
  let regX = '^(?=.*[A-Z])(?=.*d).+$';

  if (password.match(regX)) {
    console.log(true);
    return true;
  }

  return false;
};

export const isValidPhoneNumber = (phoneNo: any) => {
  if (phoneNo?.length < 10) {
    return false;
  }
  return true;
};

export const isValidComparedPassword = (
  password: string,
  confirmPassword: string,
) => password === confirmPassword;

export const getOS = () => Platform.OS;

export const showAlert = (message: string) => {
  Alert.alert(
    'assignment',
    message,
    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    {cancelable: false},
  );
};

export const showAlertWithCallBack = (
  message: string,
  onYesClick: () => void,
) => {
  Alert.alert(
    'Assignment',
    message,
    [
      {text: 'No'},
      {
        text: 'Yes',
        onPress: () => {
          onYesClick();
        },
      },
    ],
    {cancelable: false},
  );
};

export const showSnackBar = (message: string) => {
  Keyboard.dismiss();
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    textColor: '#fff',
    backgroundColor: '#0D5ACC',
  });
};

export const ErrorshowSnackBar = (message: string) => {
  Keyboard.dismiss();
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    textColor: '#fff',
    backgroundColor: '#E24B4A',
  });
};

export const showSnackBarWithCallBack = (
  msg: string,
  onOkClick: () => void,
) => {
  Alert.alert(
    '',
    msg,
    [
      {
        text: 'OK',
        onPress: () => {
          onOkClick();
        },
      },
    ],
    {
      cancelable: false,
    },
  );
};
