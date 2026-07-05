import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
  Image,
  Alert,
} from "react-native";

const VetFormScreen = ({ navigation }: any) => {
  const formOpacity = useRef(new Animated.Value(0)).current;
  const formTranslateY = useRef(new Animated.Value(50)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [qualification, setQualification] = useState("");

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.parallel([
        Animated.timing(formOpacity, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(formTranslateY, { toValue: 0, duration: 1000, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const handleVetFormSubmit = () => {
    if (!username || !email || !password || !phoneNumber || !licenseNumber || !qualification) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Add any additional validation or backend logic here if needed

    Alert.alert("Success", "Vet form submitted successfully!");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Image source={require("../Assets/logo.png")} style={styles.logo} />
      </Animated.View>

      <Animated.View
        style={[
          styles.formContainer,
          { opacity: formOpacity, transform: [{ translateY: formTranslateY }] },
        ]}
      >
        <Text style={styles.title}>Veterinarian Registration</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="License Number"
          value={licenseNumber}
          onChangeText={setLicenseNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Qualification"
          value={qualification}
          onChangeText={setQualification}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleVetFormSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#F7F8FA" },
  logoContainer: { marginBottom: 30 },
  logo: { width: 120, height: 120, resizeMode: "contain" },
  formContainer: { width: "100%", padding: 20, backgroundColor: "#FFFFFF", borderRadius: 10 },
  title: { fontSize: 22, fontWeight: "700", color: "#333", textAlign: "center", marginBottom: 20 },
  input: { height: 50, backgroundColor: "#F2F2F2", borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 },
  submitButton: { backgroundColor: "#259D8A", paddingVertical: 15, borderRadius: 8, alignItems: "center" },
  submitButtonText: { color: "#FFFFFF", fontSize: 18, fontWeight: "600" },
});

export default VetFormScreen;
