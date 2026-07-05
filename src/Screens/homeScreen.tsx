import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Chats");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Home">>();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileInitial}>J</Text>
        </View>
        <Image
          source={require("../Assets/logo.png")} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Chats" && styles.activeTab]}
          onPress={() => setActiveTab("Chats")}
        >
          <Text
            style={[styles.tabText, activeTab === "Chats" && styles.activeTabText]}
          >
            ChatBot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
  style={[styles.tab, activeTab === "Appointments" && styles.activeTab]}
  onPress={() => {
    setActiveTab("Appointments");
    navigation.navigate("UserAppointment");
    //navigation.navigate("VetAppointment");
  }}
>
  <Text
    style={[
      styles.tabText,
      activeTab === "Appointments" && styles.activeTabText,
    ]}
  >
    Appointments
  </Text>
</TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.instructions}>
          Start a new chat here{"\n"}Ask anything about your pet
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Ask here"
            placeholderTextColor="#A3D7D5"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}
         onPress={() => navigation.navigate("UserChat")}
         >
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#A5A5A5" />
          <Text style={styles.activeNav}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Vets")} // Navigate to VetsScreen
        >
          <MaterialIcons name="pets" size={28} color="#A5A5A5" />
          <Text style={styles.navTextInactive}>Vets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}
          onPress={() => navigation.navigate("Diagnosis")} // Navigate to VetsScreen
      
        >
          <MaterialIcons name="camera" size={28} color="#A5A5A5" />
          <Text style={styles.navText}>Diagnosis</Text>
        </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}
                onPress={() => navigation.navigate('RedZone')}
                >
                  <Ionicons name="alert-circle-outline" size={24} color="#000" />
                  <Text style={styles.navText}>Red Zones</Text>
                </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F6F6",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginTop: 40,
    backgroundColor: "#259D8A",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    
  },
  profileInitial: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  logo: {
    width: 100,
    marginTop: 40,
    marginRight: 120,
    height: 40,
    resizeMode: "contain",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    marginTop: 10,
    elevation: 2,
  },
  tab: {
    paddingVertical: 12,
    width: "50%",
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#259D8A",
  },
  tabText: {
    fontSize: 16,
    color: "#A5A5A5",
  },
  activeTabText: {
    color: "#259D8A",
    fontWeight: "600",
  },
  activeNav:{
    fontSize: 12,
    color: "#A5A5A5",
    marginTop: 5,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#A3D7D5",
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: "#fff",
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#259D8A",
    padding: 5,
    marginRight: 0,
    borderRadius: 25,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#A5A5A5",
    marginTop: 5,
  },
  navTextInactive: {
    fontSize: 12,
    color: "#A5A5A5",
    marginTop: 5,
  },
});

export default HomeScreen;
