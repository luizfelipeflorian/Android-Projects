import { FlatList, Text, View } from "react-native";
import PessoaCard from "../components/PessoasItem";
import { dados } from "../data/generated.json";

export default function Index() {
  const renderItem = ({ item, index }) => (
    <PessoaCard pessoa={item} index={index} />
  );

  const processarPessoa = (pessoa, index) => {
    pessoa["id"] = index;
    if (pessoa.gender === "male") {
      pessoa["foto"] = `https://randomuser.me/api/portraits/men/${index}.jpg`;
    } else {
      pessoa["foto"] = `https://randomuser.me/api/portraits/women/${index}.jpg`;
    }
    return pessoa;
  };

  const pessoa2 = dados.map(processarPessoa).sort((a, b) => a.name.localeCompare(b.name));

  const separator = <View style={{ height: 10 }} />;
  return (
    <FlatList
      data={pessoa2}
      renderItem={renderItem}
      keyExtractor={(item) => item.guid}
      ListEmptyComponent={<Text>Lista vazia</Text>}
      ItemSeparatorComponent={separator}
      style={{
        padding: 20,
      }}
    />
  );
}
