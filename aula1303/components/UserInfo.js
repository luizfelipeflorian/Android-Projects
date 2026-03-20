import { Text, View } from "react-native";

/* fazer um slyles bonito dps */

const UserInfo = (props) => (
  <View>
    <Text>{props.nome}</Text>
    <Text>{props.descricao}</Text>
  </View>
);

export default UserInfo;
