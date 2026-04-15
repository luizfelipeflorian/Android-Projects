import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Nome() {
  const { nome } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Usuário Nome: {nome}</Text>
    </View>
  );
}
