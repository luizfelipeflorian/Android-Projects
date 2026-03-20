import { View } from "react-native";
import imagem from "../assets/images/icon.png";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
import UserInfo from "../components/UserInfo";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header texto="Título do Header" />
      <ProfileImage source={imagem} />
      <UserInfo nome="Fulado da silva" descricao="Pequena descrição" />
      <CustomButton titulo="Clique aqui!" />
      <Footer informacoes="Informações ultra importantes e relevantes" />
    </View>
  );
}
