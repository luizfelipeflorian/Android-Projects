import { cursos } from "@/data/dados.json";
import { Button, ScrollView, Text, View } from "react-native";

interface ListaCursosProps {
  onCoursePress: (courseId: string) => void;
}

export function ListaCursos({ onCoursePress }: ListaCursosProps) {
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
            onPress={() => onCoursePress(curso.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
