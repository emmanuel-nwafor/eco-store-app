import React, { useState } from "react";
import { Link } from "expo-router";
import { 
  Text, 
  View, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  useWindowDimensions 
} from "react-native";

export default function Login() {
  const { width, height } = useWindowDimensions(); // Get screen size
  const isSmallScreen = width < 380; // Adjust layout for smaller screens

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Something went wrong", "All fields are required");
      return;
    }
    console.log("Logging in with", email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View 
        style={{ 
          flex: 1, 
          justifyContent: "center", 
          paddingHorizontal: isSmallScreen ? 15 : 25, // Adjust padding
        }}
      >
        <Text 
          style={{
            color: "white",
            fontSize: isSmallScreen ? 40 : 50, // Adjust font size
            fontWeight: "bold",
            marginBottom: 20,
            // textAlign: "center",
          }}
        >
          Login
        </Text>
        
        {/* Email Input */}
        <View style={{ marginBottom: 20 }}>
          <Text 
            style={{ 
              color: "white",
              position: "absolute",
              top: isFocusedEmail || email ? -10 : 15, 
              left: 10, 
              backgroundColor: "black",
              zIndex: 1,
              paddingHorizontal: 5,
              fontSize: isFocusedEmail || email ? 14 : 16 
            }}
          >
            Email
          </Text>
          <TextInput
            placeholder=""
            placeholderTextColor="#888"
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => setIsFocusedEmail(email.length > 0)}
            value={email}
            onChangeText={setEmail}
            style={{
              borderWidth: 1,
              borderColor: "white",
              padding: 15,
              borderRadius: 10,
              color: "white",
              fontSize: isSmallScreen ? 14 : 16,
            }}
          />
        </View>
        
        {/* Password Input */}
        <View style={{ marginBottom: 20 }}>
          <Text 
            style={{ 
              color: "white",
              position: "absolute",
              top: isFocusedPassword || password ? -10 : 15, 
              left: 10, 
              backgroundColor: "black",
              zIndex: 1,
              paddingHorizontal: 5,
              fontSize: isFocusedPassword || password ? 14 : 16 
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder=""
            placeholderTextColor="#888"
            secureTextEntry
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(password.length > 0)}
            value={password}
            onChangeText={setPassword}
            style={{
              borderWidth: 1,
              borderColor: "white",
              padding: 15,
              borderRadius: 10,
              color: "white",
              fontSize: isSmallScreen ? 14 : 16,
            }}
          />
        </View>
        
        {/* Login Button */}
        <TouchableOpacity 
          style={{
            backgroundColor: "white",
            padding: isSmallScreen ? 15 : 20,
            borderRadius: 15,
            alignItems: "center",
          }} 
          onPress={handleLogin}
        >
          <Text style={{ fontSize: isSmallScreen ? 14 : 16 }}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Link href={"/"} style={{ color: "#888", fontSize: isSmallScreen ? 13 : 15 }}>
            <Text>Don't have an account? Sign up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
