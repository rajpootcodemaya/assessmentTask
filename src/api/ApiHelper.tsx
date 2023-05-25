import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

export const getHeaders = (authToken: string) => ({
  'Content-Type': 'application/json',
  ...(authToken ? {Authorization: `Bearer ${authToken}`} : {}),
});

export const netStatus = (callback: any) => {
  NetInfo.fetch().then((state: any) => {
    callback(state.isConnected);
  });
};

export function FETCH(
  method: string,
  authToken: string,
  url: string,
  body: any = null,
  customHeaders: any = null,
) {
  return new Promise((resolve, reject) => {
    netStatus((isConnect: string) => {
      if (isConnect) {
        axios(url, {
          method,
          headers: {...getHeaders(authToken), ...customHeaders},
          ...(body ? {data: body} : {}),
        })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            console.log('fetch error', JSON.stringify(error));

            resolve(error.response);
          });
      } else {
        reject({
          message: 'Please check your internet connection and try again.',
        });
      }
    });
  });
}
