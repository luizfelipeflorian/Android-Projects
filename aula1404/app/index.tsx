import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index</Text>
      <Button title="About" onPress={() => router.push("/sobre")} />
      <Button title="nome" onPress={() => router.push("/perfil/chiquito")} />
    </View>
  );
}
