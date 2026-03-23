import { View } from "react-native";
import CardButtom from "../components/CardButtom";

const Content = () => {
  return (
    <View>
      {/* Estilizar */}
      <CardButtom
        source={require("../assets/images/air.png")}
        name={"Attendance"}
      ></CardButtom>
      <CardButtom
        source={require("../assets/images/comments.png")}
        name={"Messages"}
      ></CardButtom>
      <CardButtom
        source={require("../assets/images/boy.png")}
        name={"Profile"}
      ></CardButtom>
      <CardButtom
        source={require("../assets/images/discount.png")}
        name={"Marks"}
      ></CardButtom>
      <CardButtom
        source={require("../assets/images/work-from-home.png")}
        name={"Home Work"}
      ></CardButtom>
      <CardButtom
        source={require("../assets/images/transport.png")}
        name={"Track Location"}
      ></CardButtom>
    </View>
  );
};

export default Content;
