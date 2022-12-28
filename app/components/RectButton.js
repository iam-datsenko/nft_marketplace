import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { colors, fonts, sizes } from "../config";

const RectButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>Place a bid</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.extraLarge,
    minWidth: 120,
    padding: sizes.small,

    backgroundColor: colors.primary,
  },
  text: {
    fontSize: sizes.font,
    fontFamily: fonts.semiBold,
    textAlign: "center",
    color: colors.white,
  },
});

export default RectButton;
