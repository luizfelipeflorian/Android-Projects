import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import FooterButtom from "../components/FooterButtom";
import styles from "../components/Styles";

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <View style={styles.FooterHeader}>
        <View style={styles.FooterTitle}>
          <Image
            source={require("../assets/images/music-album.png")}
            style={styles.Icons}
          />
          <Text style={styles.TextPrimaryB}>ACTIVITIES</Text>
        </View>
        <TouchableHighlight onPress={() => {}} underlayColor="transparent">
          <View style={styles.SeeAllButton}>
            <Text style={styles.SeeAllText}>SEE ALL</Text>
          </View>
        </TouchableHighlight>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.ListFooter}>
          <FooterButtom
            source={require("../assets/images/karate.png")}
            name={"karate"}
          ></FooterButtom>
          <FooterButtom
            source={require("../assets/images/meditation.png")}
            name={"Yoga"}
          ></FooterButtom>
          <FooterButtom
            source={require("../assets/images/air.png")}
            name={"Bharath-anatiyam"}
          ></FooterButtom>
          <FooterButtom
            source={require("../assets/images/comments.png")}
            name={"Icone surpresa"}
          ></FooterButtom>
        </View>
      </ScrollView>
    </View>
  );
};

export default Footer;
