import { Image, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <View>
        {/* estilizar */}
        <Image source={require("../assets/images/menus.png")} />
        <Text>Home</Text>
      </View>
      <View>
        <Image source={require("../assets/images/boy.png")} />
        <View>
          <Text>Valentino C</Text>
          <Text>I Std - A</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
