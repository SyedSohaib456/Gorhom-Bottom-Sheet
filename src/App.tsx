import React from 'react';
import {View, Text,  SafeAreaView} from 'react-native';
import '~theme/global.css';
import Button from '~core/components/Button/Button';

const App = () => {
  return (
    <SafeAreaView>
      <View className="h-full bg-gray-700 justify-center items-center">
        <Text className="text-3xl font-semibold text-purple-600">
          Welcome to Native
        </Text>
        <Button title='PRESS' onPress={()=>console.log('Pressed')
        }/>
      </View>
    </SafeAreaView>
  );
};

export default App;
