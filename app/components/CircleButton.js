import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { colors, shadows, sizes } from "../config";

const CircleButton = ({ imageUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" source={imageUrl} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",

    ...shadows.light,
    borderRadius: sizes.extraLarge,
    width: 40,
    height: 40,

    backgroundColor: colors.white,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default CircleButton;
