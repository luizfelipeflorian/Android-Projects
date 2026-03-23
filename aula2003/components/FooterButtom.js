import { Image, Text, View } from "react-native";

const FooterButtom = (props) => {
  return (
    <View>
      {/* Estilizar */}
      <Image source={props.source} />
      <Text>{props.name}</Text>
    </View>
  );
};

export default FooterButtom;
