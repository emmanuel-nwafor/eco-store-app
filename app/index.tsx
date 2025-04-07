import { Link } from "expo-router";
import React, { useState } from "react";
import { 
  Text, 
  View, 
  SafeAreaView, 
  TextInput, 
  Pressable, 
  TouchableOpacity, 
  Alert 
} from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword || !agreed) {
      Alert.alert("Something went wrong", "All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    console.log("Signing up with", email, password);
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ 
        backgroundColor: "white", 
        height: "100%", 
        justifyContent: "center", 
        padding: 10,
      }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Text style={{
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
            marginBottom: 10,
            margin: 20,
          }}>
            Sign up 
          </Text>
          <Text style={{ color: "white", marginBottom: 10, margin: 20, }}>AXIOS</Text>
        </View>
        
        {/* Email Input */}
        <View style={{ margin: 20 }}>
          <Text style={{ 
            color: "white", 
            position: "absolute", 
            zIndex: 1,
            top: isFocusedEmail || email ? -10 : 15, 
            left: 10, 
            backgroundColor: "black", 
            paddingHorizontal: 5,
            fontSize: isFocusedEmail || email ? 14 : 16 
          }}>
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
            }}
          />
        </View>
        
        {/* Password Input */}
        <View style={{ margin: 20 }}>
          <Text style={{ 
            color: "white", 
            position: "absolute", 
            zIndex: 1,
            top: isFocusedPassword || password ? -10 : 15, 
            left: 10, 
            backgroundColor: "black", 
            paddingHorizontal: 5,
            fontSize: isFocusedPassword || password ? 14 : 16 
          }}>
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
            }}
          />
        </View>

        {/* Confirm Password Input */}
        <View style={{ margin: 20 }}>
          <Text style={{ 
            color: "white", 
            position: "absolute", 
            zIndex: 1,
            top: isFocusedConfirmPassword || confirmPassword ? -10 : 15, 
            left: 10, 
            backgroundColor: "black", 
            paddingHorizontal: 5,
            fontSize: isFocusedConfirmPassword || confirmPassword ? 14 : 16 
          }}>
            Confirm Password
          </Text>
          <TextInput
            placeholder=""
            placeholderTextColor="#888"
            secureTextEntry
            onFocus={() => setIsFocusedConfirmPassword(true)}
            onBlur={() => setIsFocusedConfirmPassword(confirmPassword.length > 0)}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={{
              borderWidth: 1,
              borderColor: "white",
              padding: 15,
              borderRadius: 10,
              color: "white",
            }}
          />
        </View>
        
        {/* Terms & Conditions Checkbox */}
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
          <Pressable 
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: agreed ? "white" : "transparent"
            }} 
            onPress={() => setAgreed(!agreed)}
          />
          <Text style={{ color: "#888", marginLeft: 10 }}>Agree to terms and conditions</Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 15,
            margin: 20,
            alignItems: "center",
          }} 
          onPress={handleSignUp}
        >
          <Text>Sign up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <Link href={"/login"} style={{ color: "#888", margin: 23, fontSize: 15 }}>
          <Text>
            Already have an account? Login
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
