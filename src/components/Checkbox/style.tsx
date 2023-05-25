import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    height: ms(21),
    width: ms(21),
    borderRadius: ms(4),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: ms(1),
    borderColor: 'gray',
  },
  icon: {
    height: ms(14),
    width: ms(14),
    resizeMode: 'contain',
  },
});
