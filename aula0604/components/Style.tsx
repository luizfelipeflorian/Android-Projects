import { StyleSheet } from "react-native";

// ============== COLORS ==============
export const Colors = {
  // Tema Principal
  background: "#0a0e27",
  darkBackground: "#050710",

  // Azul Neon (Ciano)
  cyan: "#00d9ff",
  cyanLight: "#00e5ff",
  cyanDark: "#00a8cc",

  // Dourado (Prime)
  gold: "#d4af37",
  goldBright: "#ffd700",

  // Cores adicionais
  white: "#ffffff",
  lightGray: "#e0e0e0",
  mediumGray: "#888888",
  darkGray: "#444444",

  // Cores por tipo de missão
  exterminio: "#ff6b6b",
  sobrevivencia: "#ffd93d",
  defesa: "#6bcf7f",
  espionagem: "#a78bfa",
};

// ============== OPACITY ==============
export const Opacity = {
  full: 1,
  high: 0.9,
  medium: 0.7,
  low: 0.5,
  veryLow: 0.3,
};

// ============== HEADER STYLES ==============
export const headerStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: Colors.darkBackground,
    borderBottomWidth: 2,
    borderBottomColor: Colors.cyan,
    opacity: Opacity.high,
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.white,
    letterSpacing: 1,
  },
  tenno: {
    color: Colors.cyan,
    textShadowColor: Colors.cyan,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  decorationLine: {
    height: 1,
    backgroundColor: Colors.gold,
    opacity: Opacity.veryLow,
  },
});

// ============== SEARCHBAR STYLES ==============
export const searchBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 15,
    backgroundColor: Colors.darkBackground,
    borderWidth: 2,
    borderColor: Colors.cyan,
    borderRadius: 8,
    paddingHorizontal: 15,
    opacity: Opacity.high,
  },
  input: {
    flex: 1,
    height: 48,
    color: Colors.white,
    fontSize: 16,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  icon: {
    fontSize: 20,
  },
});

// ============== CATEGORY CARD STYLES ==============
export const categoryCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
    backgroundColor: Colors.darkBackground,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    opacity: Opacity.high,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    opacity: Opacity.medium,
  },
  icon: {
    fontSize: 28,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    textOverflow: "ellipsis",
  },
});

// ============== BANNER PROMO STYLES ==============
export const bannerPromoStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.darkBackground,
    borderWidth: 2,
    borderColor: Colors.gold,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    opacity: Opacity.high,
  },
  alertIcon: {
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.gold,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.lightGray,
    lineHeight: 16,
  },
  arrowIcon: {
    marginLeft: 12,
  },
  arrow: {
    fontSize: 20,
    color: Colors.cyan,
  },
});

// ============== MISSION CARD STYLES ==============
export const missionCardStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: Colors.darkBackground,
    borderWidth: 2,
    borderColor: Colors.cyan,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    opacity: Opacity.high,
  },
  leftContainer: {
    marginRight: 12,
  },
  planetImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.cyan,
    alignItems: "center",
    justifyContent: "center",
    opacity: Opacity.medium,
  },
  planetIcon: {
    fontSize: 28,
  },
  middleContainer: {
    flex: 1,
  },
  route: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.cyan,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.lightGray,
    marginBottom: 6,
  },
  details: {
    fontSize: 11,
    color: Colors.mediumGray,
    lineHeight: 16,
  },
  rightContainer: {
    alignItems: "center",
    marginLeft: 12,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderColor: Colors.gold,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  profileIcon: {
    fontSize: 20,
  },
  reputation: {
    fontSize: 10,
    color: Colors.gold,
    fontWeight: "bold",
  },
});

// ============== FOOTER MENU STYLES ==============
export const footerMenuStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkBackground,
    borderTopWidth: 2,
    borderTopColor: Colors.cyan,
    opacity: Opacity.high,
  },
  topBorder: {
    height: 1,
    backgroundColor: Colors.gold,
    opacity: Opacity.veryLow,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    position: "relative",
  },
  menuItemActive: {
    backgroundColor: `${Colors.cyan}${Math.floor(Opacity.veryLow * 255).toString(16)}`,
    borderWidth: 1,
    borderColor: Colors.cyan,
  },
  icon: {
    fontSize: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    color: Colors.mediumGray,
    fontWeight: "500",
  },
  labelActive: {
    color: Colors.cyan,
    fontWeight: "bold",
  },
});

// ============== INDEX SCREEN STYLES ==============
export const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    paddingHorizontal: 12,
    marginVertical: 15,
    justifyContent: "space-around",
  },
});
