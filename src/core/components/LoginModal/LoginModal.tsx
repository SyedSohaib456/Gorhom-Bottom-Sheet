import {BottomSheetTextInput, BottomSheetView} from '@gorhom/bottom-sheet';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {View, Text, Keyboard} from 'react-native';
import BottomSheetWrapperContainer from '~core/components/BottomSheetWrapper/BottomSheetWrapperContainer';
import ModalHandling from '~core/components/BottomSheetWrapper/ModalHandler';
import Button from '~core/components/Button/Button';

export interface LoginModalRef {
  setVisibleBottomSheet: (value: boolean) => void;
}

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = forwardRef<LoginModalRef, LoginModalProps>(
  ({onClose}, ref) => {
    const bottomSheetRef = useRef<any>(null);

    const setVisibleBottomSheet = (value: boolean) => {
      if (value) {
        bottomSheetRef.current?.expand();
        ModalHandling.setIsAnyModalVisibleAlready(true);
      } else {
        Keyboard.dismiss();
        bottomSheetRef.current?.close();
        ModalHandling.setIsAnyModalVisibleAlready(false);
      }
    };

    useImperativeHandle(ref, () => ({
      setVisibleBottomSheet,
    }));

    return (
      <BottomSheetWrapperContainer
        isTwoAlfredShow={false}
        setVisibleBottomSheet={setVisibleBottomSheet}
        enablePanDownToClose
        backdropClose
        onCloseBottomSheet={onClose}
        style={{zIndex: 999,}}
        >
        <BottomSheetView
          className="bg-[#c1099cc6] rounded-lg p-5"
          style={{
            height: '100%',
            
          }}>
          <View>
            <View className="mb-3 pt-4">
              <Text className="text-3xl font-bold text-white">
                Login to your account
              </Text>
            </View>
            <View className="mb-2 pt-3">
              <BottomSheetTextInput
                placeholder="Enter your email..."
                placeholderTextColor={'white'}
                className="border-2 rounded-lg border-white py-4 px-2 text-white"
              />
            </View>
            <View className="mt-3">
              <Button
                title="Login"
                onPress={() => console.log('LOGIN MODAL BUTTON')}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetWrapperContainer>
    );
  },
);

export default LoginModal;
