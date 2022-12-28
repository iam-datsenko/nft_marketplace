import { Image, StyleSheet, Text, View } from "react-native";

import assets from "../assets/assets";
import { colors, fonts, sizes } from "../config";

const EthPrice = ({ price }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={assets.eth} style={styles.image} />
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    marginRight: 2,
    width: 20,
    height: 20,
  },
  price: {
    fontSize: sizes.font,
    fontFamily: fonts.medium,
    color: colors.primary,
  },
});

export default EthPrice;
