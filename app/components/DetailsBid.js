import { Image, StyleSheet, Text, View } from "react-native";
import { colors, fonts, sizes } from "../config";

import EthPrice from "./EthPrice";

const DetailsBid = ({ bid }) => {
  return (
    <View style={styles.container} key={bid.id}>
      <Image source={bid.image} resizeMode="contain" style={styles.image} />

      <View style={styles.bidContainer}>
        <Text style={styles.name}>{bid.name}</Text>
        <Text style={styles.date}>{bid.date}</Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({
  bidContainer: {
    flex: 1,
    paddingHorizontal: sizes.base,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
    paddingHorizontal: sizes.extraLarge,
  },
  date: {
    fontFamily: fonts.regular,
    fontSize: sizes.base,
    color: colors.secondary,
    marginTop: 3,
  },
  image: {
    width: 48,
    height: 48,
    marginRight: sizes.base,
  },
  name: {
    fontFamily: fonts.semiBold,
    fontSize: sizes.small,
    color: colors.primary,
  },
});

export default DetailsBid;
