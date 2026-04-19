import { useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import { cursos } from "../data/dados.json";

/*
Lista de cursos (/lista)
Requisitos:

Listar os 3 cursos do JSON
Exibir o nome de cada curso
*/
export default function Lista() {
  const router = useRouter();

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        Cursos Disponíveis
      </Text>

      <View
        style={{
          gap: 10,
        }}
      >
        {cursos.map((curso) => (
          <Button
            key={curso.id}
            title={curso.nome}
            onPress={() => router.push(`/cursos/${curso.id}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
