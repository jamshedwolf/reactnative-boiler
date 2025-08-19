import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import "../global.css";

export default function About() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold text-black">About</Text>

      <Pressable
        className="p-5 border rounded bg-gray-200 mt-5"
        onPress={() => router.push("/last")}
      >
        <Text className="text-black text-lg">Go to Last</Text>
      </Pressable>
    </View>
  );
}
