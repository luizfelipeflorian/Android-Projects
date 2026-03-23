import { ScrollView, View } from "react-native";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../components/Styles";

export default function Index() {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </ScrollView>
    </View>
  );
}
