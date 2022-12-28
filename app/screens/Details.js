import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import { sizes } from "../config";
import DetailsBid from "../components/DetailsBid";
import DetailButtons from "../components/DetailButtons";
import DetailsHeader from "../components/DetailsHeader";

const Details = ({ route }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <DetailButtons />

      <FlatList
        contentContainerStyle={{
          paddingBottom: sizes.extraLarge * 1.5,
        }}
        data={data.bids}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => <DetailsHeader data={data} />}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
