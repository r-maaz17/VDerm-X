import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VetScheduleScreen = ({ navigation }: { navigation: any }) => {
  const availableSlots = [
    { id: '1', day: 'Thursday', time: '5:00 PM - 9:00 PM' },
    { id: '2', day: 'Monday', time: '5:00 PM - 9:00 PM' },
  ];

  const renderSlot = ({ item }: { item: { day: string; time: string } }) => (
    <View style={styles.slotCard}>
      <Text style={styles.slotText}>{item.day}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
              {/* Header */}
              <View style={styles.header}>
                <Ionicons name="arrow-back-outline" size={24} color="#000" style={styles.arrow}/>
                <Image
                         source={require("../Assets/logo.png")} // Replace with your logo path
                         style={styles.logo}
                       />
              </View>
      <Text style={styles.sectionTitle}>Available Slots</Text>
      <FlatList
        data={availableSlots}
        renderItem={renderSlot}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.slotList}
      />
 {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navItem}
        onPress={() => navigation.navigate('VetHome')}
        >
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('VetSchedule')}
        >
          <Ionicons name="calendar-outline" size={24} color="#000" />
          <Text style={styles.navText}>My Schedule</Text>
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
    backgroundColor: '#E8F6F6',
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
  logo: {
    width: 100,
    marginTop: 40,
    marginRight: 120,
    height: 40,
    resizeMode: "contain",
  },
  arrow: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    color: '#259D8A',
  },
  slotList: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  slotCard: {
    backgroundColor: '#92d6d8',
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'flex-start',
    position: 'relative',
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#f39c12',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f5f5f5',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#000',
  },
});

export default VetScheduleScreen;
