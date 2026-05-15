import getColor from "@/data/colors";
import { StyleSheet, Text, View } from "react-native";

interface TypeBadgeProps {
  type: string;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  const backgroundColor = getColor([type]);

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  text: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});
