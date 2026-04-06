import { Text, TouchableOpacity, View } from "react-native";
import { categoryCardStyles, Opacity } from "./Style";

interface CategoryCardProps {
  title: string;
  icon: string;
  color: string;
  onPress?: () => void;
}

export default function CategoryCard({
  title,
  icon,
  color,
  onPress,
}: CategoryCardProps) {
  return (
    <TouchableOpacity
      style={[categoryCardStyles.container, { borderColor: color }]}
      onPress={onPress}
      activeOpacity={Opacity.medium}
    >
      <View style={[categoryCardStyles.iconContainer, { backgroundColor: color }]}>
        <Text style={categoryCardStyles.icon}>{icon}</Text>
      </View>
      <Text style={categoryCardStyles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
