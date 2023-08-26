import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

type CategoryPropsType = {
  name: string;
  image: string;
  inverted: boolean;
};
const Category = ({ name, image, inverted = false }: CategoryPropsType) => {
  return (
    <View
      style={[
        inverted ? { flexDirection: "row-reverse" } : { flexDirection: "row" },
        styles.container,
      ]}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <Image
        style={inverted ? styles.image__inverted : styles.image}
        source={{ uri: image }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf8f8",
    height: 100,
    width: "85%",
    borderRadius: 4,

    justifyContent: "flex-end",

    overflow: "hidden",
    shadowColor: "#3d3a38",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
  },
  image: {
    height: "100%",
    width: 100,
    transform: [{ scale: 1.2 }, { skewY: "8deg" }],
    flex: 3,
  },
  image__inverted: {
    height: "100%",
    width: 100,
    transform: [{ scale: 1.2 }, { skewY: "-8deg" }],
    flex: 3,
  },
  titleWrapper: {
    flex: 7,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
});

export default Category;
