import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Container Principal
  Container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  // Header Styles
  Header: {
    backgroundColor: "#07183b",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 16,
  },
  HeaderTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  HeaderBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  HeaderTextContainer: {
    flex: 1,
  },

  // Content Styles
  Content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 8,
    backgroundColor: "#ffffff",
  },
  CardButtomContent: {
    justifyContent: "center",
    alignItems: "center",
    height: 106,
    width: "31%",
    gap: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  ImagesContent: {
    height: 60,
    width: 60,
  },

  // Footer Styles
  Footer: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    gap: 12,
  },
  FooterHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  FooterTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ListFooter: {
    flexDirection: "row",
    gap: 8,
  },
  CardButtomFooter: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  ImagesFooter: {
    height: 92,
    width: 92,
    borderRadius: 8,
  },

  // Icon Styles
  Icons: {
    height: 30,
    width: 30,
  },

  // Text Styles
  Text: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3d3934",
  },
  TextHeader: {
    fontSize: 12,
    color: "#ffffff",
  },
  TextPrimaryW: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  TextPrimaryB: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3d3934",
  },
  Subtitle: {
    fontSize: 12,
    color: "#b9931e",
  },
  SeeAllText: {
    fontSize: 12,
    color: "#3d3934",
    fontWeight: "600",
  },
});

export default styles;
