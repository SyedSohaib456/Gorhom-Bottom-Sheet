import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import React, { useCallback } from 'react';

import BottomSheetHeaderIcon from '~assets/icons/BottomSheetHeaderIcon';
import BottomSheetHeaderProgreeIcon from '~assets/icons/BottomSheetHeaderProgreeIcon';

import HeaderHandle from './HeaderHandle';
import { StyleSheet } from 'react-native';

interface AlfredIconBottomSheetProps {
  onClose: () => void;
  inputRange?: number[];
  isIconChange?: boolean;
}

const AlfredIconBottomSheet = ({
  onClose,
  inputRange,
  isIconChange,
}: AlfredIconBottomSheetProps) => {
  const animatedPosition = useSharedValue(0);
  const animatedIndex = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(
    () => ({
      opacity: interpolate(
        animatedPosition.value,
        inputRange || [0, 1],
        [1, 0],
        Extrapolate.CLAMP,
      ),
      display: animatedIndex.value === -1 ? 'none' : 'flex',
    }),
    [animatedPosition, animatedIndex, inputRange],
  );

  const header = useCallback(
    () => (
      <HeaderHandle
        containerStyle={[
          
          isIconChange ? styles.header1: styles.header2,
        ]}
        onClose={onClose}
        animatedIndex={animatedIndex}
        animatedPosition={animatedPosition}>
        <Animated.View style={[animatedStyle, {width:'100%'}]}>
          {isIconChange ? (
            <BottomSheetHeaderProgreeIcon />
          ) : (
            <BottomSheetHeaderIcon />
          )}
        </Animated.View>
      </HeaderHandle>
    ),
    [animatedStyle, animatedIndex, animatedPosition, onClose, isIconChange],
  );

  return header();
};

const styles=StyleSheet.create({
  header1:{
    bottom:'-15%'
  },
  header2:{
    bottom:'-10%'
  }
})

export default AlfredIconBottomSheet;