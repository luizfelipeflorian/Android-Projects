import { Globe, User } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors, missionCardStyles, Opacity } from "./Style";

interface MissionCardProps {
  route: string;
  subtitle: string;
  faction: string;
  ship: string;
  profileImage?: string;
  reputation?: string;
  onPress?: () => void;
}

export default function MissionCard({
  route,
  subtitle,
  faction,
  ship,
  profileImage,
  reputation,
  onPress,
}: MissionCardProps) {
  return (
    <TouchableOpacity
      style={missionCardStyles.container}
      onPress={onPress}
      activeOpacity={Opacity.medium}
    >
      <View style={missionCardStyles.leftContainer}>
        <View style={missionCardStyles.planetImage}>
          <Globe size={40} color={Colors.gold} strokeWidth={2} />
        </View>
      </View>

      <View style={missionCardStyles.middleContainer}>
        <Text style={missionCardStyles.route}>{route}</Text>
        <Text style={missionCardStyles.subtitle}>{subtitle}</Text>
        <Text style={missionCardStyles.details}>Fação: {faction}</Text>
        <Text style={missionCardStyles.details}>Nave: {ship}</Text>
      </View>

      <View style={missionCardStyles.rightContainer}>
        <View style={missionCardStyles.profile}>
          <User size={24} color={Colors.mediumGray} strokeWidth={2} />
        </View>
        {reputation && (
          <Text style={missionCardStyles.reputation}>{reputation}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
