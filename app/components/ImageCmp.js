import { Image, StyleSheet, View } from "react-native";

import { sizes } from "../config";

const ImageCmp = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={imageUrl} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: sizes.small,
  },
  image: {
    marginHorizontal: -sizes.small,
    width: 48,
    height: 48,
  },
});

export default ImageCmp;
