import { Pressable, Text } from "react-native";

/* fazer um slyles bonito dps */

export default function customButton() {
  return (
    <Pressable onPress={() => alert("Botão pressionado!")}>
      <Text>Botão top</Text>
    </Pressable>
  ); /* transformar em prop */
}
