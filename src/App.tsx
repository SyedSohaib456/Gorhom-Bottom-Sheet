import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '~screens/Home';
import FlashModalScreen from '~app/screens/FlashModalScreen';
import {Host} from 'react-native-portalize';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import '~theme/global.css';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export type  RootStackParamList = {
  Home: undefined;
  FlashScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView className="h-full">
      <NavigationContainer>
        <Host>
          <SafeAreaProvider>
            <KeyboardProvider statusBarTranslucent>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#D644B8',
                  },
                  headerTintColor: 'white',
                }}>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Home Screen'}}
                />
                <Stack.Screen
                  name="FlashScreen"
                  component={FlashModalScreen}
                  options={{title: 'Flash Modal'}}
                />
              </Stack.Navigator>
            </KeyboardProvider>
          </SafeAreaProvider>
        </Host>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
