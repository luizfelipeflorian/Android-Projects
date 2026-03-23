import { ScrollView, View } from "react-native";
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
      </ScrollView>
    </View>
  );
}
