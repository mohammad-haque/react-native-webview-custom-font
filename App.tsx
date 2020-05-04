/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {WebView} from 'react-native-webview';
import {View, Platform} from 'react-native';

const htmlData =
  'What a wonderful world! <br/><br/>' +
  (Platform.OS == 'ios' ? 'iOS' : 'Android');

const App = () => {
  return (
    <View style={{flex: 1, paddingTop: 50}}>
      <WebView
        originWhitelist={['*']}
        source={{
          baseUrl: '',
          html: articleHtml({
            body: htmlData,
          }),
        }}
      />
    </View>
  );
};

export const generateAssetFontCss = ({
  fontFileName,
  extension = 'ttf',
}: {
  fontFileName: string;
  extension?: string;
}) => {
  const fileUri = Platform.select({
    ios: `${fontFileName}.${extension}`,
    android: `file:///android_asset/fonts/${fontFileName}.${extension}`,
  });

  return `@font-face {
      font-family: '${fontFileName}';
      src: local('${fontFileName}'), url('${fileUri}') ;
  }`;
};

export const articleHtml = ({body}: {body: string}) => `
<html>
<head>
    <style>
        ${generateAssetFontCss({
          fontFileName: 'BeyondWonderland',
          extension: 'ttf',
        })}
        body {
            color: red;
            font-size: 30px;
            font-family: BeyondWonderland;
        }
    </style>
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    />
</head>
<body style="padding:10px">
    ${body}
</body>
</html>
`;

export default App;
