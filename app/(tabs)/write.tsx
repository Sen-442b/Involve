import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { RichEditor } from "react-native-pell-rich-editor";

const Write = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.addBtn}>
        <EvilIcons name="plus" size={28} color="black" />
        <Text style={styles.addBtnTitle}>Write a story</Text>
      </Pressable>
      <RichEditor
        placeholder="Write your cool content here :)"
        androidHardwareAccelerationDisabled={true}
        initialHeight={250}
      />
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
