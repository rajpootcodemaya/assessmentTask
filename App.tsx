import React from "react";
import { SafeAreaView, Text } from "react-native";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./src/redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation/appRouteConfig";


export default function App() {
let persistor=persistStore(store)


  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: 'white'
        }}
      />
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <Text>hello</Text> */}
      {/* </SafeAreaView> */}
      <Navigation/>
      </PersistGate>
      </Provider>
  );
}
