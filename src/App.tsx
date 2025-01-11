import React from 'react';
import {View, Text,  SafeAreaView} from 'react-native';
import '../src/theme/global.css';
const App = () => {
  return (
    <SafeAreaView>
      <View className="h-full bg-gray-700 justify-center items-center">
        <Text className="text-3xl font-semibold text-purple-600">
          Welcome to Native
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
