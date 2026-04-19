import { Text, TextInput, View } from "react-native";

interface TextInputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export function TextInputField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: TextInputFieldProps) {
  return (
    <View style={{ marginBottom: 15, width: "100%" }}>
      <Text style={{ marginBottom: 5, fontWeight: "bold" }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 5,
        }}
      />
    </View>
  );
}
