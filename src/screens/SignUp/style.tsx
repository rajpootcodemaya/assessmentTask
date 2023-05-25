import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  bgImg: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  logo: {
    height: '29@vs',
    width: '233@s',
  },
  headContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    height: '130@vs',
    paddingTop: '40@s',
  },
  headContainerLogin: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: '130@vs',
  },
  centerContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    paddingBottom: '20@ms',
    flex: 1,
  },
  textContainer: {
    marginTop: 37,
  },
  headerText: {
    fontSize: '20@ms',
    color: 'white',
  },

  bottomButton: {
    height: '36@vs',
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  HeaderContainer: {
    backgroundColor: 'white',
    height: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  Logo: {
    width: '180@ms',
    height: '23@vs',
  },

  Login_txt: {
    fontSize: '20@ms',
    color: 'white',
    lineHeight: 23,
    marginTop: '21@ms',
    marginBottom: 28,
  },
  LoginBtn_container: {
    marginTop: '24@vs',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  Form_container: {
    marginTop: '129@vs',
    backgroundColor: 'white',
    margin: '20@s',
  },

  SubContainer_SideSpace: {
    paddingTop: '40@ms',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    paddingHorizontal: '20@s',
  },

  IconSize: {
    width: '17@s',
    height: '12@vs',
    resizeMode: 'contain',
    top: 10,
  },
  bottomBtnContainer: {
    marginHorizontal: 10,
  },
  bottomBtnStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    height: '28@ms',
  },
  bottomBtnText: {
    fontSize: '16@ms',
    color: 'gray',
    lineHeight: 18,
    letterSpacing: 0.2,
  },
});
