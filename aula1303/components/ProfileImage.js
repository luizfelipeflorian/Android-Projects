import { Image } from "react-native";

/* fazer um slyles bonito dps */

const ProfileImage = (props) => (
  <Image source={props.source} style={{ width: 50, height: 50 }} />
);

export default ProfileImage;
