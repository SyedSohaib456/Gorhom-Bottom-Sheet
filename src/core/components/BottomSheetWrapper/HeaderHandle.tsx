/* eslint-disable react/jsx-props-no-spreading */
import type { BottomSheetHandleProps } from '@gorhom/bottom-sheet/src';
import React, { memo } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import BottomSheetHandle from './BottomSheetHandle';

interface HeaderHandleProps extends BottomSheetHandleProps {
  children?: string | React.ReactNode | React.ReactNode[];
  containerStyle?: StyleProp<ViewStyle>;
  onClose: () => void;
}

const HeaderHandleComponent = ({
  children,
  containerStyle,
  onClose,
  ...rest
}: HeaderHandleProps) => (
  <Pressable onPress={onClose} style={[styles.container, containerStyle]}>
    <BottomSheetHandle {...rest}>
      {typeof children === 'string' ? (
        <Text style={styles.title}>{children}</Text>
      ) : (
        children
      )}
    </BottomSheetHandle>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  headerTouchable: {
    width: '100%',
    alignItems: 'center',
  },
});

const HeaderHandle = memo(HeaderHandleComponent);
HeaderHandle.displayName = 'HeaderHandle';

export default HeaderHandle;