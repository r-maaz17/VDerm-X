import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from "react-native";

const LaunchScreen = ({ navigation }: any) => {
  const logoOpacity = useRef(new Animated.Value(0)).current; // For logo fade-in
  const logoTranslateY = useRef(new Animated.Value(-200)).current; // For logo vertical movement
  const textOpacity = useRef(new Animated.Value(0)).current; // For text fade-in
  const textScale = useRef(new Animated.Value(0.8)).current; // For text scaling

  useEffect(() => {
    Animated.sequence([
      // Logo animation: fade in and slide down
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      // Text animation: fade in and scale
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ translateY: logoTranslateY }],
          },
        ]}
      >
        <Image source={require("../Assets/logo.png")} style={styles.logo} />
      </Animated.View>

      {/* Animated Welcome Text */}
      <Animated.Text
        style={[
          styles.welcomeText,
          { opacity: textOpacity, transform: [{ scale: textScale }] },
        ]}
      >
        Detect Lumpy Skin Disease, book vets, and get instant support
      </Animated.Text>
      <Animated.Text
        style={[
          styles.welcomeText2,
          { opacity: textOpacity, transform: [{ scale: textScale }] },
        ]}
      >
        all in one app!
      </Animated.Text>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E9FEFE", // Background color
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150, // Adjust the width according to your needs
    height: 150, // Adjust the height according to your needs
    resizeMode: "contain", // Maintain aspect ratio
    marginTop: 100,
  },
  welcomeText: {
    fontSize: 16, // Adjust for readability
    textAlign: "center", // Center the text
    color: "#333", // Dark gray for better readability
    marginHorizontal: 20, // Add padding around the text
    marginTop: 20, // Space above the text
    fontWeight: "300", // Medium font weight
    lineHeight: 28, // Add line height for better spacing
  },
  welcomeText2: {
    fontSize: 16, // Adjust for readability
    textAlign: "center", // Center the text
    color: "#333", // Dark gray for better readability
    marginHorizontal: 20, // Add padding around the text
    marginTop: 0, // Space above the text
    fontWeight: "500", // Medium font weight
    lineHeight: 28, // Add line height for better spacing
  },
  loginText: {
    marginTop: 20,
    color: "#191919",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  registerButton: {
    backgroundColor: "#259D8A", // Button color
    paddingVertical: 15, // Vertical padding for height
    paddingHorizontal: 100, // Horizontal padding for width
    borderRadius: 25, // Rounded corners
    alignItems: "center", // Center text horizontally
    marginTop: 200, // Space above the button
  },
  registerButtonText: {
    color: "#FFFFFF", // White text color
    fontSize: 18, // Text size
    fontWeight: "600", // Semi-bold font weight
  },
});
export default LaunchScreen;
