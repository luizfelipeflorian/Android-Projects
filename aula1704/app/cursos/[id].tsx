import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { cursos, instrutores } from "../../data/dados.json";

/*
Tela de Curso (/cursos/[id])
Requisitos:

Receber o parâmetro id da rota
Buscar o curso correspondente no JSON
Buscar o instrutor relacionado usando idInstrutor
Exibir:

Nome do curso
Nome do instrutor
 */

export default function DetalheCurso() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const curso = cursos.find((c) => c.id === id);
  const instrutor = instrutores.find((i) => i.id === curso?.idInstrutor);

  if (!curso || !instrutor) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Curso não encontrado</Text>
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
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nome do Curso: {curso.nome}</Text>
      <Button
        title={`Professor: ${instrutor.nome}`}
        onPress={() => router.push(`/instrutores/${instrutor.id}`)}
      />
    </View>
  );
}
