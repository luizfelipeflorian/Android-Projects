import { LoginForm } from "@/components/LoginForm";
import { useRouter } from "expo-router";

/*
Tela de Login (/)
Requisitos:

Campo de usuário
Campo de senha
Botão "Entrar"
Ação: Ao clicar no botão, redirecionar para a tela inicial (/lista).
*/
export default function Index() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push("/lista");
  };

  return <LoginForm onLoginSuccess={handleLoginSuccess} />;
}
