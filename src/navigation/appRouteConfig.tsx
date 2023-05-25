import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {createDrawerNavigator} from '@react-navigation/drawer';
// Auth Screens
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
//Main Screens
import Dashboard from '../screens/Dashboard';

export type AuthStackParams = {
  Login: undefined;
  SignUp: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export type MainStackParams = {
  Dashboard: undefined;
};

const MainDrawer = createDrawerNavigator<MainStackParams>();

const Navigation = () => {
  const Auth = useSelector((state: any) => state?.SignIn);

  return (
    <NavigationContainer>
      {Auth?.isLoggedIn ? (
        <MainDrawer.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <MainDrawer.Screen name="Dashboard" component={Dashboard} />
        </MainDrawer.Navigator>
      ) : (
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
