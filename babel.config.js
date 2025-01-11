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
            '~components': './src/core/components',
            '~theme': './src/theme',
            '~app': './src/app',
            '~hooks': './src/core/hooks',
            '~zustand': './src/core/zustand',
          },
        },
      ],
    ],
  };
};
