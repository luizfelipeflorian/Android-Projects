import { Image, Text, View } from "react-native";
import styles from "../components/Styles";

const FooterButtom = (props) => {
  return (
    <View style={styles.CardButtomFooter}>
      <View style={styles.FooterImageContainer}>
        <Image source={props.source} style={styles.ImagesFooter} />
      </View>
      <Text style={styles.Text}>{props.name}</Text>
    </View>
  );
};

export default FooterButtom;
