import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

/* 
Tela de Login (/)
Requisitos:

Campo de usuário
Campo de senha
Botão "Entrar"
Ação: Ao clicar no botão, redirecionar para a tela inicial (/lista).
*/
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
      <View>
        <Text>Usuário</Text>
        <TextInput placeholder="nome do usuário" />
      </View>
      <View>
        <Text>Senha</Text>
        <TextInput placeholder="senha" />
      </View>

      <Button title="Entrar" onPress={() => router.push("/lista")} />
    </View>
  );
}
