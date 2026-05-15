import { StyleSheet, TextInput, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface HeaderProps {
  onSearch: (text: string) => void;
  searchValue: string;
}

export default function Header({ onSearch, searchValue }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <MaterialIcons name="menu" size={28} color="#FFF" />

        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />

        <MaterialIcons name="bookmark" size={28} color="#FFF" />
      </View>

      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={20} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Procure um pokémon..."
          placeholderTextColor="#999"
          onChangeText={onSearch}
          value={searchValue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EF5350",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
