import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'; // To get user location, if needed.

const RedZoneScreen = ({ navigation }: { navigation: any }) => {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    // Get user's location if needed
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      
      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Red Zones</Text>
      {/* Map to show red zones */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation?.latitude || 37.78825, // Default to a location if not available
          longitude: userLocation?.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Example Red Zone markers */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Red Zone 1" />
        <Marker coordinate={{ latitude: 37.78925, longitude: -122.4334 }} title="Red Zone 2" />
        <Marker coordinate={{ latitude: 37.79025, longitude: -122.4344 }} title="Red Zone 3" />
      </MapView>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
  },
  map: {
    flex: 1,
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

export default RedZoneScreen;
