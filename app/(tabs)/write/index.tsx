import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { EvilIcons } from "@expo/vector-icons";

import { useRouter } from "expo-router";

const Write = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.addBtn}
        onPress={() => router.push("/add_story")}
      >
        <EvilIcons name="plus" size={28} color="black" />
        <Text style={styles.addBtnTitle}>Write a story</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginTop: 10,
  },

  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "red",
    width: 200,
  },
  addBtnTitle: {
    fontSize: 24,
  },
});

export default Write;
