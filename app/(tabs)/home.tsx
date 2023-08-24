import { Button, Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import Auth from "@/screens/Auth";
import { useRouter } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import RecommendationCarousel from "@/components/RecommendationCarousel";

const genreArr = [
  {
    id: "1",
    cover:
      "https://4.bp.blogspot.com/-1pF3kq82myc/UP5vv5nr6zI/AAAAAAAAA1o/wfm3N0xvjYA/s1600/bookby.jpg", //url
    title: "Book One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam nam maiores rem error culpa rerum animi! Perferendis error placeat, repellat, provident quasi ut nesciunt facilis iusto architecto dolores quaerat. Fugiat earum cupiditate, animi fugit repellendus debitis placeat quo enim id unde asperiores officia fuga esse hic nam reprehenderit mollitia illum blanditiis laudantium eveniet soluta ab ut velit? Eaque, commodi? Quasi vitae eum, laboriosam ducimus dicta sunt temporibus voluptatem expedita error laborum dignissimos accusamus vel est? Laudantium adipisci fugiat, vitae deserunt excepturi consequuntur sint nulla, reiciendis odit commodi unde? Itaque. Fugit vel nam minima eligendi, ipsum sapiente fuga nisi repudiandae dolores ullam, similique, iure laborum illum quisquam nobis atque dignissimos delectus aliquam nulla! Saepe quidem quisquam dolore, eligendi similique alias. Similique consequatur necessitatibus facere quaerat asperiores odit quae repellat voluptates harum illum hic sit perspiciatis vitae animi eum veniam, provident itaque? Architecto ab, assumenda possimus nihil nostrum tenetur earum sunt. At perspiciatis vero aliquid placeat neque, odio optio itaque nemo nam vitae illum! Quaerat omnis alias asperiores accusamus hic, ipsum, vel dolor commodi, cumque dicta non modi quae labore officiis? Vel consequatur aspernatur placeat, eveniet sequi fugiat reiciendis. Totam sit quo delectus fugiat ullam dolores repudiandae repellat qui earum maxime quae assumenda asperiores obcaecati numquam, libero tempore maiores. Incidunt, sed. Quibusdam magni corporis, atque, facere dolore reprehenderit dolor tempore aspernatur sapiente a ipsa numquam eos nesciunt praesentium vel asperiores cupiditate! Eaque rem praesentium reprehenderit. Dicta officia temporibus voluptatem? Et, vero? Accusamus cupiditate, pariatur non doloribus obcaecati perferendis ducimus aliquid quod modi et explicabo similique perspiciatis? Nam molestiae in, unde, temporibus, aliquid velit rem voluptatum magnam quisquam molestias quas consequuntur facilis. Architecto dignissimos, accusantium cum harum, velit nostrum iure deserunt qui rem distinctio molestias repellat consequuntur soluta blanditiis porro, nesciunt eum voluptas facere exercitationem. Ut dolore maiores temporibus quia, accusantium fuga.",
  },
  {
    id: "2",
    cover:
      "https://4.bp.blogspot.com/-1pF3kq82myc/UP5vv5nr6zI/AAAAAAAAA1o/wfm3N0xvjYA/s1600/bookby.jpg", //url
    title: "Book Two",
    description:
      "Dicta officia temporibus voluptatem? Et, vero? Accusamus cupiditate, pariatur non doloribus obcaecati perferendis ducimus aliquid quod modi et explicabo similique perspiciatis? Nam molestiae in, unde, temporibus, aliquid velit rem voluptatum magnam quisquam molestias quas consequuntur facilis. Architecto dignissimos, accusantium cum harum, velit nostrum iure deserunt qui rem distinctio molestias repellat consequuntur soluta blanditiis porro, nesciunt eum voluptas facere exercitationem. Ut dolore maiores temporibus quia, accusantium fuga.",
  },
  {
    id: "3",
    cover:
      "https://4.bp.blogspot.com/-1pF3kq82myc/UP5vv5nr6zI/AAAAAAAAA1o/wfm3N0xvjYA/s1600/bookby.jpg", //url
    title: "Book Three",
    description:
      "Nam molestiae in, unde, temporibus, aliquid velit rem voluptatum magnam quisquam molestias quas consequuntur facilis. Architecto dignissimos, accusantium cum harum, velit nostrum iure deserunt qui rem distinctio molestias repellat consequuntur soluta blanditiis porro, nesciunt eum voluptas facere exercitationem",
  },
  {
    id: "4",
    cover:
      "https://4.bp.blogspot.com/-1pF3kq82myc/UP5vv5nr6zI/AAAAAAAAA1o/wfm3N0xvjYA/s1600/bookby.jpg", //url
    title: "Book Four",
    description:
      "Totam sit quo delectus fugiat ullam dolores repudiandae repellat qui earum maxime quae assumenda asperiores obcaecati numquam, libero tempore maiores. Incidunt, sed. Quibusdam magni corporis, atque, facere dolore reprehenderit dolor tempore aspernatur sapiente a ipsa numquam eos nesciunt praesentium vel asperiores cupiditate! Eaque rem praesentium reprehenderit",
  },
  {
    id: "5",
    cover:
      "https://4.bp.blogspot.com/-1pF3kq82myc/UP5vv5nr6zI/AAAAAAAAA1o/wfm3N0xvjYA/s1600/bookby.jpg", //url
    title: "Book Five",
    description:
      "uibusdam magni corporis, atque, facere dolore reprehenderit dolor tempore aspernatur sapiente a ipsa numquam eos nesciunt praesentium vel asperiores cupiditate! Eaque rem praesentium reprehenderit. Dicta officia temporibus voluptatem? Et, vero? Accusamus cupiditate, pariatur non doloribus obcaecati perferendis ducimus aliquid quod modi et explicabo similique perspiciatis? Nam molestiae in, unde, temporibus, aliquid velit rem voluptatum magnam quisquam molestias quas consequuntur facilis.",
  },
  {
    id: "6",
    cover:
      "https://4.bp.blogspot.com/-1pF3kq82myc/UP5vv5nr6zI/AAAAAAAAA1o/wfm3N0xvjYA/s1600/bookby.jpg", //url
    title: "Book Six",
    description:
      "Nam molestiae in, unde, temporibus, aliquid velit rem voluptatum magnam quisquam molestias quas consequuntur facilis. Architecto dignissimos, accusantium cum harum, velit nostrum iure deserunt qui rem distinctio molestias repellat consequuntur soluta blanditiis porro, nesciunt eum voluptas facere exercitationem. Ut dolore maiores temporibus quia, accusantium fuga.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <RecommendationCarousel data={genreArr} />

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingLeft: 8 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    height: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  logo: {
    width: 66,
    height: 58,
  },
  list: {
    flexDirection: "row",
    gap: 10,
  },
});
