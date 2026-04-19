import { ListaCursos } from "@/components/ListaCursos";
import { useRouter } from "expo-router";

/*
Lista de cursos (/lista)
Requisitos:

Listar os 3 cursos do JSON
Exibir o nome de cada curso
*/
export default function Lista() {
  const router = useRouter();

  const handleCoursePress = (courseId: string) => {
    router.push(`/cursos/${courseId}`);
  };

  return <ListaCursos onCoursePress={handleCoursePress} />;
}
