import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerPromo from "../components/BannerPromo";
import CategoryCard from "../components/CategoryCard";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import MissionCard from "../components/MissionCard";
import SearchBar from "../components/SearchBar";
import { indexStyles, Colors } from "../components/Style";

export default function Index() {
  const [activeMenuItem, setActiveMenuItem] = useState("Orbiter");

  const categories = [
    { title: "Extermínio", icon: "⚔️", color: Colors.exterminio },
    { title: "Sobrevivência", icon: "⏱️", color: Colors.sobrevivencia },
    { title: "Defesa", icon: "🛡️", color: Colors.defesa },
    { title: "Espionagem", icon: "🔒", color: Colors.espionagem },
  ];

  const missions = [
    {
      route: "Orbiter → Cetus (Terra)",
      subtitle: "Exploração",
      faction: "Grineer",
      ship: "Liset",
      reputation: "+100 Rep",
    },
    {
      route: "Orbiter → Fortuna (Veneza)",
      subtitle: "Coleta de Recursos",
      faction: "Corpus",
      ship: "Dethcube",
      reputation: "+75 Rep",
    },
    {
      route: "Orbiter → Cameria (Platô)",
      subtitle: "Combate",
      faction: "Infestados",
      ship: "Liset",
      reputation: "+150 Rep",
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

          {/* Banner Promocional */}
          <BannerPromo
            title="Alerta Tático do Void!"
            subtitle="Inicie Fendas do Void antes de amanhã e dobre seus Ducats"
          />

          {/* Missões */}
          {missions.map((mission, index) => (
            <MissionCard
              key={index}
              route={mission.route}
              subtitle={mission.subtitle}
              faction={mission.faction}
              ship={mission.ship}
              reputation={mission.reputation}
            />
          ))}
        </ScrollView>
      </View>

      <FooterMenu activeItem={activeMenuItem} onPressItem={setActiveMenuItem} />
    </SafeAreaView>
  );
}
