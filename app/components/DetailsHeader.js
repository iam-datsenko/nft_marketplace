import { Image, StyleSheet, Text, View } from "react-native";

import { colors, fonts, sizes } from "../config";
import DetailDesc from "./DetailDesc";
import SubInfo from "./SubInfo";

const DeatilsHeader = ({ data }) => {
  return (
    <>
      <View style={styles.containerImage}>
        <Image resizeMode="cover" source={data.image} style={styles.image} />
      </View>

      <SubInfo />

      <View style={styles.containerDesc}>
        <DetailDesc data={data} />

        {data.bids.length > 0 && <Text style={styles.text}>Current Bid</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerDesc: {
    padding: sizes.font,
  },
  containerImage: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    paddingHorizontal: sizes.small,

    fontSize: sizes.font,
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },
});

export default DeatilsHeader;
