import { Text, TextInput, View } from "react-native";
import { searchBarStyles, Colors } from "./Style";

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

export default function SearchBar({
  placeholder = "Buscar Planeta ou Nodo...",
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={searchBarStyles.container}>
      <TextInput
        style={searchBarStyles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.mediumGray}
        onChangeText={onChangeText}
      />
      <View style={searchBarStyles.searchIcon}>
        <Text style={searchBarStyles.icon}>🔍</Text>
      </View>
    </View>
  );
}
