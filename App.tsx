import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "./src/components/SplashScreen";
import HomePage from "./src/screens/home";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView
        style={[
          {
            flex: 1,
            backgroundColor: "#fff",
          },
        ]}
      >
        {loading ? <SplashScreen /> : <HomePage />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
