import RnBottomSheet, {
  BottomSheetView, // useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Platform, StyleSheet } from "react-native";
import { Portal } from "react-native-portalize";

import ModalHandling from ".//ModalHandler";

import HeaderIconBottomSheet from "../BottomSheetWrapper/HeaderIconBottomSheet";
import RenderBottomSheetBackdrop from "./BottomSheetWrapperBackdrop";
import type { BottomSheetWrapperContainerProps } from "./type";

export interface AnimatedProgressModalRef {}

const InvestHabibiBottomSheetContainer = forwardRef<
  AnimatedProgressModalRef,
  BottomSheetWrapperContainerProps
>(
  (
    {
      children,
      isAnimationEnd = false,
      isTwoAlfredShow,
      isLoading,
      setVisibleBottomSheet,
      backdropClose = false,
      onCloseBottomSheet,
      shouldCloseOnHeaderPress = true,
      ...rest
    },
    ref
  ) => {
    const bottomSheetRef = useRef<RnBottomSheet>(null);

    const onOpen = (index: number = 0) => {
      bottomSheetRef.current?.snapToIndex(index - 1);
    };
    const onClose = () => {
      bottomSheetRef.current?.close();
    };
    const expand = () => {
      bottomSheetRef.current?.expand();
    };
    const snapToIndex = (index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
    };
    useImperativeHandle(ref, () => ({
      onOpen,
      onClose,
      expand,
      snapToIndex,
    }));
    const inputRange = Platform.OS === "android" ? [600, 850] : [525, 852];

    const handleClose = () => {
      if (shouldCloseOnHeaderPress) {
        ModalHandling.setIsAnyModalVisibleAlready(false);
        if (onCloseBottomSheet) {
          onCloseBottomSheet();
        }
      }
    };
    return (
      <Portal>
        <RnBottomSheet
          backdropComponent={(props) => (
            <RenderBottomSheetBackdrop
              props={props}
              isAllowToClose={backdropClose}
            />
          )}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          style={{ flex: 1, height: "100%", zIndex: 9999 }}
          ref={bottomSheetRef}
          backgroundComponent={() => (
            <HeaderIconBottomSheet
              onClose={handleClose}
              inputRange={inputRange}
              isIconChange={!isAnimationEnd}
            />
          )}
          handleIndicatorStyle={styles.bottomSheetIndicator}
          index={0}
          onChange={(index) =>
            index > -1 && ModalHandling.setIsAnyModalVisibleAlready(true)
          }
          onClose={() => {
            ModalHandling.setIsAnyModalVisibleAlready(false);
            if (onCloseBottomSheet) {
              onCloseBottomSheet();
            }
          }}
          enableDynamicSizing={false} //make it true where height varies
          {...rest}
        >
          {isTwoAlfredShow ? (
            <HeaderIconBottomSheet
              onClose={handleClose}
              isIconChange={!isAnimationEnd}
            />
          ) : (
            <BottomSheetView>
              <HeaderIconBottomSheet
                onClose={handleClose}
                inputRange={inputRange}
              />
            </BottomSheetView>
          )}
          {children}
        </RnBottomSheet>
      </Portal>
    );
  }
);

export default InvestHabibiBottomSheetContainer;

const styles = StyleSheet.create({
  bottomSheetIndicator: {
    display: "none",
  },
});
