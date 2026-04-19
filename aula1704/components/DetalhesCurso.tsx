import { cursos, instrutores } from "@/data/dados.json";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";

interface DetalhesCursoProps {
  courseId: string;
  onInstructorPress: (instructorId: string) => void;
}

export function DetalhesCurso({
  courseId,
  onInstructorPress,
}: DetalhesCursoProps) {
  const curso = cursos.find((c) => c.id === courseId);
  const instrutor = instrutores.find((i) => i.id === curso?.idInstrutor);

  if (!curso || !instrutor) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Curso não encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: curso.nome,
        }}
      />
      <View
        style={{
          gap: 10,
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Nome do Curso: {curso.nome}
        </Text>
        <Button
          title={`Professor: ${instrutor.nome}`}
          onPress={() => onInstructorPress(instrutor.id)}
        />
      </View>
    </>
  );
}
