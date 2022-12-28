import { StyleSheet, View } from "react-native";

import EndDate from "./EndDate";
import People from "./People";
import { sizes } from "../config";

const SubInfo = () => {
  return (
    <View style={styles.container}>
      <People />
      <EndDate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: -sizes.extraLarge,
    width: "100%",
    paddingHorizontal: sizes.large,
  },
});

export default SubInfo;
