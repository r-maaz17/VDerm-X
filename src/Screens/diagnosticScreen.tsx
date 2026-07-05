import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../../App";

const DiagnosticScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, "Diagnosis">>();

  const handleImagePick = async (type: "camera" | "gallery") => {
    try {
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      const libraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (cameraPermission.status !== "granted" || libraryPermission.status !== "granted") {
        Alert.alert("Permission Denied", "We need permission to access your camera and gallery.");
        return;
      }

      let result;
      if (type === "camera") {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.8,
        });
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.8,
        });
      }

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred while selecting the image.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileInitial}>J</Text>
        </View>
        <Text style={styles.headerTitle}>Diagnosis</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.instructions}>
          Diagnose your pet's condition by uploading an image
        </Text>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleImagePick("camera")}
        >
          <Ionicons name="camera" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleImagePick("gallery")}
        >
          <Ionicons name="image" size={24} color="#fff" />
          <Text style={styles.actionButtonText}>Choose from Gallery</Text>
        </TouchableOpacity>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
        )}
        {loading ? (
          <ActivityIndicator size="large" color="#259D8A" />
        ) : (
          <TouchableOpacity
            style={styles.uploadButton}
            onPress={() =>
              Alert.alert("Upload Image", "Backend functionality is commented out.")
            }
          >
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#A5A5A5" />
          <Text style={styles.navTextInactive}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Vets")}
        >
          <MaterialIcons name="pets" size={28} color="#A5A5A5" />
          <Text style={styles.navTextInactive}>Vets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="camera" size={28} color="#259D8A" />
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
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginRight: 120,
    marginTop: 40,
    color: "#259D8A",
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
    marginTop: 10,
  
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#259D8A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  uploadButton: {
    backgroundColor: "#259D8A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
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
    color: "#259D8A",
    marginTop: 5,
  },
  navTextInactive: {
    fontSize: 12,
    color: "#A5A5A5",
    marginTop: 5,
  },
});

export default DiagnosticScreen;
