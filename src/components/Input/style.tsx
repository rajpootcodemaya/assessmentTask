import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export default StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: ms(1),
    width: '100%',
    height: ms(35),
    bottom: ms(5),
    justifyContent: 'center',
  },
  Input_txt: {
    fontSize: ms(14),
    lineHeight: ms(22),
    color: 'gray',
    flex: 1,
    padding: 0,
    height: ms(25),
  },
  inputBox: {
    fontSize: ms(16),
  },
});
