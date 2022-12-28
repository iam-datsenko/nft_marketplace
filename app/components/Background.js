import { StyleSheet, View } from "react-native";

import { colors } from "../config";

const Background = () => {
  return (
    <View style={styles.background}>
      <View style={styles.backgroundPrimary} />
      <View style={styles.backgroundWhite} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundPrimary: {
    height: 300,

    backgroundColor: colors.primary,
  },
  backgroundWhite: {
    flex: 1,

    backgroundColor: colors.white,
  },
});

export default Background;
