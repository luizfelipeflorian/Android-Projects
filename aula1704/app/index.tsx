import dados from "@/data/dados.json";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

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
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    setErro("");

    const instrutorValido = dados.instrutores.find(
      (instrutor) => instrutor.nome === usuario && instrutor.id === senha,
    );

    if (instrutorValido) {
      router.push("/lista");
    } else {
      setErro("Usuário ou senha inválidos");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {erro && (
        <Text style={{ color: "red", marginBottom: 15, fontWeight: "bold" }}>
          {erro}
        </Text>
      )}
      <View style={{ marginBottom: 15, width: "100%" }}>
        <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Usuário</Text>
        <TextInput
          placeholder="nome do usuário"
          value={usuario}
          onChangeText={setUsuario}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ marginBottom: 15, width: "100%" }}>
        <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Senha</Text>
        <TextInput
          placeholder="senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            borderRadius: 5,
          }}
        />
      </View>

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
