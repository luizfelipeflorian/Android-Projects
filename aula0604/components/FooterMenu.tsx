import { Text, TouchableOpacity, View } from "react-native";
import { footerMenuStyles, Opacity } from "./Style";

interface MenuItemProps {
  label: string;
  icon: string;
  active?: boolean;
  onPress?: () => void;
}

interface FooterMenuProps {
  activeItem?: string;
  onPressItem?: (label: string) => void;
}

function MenuItem({ label, icon, active, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={[
        footerMenuStyles.menuItem,
        active && footerMenuStyles.menuItemActive,
      ]}
      onPress={onPress}
      activeOpacity={Opacity.medium}
    >
      <Text style={footerMenuStyles.icon}>{icon}</Text>
      <Text
        style={[
          footerMenuStyles.label,
          active && footerMenuStyles.labelActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function FooterMenu({
  activeItem = "Orbiter",
  onPressItem,
}: FooterMenuProps) {
  const menuItems = [
    { label: "Orbiter", icon: "🚀" },
    { label: "Navegação", icon: "🧭" },
    { label: "Mercado", icon: "🛍️" },
    { label: "Códex", icon: "📖" },
  ];

  return (
    <View style={footerMenuStyles.container}>
      <View style={footerMenuStyles.topBorder}></View>
      <View style={footerMenuStyles.menuContainer}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            active={activeItem === item.label}
            onPress={() => onPressItem?.(item.label)}
          />
        ))}
      </View>
    </View>
  );
}
