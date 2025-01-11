import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import type { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import React, { useCallback } from 'react';
import { Keyboard } from 'react-native';

const RenderBottomSheetBackdrop: React.FC<{
  props: BottomSheetDefaultBackdropProps;
  isAllowToClose: boolean;
}> = ({ props, isAllowToClose }) => {
  const renderBackdrop = useCallback(
    () => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior={!isAllowToClose ? 'none' : 'close'}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        onPress={() => Keyboard.dismiss()}
      />
    ),
    [props, isAllowToClose],
  );

  return renderBackdrop();
};

export default RenderBottomSheetBackdrop;