import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const UserChatScreen: React.FC = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState('Chats');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const chats = [
    {
      id: '1',
      name: 'Devesh Ojha',
      message: 'Hello',
      time: '18:44',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: '2',
      name: 'Test 1',
      message: 'I am done',
      time: '12:36',
      image: 'https://via.placeholder.com/50x50',
    },
    {
      id: '3',
      name: 'Sachin',
      message: 'Photo',
      time: '11:15',
      image: 'https://via.placeholder.com/50x50',
      icon: 'image-outline',
    },
    {
      id: '4',
      name: 'Mohit Tyagi',
      message: 'Video',
      time: '10:00',
      image: 'https://via.placeholder.com/50x50',
      icon: 'videocam-outline',
    },
  ];

  // Function to filter chats based on search query
  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderChatItem = ({
    item,
  }: {
    item: { id: string; name: string; message: string; time: string; image: string; icon?: string };
  }) => (
    <View style={styles.chatItem}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <View style={styles.messageContainer}>
          <Text style={styles.chatMessage}>{item.message}</Text>
        </View>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileInitial}>J</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name, number..."
          placeholderTextColor="#aaa"
          value={searchQuery} // Bind search query to input field
          onChangeText={setSearchQuery} // Update search query state
        />
        <Ionicons name="search" size={20} color="#777" style={styles.searchIcon} />
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Chats' && styles.activeTab]}
          onPress={() => setActiveTab('Chats')}
        >
          <Text style={[styles.tabText, activeTab === 'Chats' && styles.activeTabText]}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Appointments' && styles.activeTab]}
          onPress={() => {
            setActiveTab('Appointments');
            navigation.navigate('UserAppointment');
          }}
        >
          <Text
            style={[styles.tabText, activeTab === 'Appointments' && styles.activeTabText]}
          >
            Appointments
          </Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats} // Use filteredChats instead of chats
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />

{/* Bottom Navigation */}
<View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#259D8A" />
          <Text style={styles.activeNav}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Vets")} // Navigate to VetsScreen
        >
          <MaterialIcons name="pets" size={28} color="#A5A5A5" />
          <Text style={styles.navText}>Vets</Text>
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
                  <MaterialIcons name="error" size={24} color="#A5A5A5" />
                  <Text style={styles.navText}>Red Zones</Text>
                </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#e6f7f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#2bc7c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 40,
    fontSize: 14,
    color: '#000',
    elevation: 2,
  },
  searchIcon: {
    marginLeft: 10,
    marginTop: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginTop: 10,
    elevation: 2,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2bc7c7',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  activeTabText: {
    color: '#2bc7c7',
  },
  chatList: {
    padding: 16,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatMessage: {
    fontSize: 14,
    color: '#777',
  },
  chatTime: {
    fontSize: 12,
    color: '#777',
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
  activeNav:{
    fontSize: 12,
    color: "#259D8A",
    marginTop: 5,
  },
  navTextInactive: {
    fontSize: 12,
    color: "#A5A5A5",
    marginTop: 5,
  },
});

export default UserChatScreen;
