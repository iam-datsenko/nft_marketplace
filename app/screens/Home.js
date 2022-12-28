import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import Background from "../components/Background";
import HomeHeader from "../components/HomeHeader";
import NFTCard from "../components/NFTCard";
import NFTData from "../api/nfts";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) {
      return setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.container}>
          <View style={styles.listContainer}>
            <FlatList
              data={nftData}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
              renderItem={({ item }) => <NFTCard data={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>

      <Background />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 5,
  },
  listContainer: {
    zIndex: 0,
  },
});

export default Home;
