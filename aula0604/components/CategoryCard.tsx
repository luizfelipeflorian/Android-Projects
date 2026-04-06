import { LucideIcon } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { categoryCardStyles, Colors, Opacity } from "./Style";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  onPress?: () => void;
}

export default function CategoryCard({
  title,
  icon: Icon,
  color,
  onPress,
}: CategoryCardProps) {
  return (
    <TouchableOpacity
      style={[categoryCardStyles.container, { borderColor: color }]}
      onPress={onPress}
      activeOpacity={Opacity.medium}
    >
      <View
        style={[categoryCardStyles.iconContainer, { backgroundColor: color }]}
      >
        <Icon size={32} color={Colors.darkBackground} strokeWidth={2} />
      </View>
      <Text style={categoryCardStyles.title} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
