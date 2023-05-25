import {SafeAreaView, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MainStackParams} from '../../navigation/appRouteConfig';
import {useNavigation} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import styles from './style';

type MemberScreenNavigationProp = DrawerNavigationProp<
  MainStackParams,
  'Dashboard'
>;

const Dashboard = () => {
  const Navigation = useNavigation<MemberScreenNavigationProp>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headerTxt}>Dashboard</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Welcome To Dashboard</Text>
      </View>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          onPress={() => Navigation.openDrawer()}
          style={styles.bottomButton}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
