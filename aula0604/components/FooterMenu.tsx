import {
  BookOpen,
  Compass,
  LucideIcon,
  Rocket,
  ShoppingBag,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors, footerMenuStyles, Opacity } from "./Style";

interface MenuItemProps {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  onPress?: () => void;
}

interface FooterMenuProps {
  activeItem?: string;
  onPressItem?: (label: string) => void;
}

function MenuItem({ label, icon: Icon, active, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={[
        footerMenuStyles.menuItem,
        active && footerMenuStyles.menuItemActive,
      ]}
      onPress={onPress}
      activeOpacity={Opacity.medium}
    >
      <Icon
        size={24}
        color={active ? Colors.gold : Colors.mediumGray}
        strokeWidth={2}
      />
      <Text
        style={[footerMenuStyles.label, active && footerMenuStyles.labelActive]}
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
    { label: "Orbiter", icon: Rocket },
    { label: "Navegação", icon: Compass },
    { label: "Mercado", icon: ShoppingBag },
    { label: "Códex", icon: BookOpen },
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
