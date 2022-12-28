import { StyleSheet, View } from "react-native";

import assets from "../assets/assets";
import ImageCmp from "./ImageCmp";

const people = [assets.person02, assets.person03, assets.person04];

const People = () => {
  return (
    <View style={styles.people}>
      {people.map((imageUrl, index) => (
        <ImageCmp imageUrl={imageUrl} key={`People-${index}`} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  people: {
    flexDirection: "row",
  },
})

export default People;