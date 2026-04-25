import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const getGenderStyle = (gender) => ({
  backgroundColor: gender === "male" ? "#FFA756" : "#ff56d5",
});

export default function PessoaCard({ pessoa }) {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.container, getGenderStyle(pessoa.gender)]}>
        <View style={styles.leftSide}>
          <Text style={styles.pessoaId}>#{pessoa.guid}</Text>
          <Text style={styles.pessoaName}>{pessoa.name}</Text>
        </View>
        <View style={styles.rightSide}>
          <Image
            style={styles.pessoaImage}
            source={{
              uri: pessoa.foto,
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 25,
    flexDirection: "row",
    padding: 20,
    paddingBottom: 10,
  },

  leftSide: {
    flex: 1,
    position: "relative",
  },

  pessoaId: {
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 14,
    color: "#000",
  },

  pessoaName: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 31,
    marginTop: 5,
    textTransform: "capitalize",
    color: "#FFF",
  },

  rightSide: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },

  pessoaImage: {
    width: 100,
    height: 100,
  },
});
