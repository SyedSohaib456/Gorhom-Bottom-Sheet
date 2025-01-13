module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~core': './src/core',
            '~screens': './src/app/screens',
            '~components': './src/core/components',
            '~theme': './src/theme',
            '~utils': './src/utils',
            '~assets': './assets',
            '~app': './src/app',
            '~hooks': './src/core/hooks',
            '~zustand': './src/core/zustand',
          },
        },
      ],
    ],
  };
};
