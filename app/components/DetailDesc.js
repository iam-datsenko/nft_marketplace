import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, sizes, fonts } from "../config";
import EthPrice from './EthPrice';
import NFTTitle from './NFTTitle';

const DetailDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
  <>
    <View style={styles.title}>
      <NFTTitle 
        title={data.name}
        subTitle={data.creator}
        titleSize={sizes.extraLarge}
        subTitleSize={sizes.font}
      />

      <EthPrice price={data.price}/>
    </View>

    <View style={styles.bids}>
      <Text style={styles.desc}>Description</Text>

      <View
          style={styles.descContainer}
        >
          <Text
            style={styles.text}
          >
            {text}
            {!readMore && "..."}
            <Text
              style={styles.more}
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  bids: {
    marginVertical: sizes.extraLarge,
    paddingHorizontal: 10,
  },
  desc: {
    fontFamily: fonts.semiBold,
    fontSize: sizes.font,
    color: colors.primary,
  },
  descContainer: {
    marginTop: sizes.base,
  },
  more: {
    color: colors.primary,
    fontSize: sizes.small,
    fontFamily: fonts.semiBold,
  },
  text: {
    color: colors.secondary,
    fontSize: sizes.small,
    fontFamily: fonts.regular,
    lineHeight: sizes.large,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
})

export default DetailDesc;