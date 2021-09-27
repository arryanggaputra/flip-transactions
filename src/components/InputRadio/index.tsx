import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "components/utils/Text";
import Radio from "./radio";
import styles from "./styles";

interface IInputRadio {
  title?: string;
  checked?: boolean;
  onPress?: () => void;
}

const InputRadio: React.FC<IInputRadio> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.input}>
        <Radio checked={props.checked} />
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InputRadio;
