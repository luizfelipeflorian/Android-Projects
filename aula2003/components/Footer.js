import { Image, Text, TouchableHighlight, View } from "react-native";
import FooterButtom from "../components/FooterButtom";

const Footer = () => {
  return (
    <View>
      <View>
        <View>
          <Image source={require("../assets/images/music-album.png")} />
          <Text>ACTIVITIES</Text>
        </View>
        <TouchableHighlight onPress={() => {}}>
          <View>
            <Text>SEE ALL</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View>
        {/* Estilizar */}
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
    </View>
  );
};

export default Footer;
