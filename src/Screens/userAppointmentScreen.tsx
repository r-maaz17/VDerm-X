import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
//const UserAppointmentScreen: React.FC = () => {
const UserAppointmentScreen = ({ navigation }: { navigation: any }) => {  
const availableSlots = [
    { day: 'Thursday', time: '5:00 PM - 9:00 PM' },
    { day: 'Monday', time: '5:00 PM - 9:00 PM' },
  ];

  const reviews = [
    { id: '1', user: 'Ali', timeAgo: '3w ago', text: 'Vet 1 is really cooperative and he checked my pet thoroughly. Recommended.' },
    { id: '2', user: 'Ali', timeAgo: '3w ago', text: 'Vet 1 is really cooperative and he checked my pet thoroughly. Recommended.' },
  ];

  const renderSlot = ({ item }: { item: { day: string; time: string } }) => (
    <View style={styles.slotCard}>
      <Text style={styles.slotText}>{item.day}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </View>
  );

  const renderReview = ({ item }: { item: { user: string; timeAgo: string; text: string } }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Text style={styles.reviewUser}>
          {item.user}
        </Text>
        <View style={styles.Rstars}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} name="star" size={16} color="gold" />
          ))}
        </View>
      </View>
      <Text style={styles.reviewTime}>
        {item.timeAgo}
      </Text>
      <Text style={styles.reviewText}>{item.text}</Text>
    </View>
  );
  
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
          <Text style={styles.headerText}>Vet 1</Text>
        </View>
        <View style={styles.headerIcons}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#000" style={styles.icon} />
          <Ionicons name="ellipsis-vertical-outline" size={24} color="#000" style={styles.icon} />
        </View>
      </View>

      {/* Available Slots */}
      <Text style={styles.sectionTitle}>Available Slots</Text>
      <FlatList
        data={availableSlots}
        renderItem={renderSlot}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slotList}
      />

      {/* Rating */}
      <Text style={styles.sectionTitle}>Rating</Text>
      <View style={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <Ionicons key={index} name="star" size={24} color="gold" />
        ))}
      </View>

      {/* Reviews */}
      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={reviews}
        renderItem={renderReview}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.reviewList}
      />
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#A5A5A5" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Vets")}>
          <MaterialIcons name="pets" size={28} color="#259D8A" />
          <Text style={styles.activeNav}>Vets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Diagnosis")}>
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

  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    marginTop: 40,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
    marginTop: 40,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
    marginLeft: 10,
    color: "#259D8A",
  },
  slotList: {
    marginBottom: 20,
    paddingVertical: 10,
  },
  slotCard: {
    backgroundColor: '#92d6d8',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'flex-start', // Align content to the left
    position: 'relative', // To place the book button at the bottom-right
  },
  slotText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'left',
  },
  bookButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    marginLeft: 20,
  },
  reviewList: {
    paddingBottom: 20,
  },
  reviewCard: {
    backgroundColor: '#92d6d8',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between name and stars
    alignItems: 'center', // Align items vertically centered
    flexWrap: 'wrap',
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    maxWidth: '80%',
  },
  Rstars: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align stars to the right
    flexShrink: 0,
  },
  reviewTime: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
    marginTop: 5,  // Time will appear below the name
  },
  reviewText: {
    marginTop: 5,
    fontSize: 14,
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
  activeNav: {
    fontSize: 12,
    color: "#259D8A",
    marginTop: 5,
  },
});

export default UserAppointmentScreen;
