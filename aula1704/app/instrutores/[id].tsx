import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { cursos, instrutores } from "../../data/dados.json";

/* 
Tela de Instrutor (/instrutores/[id])
Requisitos:

Receber o parâmetro id da rota
Buscar o instrutor correspondente no JSON
Exibir:

Nome do instrutor
Cursos ministrados
*/

export default function DetalheInstrutor() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const instrutor = instrutores.find((i) => i.id === id);
  const cursosMinistrados = cursos.filter((c) => c.idInstrutor === id);

  if (!instrutor || !cursosMinistrados) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Instrutor não encontrado</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        gap: 10,
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Nome do Instrutor: {instrutor.nome}
      </Text>

      <View
        style={{
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Cursos ministrados:
        </Text>
        {cursosMinistrados.map((curso) => (
          <Button
            key={curso.id}
            title={curso.nome}
            onPress={() => router.push(`/cursos/${curso.id}`)}
          />
        ))}
      </View>
    </View>
  );
}
