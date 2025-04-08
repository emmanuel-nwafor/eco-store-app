import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

// Correct import statement for items
import items from "./items"; // Ensure the file path is correct

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header and Search section */}
      <View style={{ borderBottomLeftRadius: 35, borderBottomRightRadius: 35, backgroundColor: "#000" }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hi, Welcome</Text>
          <Ionicons name="person-circle" size={30} color="#080808" />
        </View>

        <View style={styles.search}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* ScrollView for content */}
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        
        {/* New Collection section in row layout */}
        <View style={styles.board}>
          <Text style={styles.boardText}>New Collection</Text>
          <Pressable>
            <Text style={{ color: "black", fontSize: 15 }}>See all</Text>
          </Pressable>
        </View>

        {/* Grid of items */}
        <View style={styles.gridContainer}>
          {items.map((item) => (
            <View key={item.id} style={styles.itemContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <Ionicons name="heart-outline" size={24} color="#000" style={{ position: "absolute", top: 15, right: 10 }} />
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  searchInput: {
    borderWidth: 1,
    // borderColor: "#2f2f2f",
    backgroundColor: "#f2f2f2",
    color: "#000",
    fontSize: 15,
    borderRadius: 20,
    padding: 15,
    height: 50,
    width: "84%", // Adjusted for responsiveness
  },
  searchButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  // New Collection section
  board: {
    flexDirection: "row",
    marginTop: 25,
    margin: 10,
    justifyContent: "space-between",
  },
  boardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  // Grid container for items
  itemsContainer: {
    flexGrow: 1, // To prevent content from not filling the screen
    paddingHorizontal: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "47%", // Adjusted for responsiveness (2 items per row)
    marginVertical: 10,
    backgroundColor: "#f1f5fe",
    borderRadius: 12,
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  itemInfo: {
    paddingHorizontal: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "light",
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
