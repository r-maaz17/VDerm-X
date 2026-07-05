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

const LoginScreen = ({ navigation }: any) => {
  const formOpacity = useRef(new Animated.Value(0)).current; // Fade-in animation for the form
  const formTranslateY = useRef(new Animated.Value(50)).current; // Slide-up animation for the form
  const logoOpacity = useRef(new Animated.Value(0)).current; // Fade-in animation for the logo
  const [email, setEmail] = useState("test@example.com"); // Hardcoded email
  const [password, setPassword] = useState("password123"); // Hardcoded password
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  // Animations for logo and form
  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(formOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(formTranslateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  /*const handleSubmit = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }*/

    // Backend logic commented out
    /*
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Error during login");
    }
    

    // Temporary success message
    Alert.alert("Success", "Login feature currently disabled.");
  };
*/
const handleSubmit = () => {
  if (email === "" || password === "") {
    Alert.alert("Error", "Please enter both email and password");
    return;
  }

  // Temporary success message
  Alert.alert("Success", `Email: ${email}\nPassword: ${password}`);
  navigation.navigate("Home");
  //navigation.navigate("VetHome");

};
  return (
    <View style={styles.container}>
      {/* Animated Logo */}
      <Animated.View style={[styles.logoContainer, { opacity: logoOpacity }]}>
        <Image source={require("../Assets/logo.png")} style={styles.logo} />
      </Animated.View>

      {/* Animated Form Container */}
      <Animated.View
        style={[
          styles.formContainer,
          {
            opacity: formOpacity,
            transform: [{ translateY: formTranslateY }],
          },
        ]}
      >
        <Text style={styles.title}>Login</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerText}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F7F8FA", // Light background
  },
  logoContainer: {
    marginBottom: 30, // Space between logo and form
  },
  logo: {
    width: 120, // Adjust the logo width
    height: 120, // Adjust the logo height
    resizeMode: "contain", // Maintain aspect ratio
  },
  formContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#259D8A",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  registerText: {
    marginTop: 15,
    color: "#259D8A",
    fontSize: 16,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
