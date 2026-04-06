import { Text, View } from "react-native";
import { headerStyles } from "./Style";

export default function Header() {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.titleContainer}>
        <Text style={headerStyles.title}>Saudações,</Text>
        <Text style={[headerStyles.title, headerStyles.tenno]}>Tenno</Text>
      </View>
      <View style={headerStyles.decorationLine}></View>
    </View>
  );
}
