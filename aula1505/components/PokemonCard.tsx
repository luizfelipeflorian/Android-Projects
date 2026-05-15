import getColor from "@/data/colors";
import TypeBadge from "./TypeBadge";
import { Image, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    foto: string;
    pokemontypes: string[];
  };
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const backgroundColor = getColor(pokemon.pokemontypes);
  const formattedName =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  const pokemonNumber = String(pokemon.id + 1).padStart(3, "0");

  return (
    <View style={[styles.card, { backgroundColor }]}>
      <View style={styles.header}>
        <Text style={styles.number}>#{pokemonNumber}</Text>
      </View>

      <Image source={{ uri: pokemon.foto }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{formattedName}</Text>

        <View style={styles.typesContainer}>
          {pokemon.pokemontypes.map((type) => (
            <TypeBadge key={type} type={type} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  number: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    opacity: 0.9,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
  },
  info: {
    alignItems: "center",
    width: "100%",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
