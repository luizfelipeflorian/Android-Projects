import { Image, Text, View } from "react-native";
import styles from "../components/Styles";

const FooterButtom = (props) => {
  return (
    <View style={styles.CardButtomFooter}>
      <Image source={props.source} style={styles.ImagesFooter} />
      <Text style={styles.Text}>{props.name}</Text>
    </View>
  );
};

export default FooterButtom;
