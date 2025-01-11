const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  '~core': path.resolve(__dirname, 'src/core'),
  '~components': path.resolve(__dirname, 'src/core/components'),
  '~theme': path.resolve(__dirname, 'src/theme'),
  '~app': path.resolve(__dirname, 'src/app'),
  '~hooks': path.resolve(__dirname, 'src/core/hooks'),
  '~zustand': path.resolve(__dirname, 'src/core/zustand'),
};

module.exports = withNativeWind(config, { input: './src/theme/global.css' });
