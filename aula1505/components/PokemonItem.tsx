import getColor from "@/data/colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonData {
  name: string;
  foto: string;
  pokemontypes: string[];
}

interface PokemonItemProps {
  pokemon: PokemonData;
}

export default function PokemonItem({ pokemon: pokemon }: PokemonItemProps) {

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: getColor(pokemon.pokemontypes) },
      ]}
    >
      <Image source={{ uri: pokemon["foto"] }} style={styles.foto} />
      <Text style={styles.nome}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Text>
      <Text style={styles.email}>{pokemon.pokemontypes.join(" / ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 50,
    padding: 10,
  },
  foto: {
    borderRadius: 50,
    width: 100,
    height: 100,
    position: "absolute",
    top: -50,
  },
  nome: {
    fontSize: 22,
    marginTop: 40,
  },
  email: {
    fontSize: 16,
  },
});
