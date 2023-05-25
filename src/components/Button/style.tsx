import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export default StyleSheet.create({
  Button_background: {
    backgroundColor: 'gray',
    borderRadius: ms(4),
    marginBottom: ms(24),
    width: ms(95),
  },
  Button_txt: {
    paddingVertical: ms(8),
    textAlign: 'center',
    color: 'white',
    fontSize: ms(16),
    lineHeight: ms(19),
  },
  SideSpace: {},
});
