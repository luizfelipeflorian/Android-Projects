import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          borderColor: "blue",
          borderStyle: "solid",
          borderWidth: 4,
        }}
        /* essa parte tive que pesquisar na internet pois não sabia se a funcionalidade de rolar a tela estava funcionando */
        contentContainerStyle={{
          padding: 16,
          gap: 50,
        }}
      >
        <ActivityIndicator />
        <Button title="botão" onPress={() => alert("clicou no botão")} />
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri: "https://www.ifms.edu.br/marcaifms.png",
          }}
        />
        <Image
          style={{ width: 200, height: 200 }}
          source={require("@/assets/images/android-icon-background.png")}
        />
        <Text>Texto</Text>
        <TextInput placeholder="digite algo aqui"></TextInput>
      </ScrollView>
    </View>
  );
}
