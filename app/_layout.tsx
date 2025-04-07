import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            headerTitle: "",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
            headerLeft: () => <></>,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerTitle: "Login",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Stack>
    </>
  );
}
