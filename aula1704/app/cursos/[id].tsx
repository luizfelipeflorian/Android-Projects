import { DetalhesCurso } from "@/components/DetalhesCurso";
import { useLocalSearchParams, useRouter } from "expo-router";

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

  if (!id || typeof id !== "string") {
    return null;
  }

  const handleInstructorPress = (instructorId: string) => {
    router.push(`/instrutores/${instructorId}`);
  };

  return (
    <DetalhesCurso courseId={id} onInstructorPress={handleInstructorPress} />
  );
}
