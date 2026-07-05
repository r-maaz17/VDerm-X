import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const VetAppointmentScreen = ({ navigation }: { navigation: any }) => {

//const VetAppointmentScreen: React.FC = () => {
  const appointments = [
    {
      id: '1',
      status: 'Appointment Booked',
      name: 'Ali Ahmad',
      date: '20 December',
      time: '5:00 PM',
    },
    {
      id: '2',
      status: 'Appointment Booked',
      name: 'Ali Ahmad',
      date: '20 December',
      time: '5:00 PM',
    },
    {
      id: '3',
      status: 'Appointment Booked',
      name: 'Ali Ahmad',
      date: '20 December',
      time: '5:00 PM',
    },
  ];

  const renderAppointment = ({
    item,
  }: {
    item: {
      id: string;
      status: string;
      name: string;
      date: string;
      time: string;
    };
  }) => (
    <View style={styles.card}>
      <Text style={styles.status}>{item.status}</Text>
      <Text style={styles.details}>Name: {item.name}</Text>
      <Text style={styles.details}>Date: {item.date}</Text>
      <Text style={styles.details}>Time: {item.time}</Text>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Message</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#000" />
        <Image
                 source={require("../Assets/logo.png")} // Replace with your logo path
                 style={styles.logo}
               />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.tabText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.tabText}>Appointments</Text>
        </TouchableOpacity>
      </View>

      {/* Appointment List */}
      <FlatList
        data={appointments}
        renderItem={renderAppointment}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />

      {/* Footer Navigation */}
      <View style={styles.footer}>
         <TouchableOpacity
                  style={styles.navItem}
                  onPress={() => navigation.navigate("VetHome")} // Navigate to VetsScreen
                >
          <Ionicons name="chatbubble-outline" size={24} color="#000" />
          <Text style={styles.navText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.navItem}
           onPress={() => navigation.navigate("VetSchedule")} // Navigate to VetsScreen
         >
          <Ionicons name="calendar-outline" size={24} color="#000" />
          <Text style={styles.navText}>My Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
    backgroundColor: '#ffffff',
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
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1abc9c',
    paddingBottom: 5,
  },
  inactiveTab: {
    paddingBottom: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#d8f3f5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  messageButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#f46c63',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  messageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
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

export default VetAppointmentScreen;
