import { Pressable, Text } from "react-native";

/* fazer um slyles bonito dps */

const CustomButton = (props) => (
  <Pressable onPress={() => alert("Botão pressionado!")}>
    <Text>{props.titulo}</Text>
  </Pressable>
);

export default CustomButton;
