import { cursos, instrutores } from "@/data/dados.json";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";

interface DetalhesInstrutorProps {
  instructorId: string;
  onCoursePress: (courseId: string) => void;
}

export function DetalhesInstrutor({
  instructorId,
  onCoursePress,
}: DetalhesInstrutorProps) {
  const instrutor = instrutores.find((i) => i.id === instructorId);
  const cursosMinistrados = cursos.filter(
    (c) => c.idInstrutor === instructorId,
  );

  if (!instrutor || !cursosMinistrados) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Instrutor não encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: instrutor.nome,
        }}
      />
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
              onPress={() => onCoursePress(curso.id)}
            />
          ))}
        </View>
      </View>
    </>
  );
}
