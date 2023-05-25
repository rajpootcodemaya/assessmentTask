import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './style';

export default function Input(props: any) {
  return (
    <View style={[styles.bottomBorder, props.bottomBorder]}>
      <TextInput
        {...props}
        style={[styles.Input_txt, props.TextInputstyle]}
        spellCheck={false}
        autoCorrect={false}
        underlineColorAndroid={'transparent'}
      />
    </View>
  );
}
