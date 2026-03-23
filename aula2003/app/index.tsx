import { ScrollView, View } from "react-native";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </ScrollView>
    </View>
  );
}
