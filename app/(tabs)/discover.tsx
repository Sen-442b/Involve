import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Category from "@/components/Category";
import { FlatList } from "react-native-gesture-handler";

const categories = [
  {
    id: "1",
    name: "Adventure",
    image:
      "https://w0.peakpx.com/wallpaper/294/469/HD-wallpaper-digital-anime-girl-adventure-art.jpg",
  },
  {
    id: "2",
    name: "Sci-Fi",
    image:
      "https://c4.wallpaperflare.com/wallpaper/448/174/357/neon-4k-hd-best-for-desktop-wallpaper-preview.jpg",
  },
  {
    id: "3",
    name: "Fantasy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOGMHjoAyG-vRSRxXGYVmA94I_tV4VvE_2c6sidtXl_zqVdVI1O4wFRBmkAGn6NvZHDI&usqp=CAU",
  },
];

const Categories = () => {
  return (
    <View>
      <Text style={styles.categoryTitle}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <Category
            name={item.name}
            image={item.image}
            inverted={index % 2 == 0}
          />
        )}
        contentContainerStyle={styles.categoriesContainer}
      />
    </View>
  );
};

const Discover = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <View>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      />

      {!clicked && <Categories />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  categoriesContainer: {
    alignItems: "center",
    gap: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 30,
    marginVertical: 12,
  },
});

export default Discover;
