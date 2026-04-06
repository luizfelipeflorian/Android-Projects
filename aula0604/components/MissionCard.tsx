import { Image, Text, TouchableOpacity, View } from "react-native";
import { missionCardStyles, Opacity } from "./Style";

interface MissionCardProps {
  route: string;
  subtitle: string;
  faction: string;
  planetImage?: any;
  profileImage?: any;
  reputation?: string;
  onPress?: () => void;
}

export default function MissionCard({
  route,
  subtitle,
  faction,
  planetImage,
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
          {planetImage && (
            <Image
              source={planetImage}
              style={{ width: 40, height: 40, borderRadius: 20 }}
              resizeMode="cover"
            />
          )}
        </View>
      </View>

      <View style={missionCardStyles.middleContainer}>
        <Text style={missionCardStyles.route}>{route}</Text>
        <Text style={missionCardStyles.subtitle}>{subtitle}</Text>
        <Text style={missionCardStyles.details}>Fação: {faction}</Text>
      </View>

      <View style={missionCardStyles.rightContainer}>
        <View style={missionCardStyles.profile}>
          {profileImage && (
            <Image 
              source={profileImage} 
              style={{ width: 50, height: 50, borderRadius: 25 }}
              resizeMode="cover"
            />
          )}
        </View>
        {reputation && (
          <Text style={missionCardStyles.reputation}>{reputation}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
