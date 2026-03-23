import { Image, Text, View } from "react-native";
import styles from "../components/Styles";

const CardButtom = (props) => {
  return (
    <View style={styles.CardButtomContent}>
      <Image source={props.source} style={styles.ImagesContent} />
      <Text style={styles.Text}>{props.name}</Text>
    </View>
  );
};

export default CardButtom;
