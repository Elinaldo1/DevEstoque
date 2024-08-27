module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json'
          ],
          alias: {
            // "react-native-sqlite-storage": "react-native-quick-sqlite",
            "@repositories": ["./src/database/repositories"],
            "@entities": ["./src/database/entities"],
            "@services": ["./src/services"],
            "@controllers": ["./src/controllers"],
            "@components": ["./src/components"],
            "@screens": ["./src/screens"],
            "@themes": ["./src/theme"],
            "@contexts": ["./src/contexts"],
            "@configs": ["./src/configs"],
            "@types": ["./src/@types"],
            "@utils": ["./src/utils"],
            "@routes": ["./src/routes"],
            "@hooks": ["./src/hooks"],
            "@themes": ["./src/themes"],
            "@assets": ["./src/assets"],
            "@database": ["./src/database"]
          },
        },
      ],
    ]
  };
};
