import dados from "@/data/dados.json";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInputField } from "./TextInput";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () => {
    setErro("");

    const instrutorValido = dados.instrutores.find(
      (instrutor) => instrutor.nome === usuario && instrutor.id === senha,
    );

    if (instrutorValido) {
      onLoginSuccess();
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

      <TextInputField
        label="Usuário"
        placeholder="nome do usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInputField
        label="Senha"
        placeholder="senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
