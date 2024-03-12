import Animated, {
  BounceInDown,
  FadeIn,
  FadeOut,
  FadeOutDown,
  FadeOutUp,
  SlideInDown,
  SlideInUp,
  SlideOutUp,
  ZoomIn,
  ZoomOut,
  ZoomOutEasyUp,
  ZoomOutUp,
} from "react-native-reanimated";
import { Container } from "./styles";
import { Image } from "react-native";
import ImageSplash from "@assets/images/Background.png";
import Logo from "@assets/images/Logo.png";
export default function SplashScreen() {
  return (
    <Container>
      <Animated.View
        style={{
          alignItems: "center",
          marginTop: 120,
        }}
        entering={FadeIn.duration(800)}
        exiting={FadeOut.duration(500)}
      >
        <Image source={Logo} style={{ width: 280, height: 64 }} />
      </Animated.View>
      <Animated.View
        style={{ position: "relative" }}
        entering={FadeIn.duration(800)}
        exiting={FadeOut.duration(500)}
      >
        <Image
          source={ImageSplash}
          style={{ width: "100%", height: 400 }}
          resizeMode="stretch"
        />
      </Animated.View>
    </Container>
  );
}
