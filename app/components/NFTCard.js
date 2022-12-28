import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import assets from "../assets/assets";
import { colors, sizes, shadows } from "../config";
import CircleButton from "./CircleButton";
import EthPrice from "./EthPrice";
import NFTTitle from "./NFTTitle";
import RectButton from "./RectButton";
import SubInfo from "./SubInfo";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image resizeMode="cover" source={data.image} style={styles.image} />

        <View style={styles.rightButton}>
          <CircleButton imageUrl={assets.heart} onPress={() => {}} />
        </View>
      </View>

      <SubInfo />

      <View style={styles.containerTitle}>
        <NFTTitle
          title={data.name}
          titleSize={sizes.large}
          subTitle={data.creator}
          subTitleSize={sizes.small}
        />

        <View style={styles.containerPrice}>
          <EthPrice price={data.price} />

          <RectButton
            onPress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: sizes.base,
    marginBottom: sizes.large,
    ...shadows.dark,
    borderRadius: sizes.font,

    backgroundColor: colors.white,
  },
  containerImage: {
    width: "100%",
    height: 250,
  },
  containerPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: sizes.font,
  },
  containerTitle: {
    width: "100%",
    paddingBottom: sizes.large,
    paddingHorizontal: sizes.large,
  },
  image: {
    borderTopLeftRadius: sizes.font,
    borderTopRightRadius: sizes.font,
    width: "100%",
    height: "100%",
  },
  rightButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default NFTCard;
