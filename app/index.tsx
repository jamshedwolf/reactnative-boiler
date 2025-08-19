import { useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import "../global.css";

export default function Index() {
  const router = useRouter();
  const fontSize = useSharedValue(24);

  const animatedStyle = useAnimatedStyle(() => ({
    fontSize: withTiming(fontSize.value, { duration: 300 }),
  }));

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable
        onPressIn={() => (fontSize.value = 48)}
        onPressOut={() => (fontSize.value = 24)}
      >
        <Animated.Text style={animatedStyle} className="text-black">
          Hello Ali
        </Animated.Text>
      </Pressable>

      <Pressable
        className="p-5 border rounded bg-gray-200 mt-5"
        onPress={() => router.push("/about")}
      >
        <Text className="text-black text-lg">Go to About</Text>
      </Pressable>
    </View>
  );
}
