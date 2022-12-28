import { Image, StyleSheet, Text, TextInput, View } from "react-native";

import assets from "../assets/assets";
import { colors, fonts, sizes } from "../config";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={assets.logo} resizeMode="contain" style={styles.logo} />

        <View style={styles.containerProfile}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={styles.profile}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.badge}
          />
        </View>
      </View>

      <View style={styles.containerText}>
        <Text style={styles.greeting}>Hello Mariia 👋</Text>

        <Text style={styles.subTitle}>Let’s Find Masterpiece Art</Text>
      </View>

      <View style={styles.containerSearch}>
        <Image
          source={assets.search}
          resizeMode="contain"
          style={styles.search}
        />
        <TextInput
          placeholder="Search NFTs"
          placeholderTextColor={colors.light}
          style={styles.searchInput}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    bottom: 0,
    right: 0,

    width: 15,
    height: 15,
  },
  container: {
    padding: sizes.font,

    backgroundColor: colors.primary,
  },
  containerProfile: {
    width: 45,
    height: 45,
  },
  containerText: {
    marginVertical: sizes.font,
  },
  containerSearch: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: sizes.font,
    borderRadius: sizes.font,
    width: "100%",
    paddingHorizontal: sizes.font,
    paddingVertical: sizes.extraSmall,

    backgroundColor: colors.gray,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greeting: {
    fontSize: sizes.small,
    fontFamily: fonts.regular,
    color: colors.white,
  },
  logo: {
    width: 90,
    height: 25,
  },
  profile: {
    width: "100%",
    height: "100%",
  },
  search: {
    marginRight: sizes.base,
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,

    color: colors.white,
  },
  subTitle: {
    marginTop: sizes.base / 2,

    fontSize: sizes.large,
    fontFamily: fonts.bold,
    color: colors.white,
  },
});

export default HomeHeader;
