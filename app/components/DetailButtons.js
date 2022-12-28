import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import assets from "../assets/assets";
import CircleButton from "./CircleButton";
import RectButton from "./RectButton";
import { sizes, shadows } from "../config";

const DetailButton = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.middleButton}>
        <RectButton onPress={() => {}} />
      </View>

      <View style={styles.leftButton}>
        <CircleButton
          imageUrl={assets.left}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.rightButton}>
        <CircleButton imageUrl={assets.heart} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  leftButton: {
    position: "absolute",
    zIndex: 1,
    left: 10,
    top: 10,
  },
  middleButton: {
    position: "absolute",
    bottom: sizes.base,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",

    ...shadows.dark,
    width: "100%",
    paddingVertical: sizes.font,
  },
  rightButton: {
    position: "absolute",
    zIndex: 1,
    right: 10,
    top: 10,
  },
});

export default DetailButton;
