import Header from "@/components/Header";
import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from "react-native";

interface Pokemon {
  id: number;
  name: string;
  foto: string;
  pokemontypes: string[];
}

const processarPokemon = (pokemon: any, index: number): Pokemon => {
  pokemon["id"] = index;
  pokemon["foto"] =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;

  return pokemon;
};

export default function Index() {
  const [todosPokemon, setTodosPokemon] = useState<Pokemon[]>([]);
  const [listaFiltrada, setListaFiltrada] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const carregarDados = async function () {
      const response = await fetch("https://chiquitto.com.br/pokemons/");
      const json = await response.json();
      const pokemons = json["data"].map(processarPokemon);

      setTodosPokemon(pokemons);
      setListaFiltrada(pokemons);
      setLoading(false);
    };

    carregarDados();
  }, []);

  const handleBusca = (texto: string) => {
    setBusca(texto);

    const textoBusca = texto.toLowerCase();
    const filtrado = todosPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(textoBusca)
    );

    setListaFiltrada(filtrado);
  };

  const renderPokemon = ({ item }: { item: Pokemon }) => (
    <View style={styles.cardWrapper}>
      <PokemonCard pokemon={item} />
    </View>
  );

  const conteudo = loading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#EE8130" />
    </View>
  ) : (
    <FlatList
      data={listaFiltrada}
      renderItem={renderPokemon}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContent}
    />
  );

  return (
    <View style={styles.container}>
      <Header onSearch={handleBusca} searchValue={busca} />
      {conteudo}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  cardWrapper: {
    flex: 1,
    marginHorizontal: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
