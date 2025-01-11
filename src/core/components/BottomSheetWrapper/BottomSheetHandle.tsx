import Animated from 'react-native-reanimated';
import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import type { BottomSheetDefaultHandleProps } from './type';

const BottomSheetHandleComponent = ({
  style,
  children,
}: BottomSheetDefaultHandleProps) => {
  const containerStyle = useMemo(
    () => [styles.container, ...[Array.isArray(style) ? style : [style]]],
    [style],
  );

  return (
    <Animated.View style={[containerStyle, styles.container]}>
      {children}
    </Animated.View>
  );
};

const BottomSheetHandle = memo(BottomSheetHandleComponent);
BottomSheetHandle.displayName = 'BottomSheetHandle';

export default BottomSheetHandle;

const styles = StyleSheet.create({
  container: {},
});