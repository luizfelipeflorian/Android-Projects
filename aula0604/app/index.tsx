import { Clock, Lock, Shield, Swords } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerPromo from "../components/BannerPromo";
import CategoryCard from "../components/CategoryCard";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import MissionCard from "../components/MissionCard";
import SearchBar from "../components/SearchBar";
import { Colors, headerStyles, indexStyles } from "../components/Style";

export default function Index() {
  const [activeMenuItem, setActiveMenuItem] = useState("Orbiter");

  const categories = [
    { title: "Extermínio", icon: Swords, color: Colors.exterminio },
    { title: "Sobrevivência", icon: Clock, color: Colors.sobrevivencia },
    { title: "Defesa", icon: Shield, color: Colors.defesa },
    { title: "Espionagem", icon: Lock, color: Colors.espionagem },
  ];

  const missions = [
    {
      route: "Coba (Terra)",
      subtitle: "Defesa",
      faction: "Grineer",
      reputation: "+3200 Rep",
      planetImage: require("../assets/images/Terra.png"),
      profileImage: require("../assets/images/Lotus-Profile.png"),
    },
    {
      route: "Copernicus (Lua)",
      subtitle: "Captura",
      faction: "Corpus",
      reputation: "+4500 Rep",
      planetImage: require("../assets/images/Lua.png"),
      profileImage: require("../assets/images/AladV-Profile.png"),
    },
    {
      route: "Phlegyas (Deimos)",
      subtitle: "Extermínio",
      faction: "Infestados",
      reputation: "+5700 Rep",
      planetImage: require("../assets/images/Deimos.png"),
      profileImage: require("../assets/images/Cephalon-Profile.png"),
    },
  ];

  return (
    <SafeAreaView style={indexStyles.container}>
      <View style={indexStyles.content}>
        <Header />
        <SearchBar />

        <ScrollView
          style={indexStyles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={indexStyles.scrollContent}
        >
          {/* Categorias */}
          <View style={indexStyles.categoriesContainer}>
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </View>

          <View style={headerStyles.decorationLine}></View>

          {/* Banner Promocional */}
          <BannerPromo
            title="Alerta Semanal"
            subtitle="Inicie a caçada semanal de tesouros ayatan no Bazar da Maroo (Marte)"
          />

          {/* Missões */}
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              route={mission.route}
              subtitle={mission.subtitle}
              faction={mission.faction}
              reputation={mission.reputation}
              planetImage={mission.planetImage}
              profileImage={mission.profileImage}
            />
          ))}
        </ScrollView>
      </View>

      <FooterMenu activeItem={activeMenuItem} onPressItem={setActiveMenuItem} />
    </SafeAreaView>
  );
}
