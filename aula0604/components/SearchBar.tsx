import { Search } from "lucide-react-native";
import { TextInput, View } from "react-native";
import { Colors, searchBarStyles } from "./Style";

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
        style={[searchBarStyles.input, { outline: "none" } as any]}
        placeholder={placeholder}
        placeholderTextColor={Colors.mediumGray}
        onChangeText={onChangeText}
        autoComplete="off"
      />
      <View style={searchBarStyles.searchIcon}>
        <Search size={20} color={Colors.mediumGray} />
      </View>
    </View>
  );
}
