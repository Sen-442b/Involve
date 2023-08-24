import { BookItem } from "@/types/BookTypes";
import { View, Image, Text, StyleSheet } from "react-native";

function Card({ book }: { book: BookItem }) {
  return (
    <View style={styles.container}>
      <View style={styles.coverWrapper}>
        <Image source={{ uri: book.cover }} style={styles.cover} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{book.title}</Text>
        <Text numberOfLines={5}>{book.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#e2e2e2",
    width: 400,
    overflow: "hidden",

    height: 200,
    borderRadius: 4,
    boxShadow: "2",
    marginHorizontal: 3,
  },
  coverWrapper: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
  },
  cover: { height: 180, width: 110, borderRadius: 4 },
  title: {
    fontSize: 24,
  },
  details: {
    flex: 6.5,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginHorizontal: 2,
  },
});
export default Card;
