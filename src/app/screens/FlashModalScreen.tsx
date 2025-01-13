import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '~core/components/Button/Button';
import FlashListModalBottomSheet from '~core/components/FlashListBottomSheet/FlashListBottomSheet';
import { RootStackParamList } from 'src/App';
import countryData from '~utils/countries.json'
type NavigationProps = NavigationProp<RootStackParamList>;

const FlashScreen = () => {
  const [isFlashModalVisible, setIsFlashModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProps>();

  const handleOpenCloseFlashnModal = () => {
    setIsFlashModalVisible(prevState => !prevState);
  };

  return (
    <View className="flex-1 flex-grow bg-[#fee2ff] items-center justify-center">
      <View className="w-full h-full p-4 justify-start absolute">
        <Text className="text-2xl text-red-600">Flash Screen Modal</Text>
        <View className="flex-row justify-evenly mt-4">
          <Button onPress={handleOpenCloseFlashnModal} title="Open" />
          <Button onPress={() => navigation.goBack()} title="Go Back" />
        </View>
      </View>
      {isFlashModalVisible && (
        <FlashListModalBottomSheet onClose={handleOpenCloseFlashnModal} data={countryData} />
      )}
    </View>
  );
};

export default FlashScreen;
