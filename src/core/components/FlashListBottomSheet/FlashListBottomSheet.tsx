import {BottomSheetTextInput, BottomSheetView} from '@gorhom/bottom-sheet';
import {FlashList} from '@shopify/flash-list';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {View, Text, Keyboard, StyleSheet} from 'react-native';
import BottomSheetWrapperContainer from '~core/components/BottomSheetWrapper/BottomSheetWrapperContainer';
import ModalHandling from '~core/components/BottomSheetWrapper/ModalHandler';
import {ScrollView} from 'react-native-gesture-handler';

export interface FlashModalRef {
  setVisibleBottomSheet: (value: boolean) => void;
}

interface FlashModalProps {
  onClose: () => void;
  data: Array<{code: string; name: string}>;
}

const FlashListModalBottomSheet = forwardRef<FlashModalRef, FlashModalProps>(
  ({onClose, data}, ref) => {
    const bottomSheetRef = useRef<any>(null);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(data);

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

    useImperativeHandle(ref, () => ({setVisibleBottomSheet}));

    const handleSearch = (text: string) => {
      setSearchText(text);
      const newData = data.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(newData);
    };

    return (
      <BottomSheetWrapperContainer
        isTwoAlfredShow={false}
        setVisibleBottomSheet={setVisibleBottomSheet}
        enablePanDownToClose
        backdropClose
        snapPoints={['60%']}
        onCloseBottomSheet={onClose}
        style={{zIndex: 999}}>
        <BottomSheetView
          className="bg-[#c1099cc6] rounded-lg p-5"
          style={[styles.bottomSheetMainView, {flex: 1}]}>
          <View style={{flex: 1}}>
            <View className="mb-3 pt-4">
              <Text className="text-3xl font-bold text-white">
                Search and Select
              </Text>
            </View>
            <View className="mb-2 pt-3">
              <BottomSheetTextInput
                placeholder="Search..."
                placeholderTextColor={'white'}
                className="border-2 rounded-lg border-white py-4 px-2 text-white"
                value={searchText}
                onChangeText={handleSearch}
              />
            </View>

            <View className="flex-1 mt-5 px-4">
              <FlashList
                data={filteredData}
                renderItem={({item}) => (
                  <Text className="text-white py-2 text-xl">{item.name}</Text>
                )}
                keyExtractor={item => item.code}
                estimatedItemSize={100}
                nestedScrollEnabled
                renderScrollComponent={ScrollView}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetWrapperContainer>
    );
  },
);

export default FlashListModalBottomSheet;

const styles = StyleSheet.create({
  bottomSheetMainView: {
    height: '100%',
  },
  zeeIndex: {
    zIndex: 99999,
  },
});
