import {useNavigation, NavigationProp} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '~core/components/Button/Button';
import LoginModal from '~core/components/LoginModal/LoginModal';
import {RootStackParamList} from 'src/App';

type NavigationProps = NavigationProp<RootStackParamList>;

const Home = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] =
    useState<boolean>(false)

  const navigation = useNavigation<NavigationProps>();

  const handleOpenCloseLoginModal = () => {
    setIsLoginModalVisible(prevState => !prevState);
  };

  return (
    <View className="flex-1 flex-grow bg-[#fee2ff] items-center justify-center">
      <View className="w-full h-full p-4 justify-start absolute">
        <Text className="text-2xl text-red-600">Simple Modal</Text>
        <View className=" flex-row justify-evenly mt-4">
          <Button onPress={handleOpenCloseLoginModal} title="LOGIN" />
          <Button
            onPress={() => navigation.navigate('FlashScreen')}
            title="Flash Screen"
          />
        </View>
      </View>
      {isLoginModalVisible && (
        <LoginModal onClose={handleOpenCloseLoginModal} />
      )}
    </View>
  );
};

export default Home;
