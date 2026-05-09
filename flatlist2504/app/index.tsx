import PessoaItem from "@/components/PessoaItem";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";

const processarPessoa = (pokemon, index) => {
  pokemon["id"] = index;
  pokemon["foto"] =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;

  return pokemon;
};

const comparador = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export default function Index() {
  const [todosPokemons, setTodosPokemons] = useState([]);
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async function () {
      const response = await fetch("https://chiquitto.com.br/pokemons/");
      const json = await response.json();
      const pokemons = json["data"].map(processarPessoa);

      setTodosPokemons(pokemons);
      setLista(pokemons);
      setLoading(false);
    };

    carregarDados();
  }, []);

  const mostrarWater = () => {
    const resultado = todosPokemons
      .map(processarPessoa)
      .sort(comparador)
      .filter((pokemon) => pokemon.pokemontypes.includes("water"));
    setLista(resultado);
  };

  const mostrarFire = () => {
    const resultado = todosPokemons
      .map(processarPessoa)
      .sort(comparador)
      .filter((pokemon) => pokemon.pokemontypes.includes("fire"));
    setLista(resultado);
  };

  const mostrarTodos = () => {
    const resultado = todosPokemons.map(processarPessoa).sort(comparador);
    setLista(resultado);
  };

  const mostrar = loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <FlatList
      data={lista}
      renderItem={({ item }) => <PessoaItem pessoa={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={mostrarWater} title="Water" color="#6390F0" />
        <Button onPress={mostrarFire} title="Fire" color="#EE8130" />
        <Button onPress={mostrarTodos} title="Todos" color="#777" />
      </View>
      {mostrar}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
  },
});
