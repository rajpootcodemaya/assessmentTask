import {ScaledSheet, ms} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    height: ms(50),
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  headerTxt: {textAlign: 'center', fontSize: ms(20), color: 'white'},
  bodyContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  bottomButton: {
    height: ms(50),
    width: ms(100),
    borderRadius: ms(10),
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtonContainer: {flex: 1, justifyContent: 'flex-end', padding: ms(10)},
});
