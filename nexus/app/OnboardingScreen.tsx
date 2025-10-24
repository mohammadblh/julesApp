/// <reference types="nativewind/types" />
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';

const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center p-5">
      <Text className="text-2xl font-bold mb-2.5">Welcome to Nexus</Text>
      <Text className="text-base text-gray-500 mb-5">
        Your integrated social-content platform.
      </Text>
      <Pressable
        className="bg-blue-500 py-3 px-6 rounded-lg"
        onPress={() => router.replace('(main)')}
      >
        <Text className="text-white text-base font-bold">Get Started</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreen;
