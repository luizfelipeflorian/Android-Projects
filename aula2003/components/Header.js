import { Image, Text, View } from "react-native";
import styles from "../components/Styles";

const Header = () => {
  return (
    <View style={styles.Header}>
      <View style={styles.HeaderTop}>
        <Image
          source={require("../assets/images/menus.png")}
          style={[styles.Icons, styles.MenuIcon]}
        />
        <Text style={styles.TextHeader}>HOME</Text>
      </View>
      <View style={styles.HeaderBottom}>
        <Image
          source={require("../assets/images/boy.png")}
          style={styles.ImagesContent}
        />
        <View style={styles.HeaderTextContainer}>
          <Text style={styles.TextPrimaryW}>VALENTINO C</Text>
          <Text style={styles.Subtitle}>I Std - A</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
