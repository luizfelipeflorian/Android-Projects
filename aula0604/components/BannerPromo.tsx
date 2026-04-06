import { ChevronRight, TriangleAlert } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { bannerPromoStyles, Colors, Opacity } from "./Style";

interface BannerPromoProps {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export default function BannerPromo({
  title,
  subtitle,
  onPress,
}: BannerPromoProps) {
  return (
    <TouchableOpacity
      style={bannerPromoStyles.container}
      onPress={onPress}
      activeOpacity={Opacity.medium}
    >
      <View style={bannerPromoStyles.alertIcon}>
        <TriangleAlert size={24} color={Colors.gold} strokeWidth={2} />
      </View>
      <View style={bannerPromoStyles.textContainer}>
        <Text style={bannerPromoStyles.title}>{title}</Text>
        <Text style={bannerPromoStyles.subtitle}>{subtitle}</Text>
      </View>
      <View style={bannerPromoStyles.arrowIcon}>
        <ChevronRight size={24} color={Colors.mediumGray} strokeWidth={2} />
      </View>
    </TouchableOpacity>
  );
}
