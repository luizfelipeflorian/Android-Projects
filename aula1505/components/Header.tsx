import { StyleSheet, TextInput, View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface HeaderProps {
  onSearch: (text: string) => void;
  searchValue: string;
}

export default function Header({ onSearch, searchValue }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Pokédex</Text>

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
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  logoContainer: {
    marginBottom: 12,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    letterSpacing: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    width: "100%",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
