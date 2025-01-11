import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "~core/components/Button/Button";
import LoginModal from "~core/components/LoginModal/LoginModal";

const Home = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState<boolean>(false);

  const handleOpenCloseLoginModal = () => {
    setIsLoginModalVisible((prevState) => !prevState);
  };

  return (
    <View className="flex-1 bg-[#fee2ff] items-center justify-center">
      <View className="w-full h-full p-4 justify-start">
        <Text className="text-2xl text-red-600">Simple Modal</Text>
        <View className="w-2/6 mt-4">
          <Button onPress={handleOpenCloseLoginModal} title="LOGIN" />
        </View>
      </View>
        {isLoginModalVisible && (
          <LoginModal onClose={handleOpenCloseLoginModal} />
        )}
    </View>
  );
};

export default Home;
