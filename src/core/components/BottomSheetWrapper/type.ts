import type { AnimateProps, SharedValue } from 'react-native-reanimated';
import type { BottomSheetProps } from '@gorhom/bottom-sheet/src';
import type React from 'react';
import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export interface BottomSheetVariables {
  /**
   * Current sheet position index.
   * @type SharedValue<number>
   */
  animatedIndex: SharedValue<number>;
  /**
   * Current sheet position.
   * @type SharedValue<number>
   */
  animatedPosition: SharedValue<number>;
}
export interface BottomSheetHandleProps extends BottomSheetVariables {}
export interface BottomSheetDefaultHandleProps extends BottomSheetHandleProps {
  /**
   * View style to be applied to the handle container.
   * @type Animated.AnimateStyle<ViewStyle> | ViewStyle
   * @default undefined
   */
  style?: AnimateProps<ViewProps>['style'];
  /**
   * Content to be added below the indicator.
   * @type React.ReactNode | React.ReactNode[];
   * @default undefined
   */
  children?: React.ReactNode | React.ReactNode[];
}

export type BottomSheetWrapperProps = {
  initialPosition: number;
  snapPoints: unknown[];
  body: unknown;
  header?: unknown;
  isParent?: boolean;
  isBackDrop?: boolean;
  shadow?: boolean;
  isBackDropDismissByPress?: boolean;
  bottomSheerColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainerStyle?: StyleProp<ViewStyle>;
  children?: unknown;
  dynamicHeight?: boolean;
  maxHeight?: number;
  extraDynamicHeight?: number;
} & Partial<BottomSheetProps>;

export type BottomSheetWrapperContainerProps = {
  children: React.ReactNode;
  isAnimationEnd?: boolean;
  isTwoAlfredShow?: boolean;
  isLoading?: boolean;
  backdropClose?: boolean;
  setVisibleBottomSheet?: (value: boolean) => void;
  shouldCloseOnHeaderPress?: boolean;
  onCloseBottomSheet?: () => void;
} & Partial<BottomSheetProps>;