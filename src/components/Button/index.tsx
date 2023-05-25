import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './style';

export default function Button(props: any) {
  return (
    <TouchableOpacity
      style={[styles.SideSpace, props.ButtonSide_space]}
      {...props}>
      <View style={[styles.Button_background, props.Button_background]}>
        <Text style={[styles.Button_txt, props.Button_txt]}>
          {props.ButtonName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
