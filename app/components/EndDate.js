import { StyleSheet, Text, View } from "react-native";

import { colors, fonts, shadows, sizes } from "../config";

const EndDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ending in</Text>
      <Text style={styles.time}>12h 30m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    borderRadius: sizes.font,
    ...shadows.light,
    elevation: 1,
    maxWidth: "50%",
    paddingHorizontal: sizes.font,
    paddingVertical: sizes.small,

    backgroundColor: colors.white,
  },
  text: {
    fontSize: sizes.small,
    fontFamily: fonts.regular,
    color: colors.gray,
  },
  time: {
    fontSize: sizes.medium,
    fontFamily: fonts.semiBold,
    color: colors.primary,
  },
});

export default EndDate;
