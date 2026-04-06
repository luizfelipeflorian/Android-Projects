import { Text, TouchableOpacity, View } from "react-native";
import { bannerPromoStyles, Opacity } from "./Style";

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
        <Text style={bannerPromoStyles.icon}>⚡</Text>
      </View>
      <View style={bannerPromoStyles.textContainer}>
        <Text style={bannerPromoStyles.title}>{title}</Text>
        <Text style={bannerPromoStyles.subtitle}>{subtitle}</Text>
      </View>
      <View style={bannerPromoStyles.arrowIcon}>
        <Text style={bannerPromoStyles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );
}
