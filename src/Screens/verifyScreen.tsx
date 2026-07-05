import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const VerifyScreen = ({ route, navigation }: any) => {
  const { email } = route.params;
  const [otp, setOtp] = useState(["", "", "", ""]); // Array for 4-digit OTP
  const [timer, setTimer] = useState(60); // Timer state in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(false); // Disable resend OTP button
  const inputs = useRef<Array<TextInput | null>>([]); // Refs for each input box

  // Start timer when the page loads
  useEffect(() => {
    setIsResendDisabled(true); // Disable resend button initially
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          setIsResendDisabled(false); // Enable resend button after 60 seconds
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []); // Empty dependency array ensures this runs only once when the page is loaded

  const handleVerify = async () => {
    if (otp.some((digit) => digit === "")) {
      Alert.alert("Error", "Please enter all 4 digits of the OTP.");
      return;
    }

    // Commented out backend call
    /*
    try {
      const response = await fetch(`${BASE_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otp.join("") }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "OTP verified successfully.");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", data.message || "OTP verification failed.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during OTP verification.");
    }
    */

    Alert.alert("Info", "OTP verification functionality is disabled.");
  };

  const handleResendOtp = async () => {
    // Commented out backend call
    /*
    try {
      const response = await fetch(`${BASE_URL}/auth/resend-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json(); // Parse the response JSON

      if (response.ok) {
        Alert.alert("Success", data.message || "A new OTP has been sent to your email.");
        setOtp(["", "", "", ""]); // Clear the OTP input boxes
        setTimer(60); // Reset timer to 60 seconds
        setIsResendDisabled(true); // Disable resend OTP button
      } else {
        Alert.alert("Error", data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while resending OTP. Please try again later.");
    }
    */

    Alert.alert("Info", "Resend OTP functionality is disabled.");
    setOtp(["", "", "", ""]); // Clear the OTP input boxes
    setTimer(60); // Reset timer to 60 seconds
    setIsResendDisabled(true); // Disable resend OTP button
  };

  const handleInputChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Ensure only digits are entered
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus on the next box if available
    if (value && index < otp.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>OTP Verification</Text>
      <Text style={styles.subText}>Enter the OTP sent to your email.</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleResendOtp}
        disabled={isResendDisabled} // Disable the button if timer is running
      >
        <Text style={[styles.resendText, isResendDisabled && { color: "#ccc" }]}>
          {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  headerText: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  subText: { fontSize: 16, color: "#666", marginBottom: 20 },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#259D8A",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    backgroundColor: "#FFFFFF",
  },
  verifyButton: { backgroundColor: "#259D8A", paddingVertical: 15, paddingHorizontal: 50, borderRadius: 8 },
  verifyButtonText: { color: "#FFFFFF", fontSize: 18 },
  resendText: { marginTop: 15, color: "#259D8A", fontSize: 16, textDecorationLine: "underline" },
});

export default VerifyScreen;