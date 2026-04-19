import { DetalhesInstrutor } from "@/components/DetalhesInstrutor";
import { useLocalSearchParams, useRouter } from "expo-router";

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

  if (!id || typeof id !== "string") {
    return null;
  }

  const handleCoursePress = (courseId: string) => {
    router.push(`/cursos/${courseId}`);
  };

  return (
    <DetalhesInstrutor instructorId={id} onCoursePress={handleCoursePress} />
  );
}
