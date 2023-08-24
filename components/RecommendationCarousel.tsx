import { useState } from "react";
import {
  View,
  Image,
  Pressable,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

type BookItem = {
  id: string;
  cover: string;
  title: string;
  description: string;
};

type CarousalImageProps = {
  cover: string;
  onPress: () => void;
  borderColor: string;
  borderWidth: number;
};

const CarousalImage = ({
  cover,
  onPress,
  borderColor,
  borderWidth,
}: CarousalImageProps) => {
  return (
    <Pressable onPress={onPress}>
      <Image
        source={{ uri: cover }}
        style={[styles.cover, { borderColor, borderWidth }]}
      />
    </Pressable>
  );
};

function RecommendationCarousel({ data: genreArr }: { data: BookItem[] }) {
  const [selectedBookId, setSelectedBookId] = useState<string>(genreArr[0].id);
  const renderItem = ({ item }: { item: BookItem }) => (
    <CarousalImage
      cover={item.cover}
      onPress={() => setSelectedBookId(item.id)}
      borderColor={selectedBookId === item.id ? "black" : "transparent"}
      borderWidth={selectedBookId === item.id ? 2 : 0}
    />
  );
  return (
    <View>
      <Text>Because you like _Genre_</Text>
      <FlatList
        data={genreArr}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        extraData={selectedBookId}
      />
      <Text>{genreArr.find(({ id }) => id === selectedBookId)?.title}</Text>
      <Text numberOfLines={4} style={styles.description}>
        {genreArr.find(({ id }) => id === selectedBookId)?.description}
      </Text>
    </View>
  );
}

export default RecommendationCarousel;

const styles = StyleSheet.create({
  cover: {
    height: 150,
    width: 80,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    resizeMode: "cover",
  },
  description: { paddingRight: 6, textAlign: "justify" },
});
