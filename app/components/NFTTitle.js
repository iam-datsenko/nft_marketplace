import { Text, View } from "react-native";

import { colors, fonts } from "../config";

const NFTTitle = ({ title, titleSize, subTitle, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: titleSize,
          fontFamily: fonts.semiBold,
          color: colors.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: subTitleSize,
          fontFamily: fonts.regular,
          color: colors.gray,
        }}
      >
        by {subTitle}
      </Text>
    </View>
  );
};

export default NFTTitle;
