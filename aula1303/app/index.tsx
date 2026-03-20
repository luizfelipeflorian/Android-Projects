import { View } from "react-native";
import customButton from "../components/CustomButton";
import footer from "../components/Footer";
import header from "../components/Header";
import profileImage from "../components/ProfileImage";
import useRouteInfo from "../components/UserInfo";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {header()} {/* ajustar as props depois */}
      {profileImage()}
      {useRouteInfo()}
      {customButton()}
      {footer()}
    </View>
  );
}
