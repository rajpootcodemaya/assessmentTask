import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './style';

interface checkBoxProps {
  icon: any;
  isChecked: boolean;
  onClick: (arg: any) => void;
}

export default function Checkbox({
  icon,
  isChecked,
  onClick = () => {},
}: checkBoxProps) {
  const [state, setState] = useState(isChecked || false);

  function handleValue() {
    setState(!state);
    onClick(!state);
  }

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: state ? 'gray' : 'white'}]}
      onPress={() => handleValue()}>
      <Image
        style={[styles.icon, {tintColor: state ? 'white' : 'white'}]}
        source={icon}
      />
    </TouchableOpacity>
  );
}
