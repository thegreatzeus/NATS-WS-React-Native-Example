# [nats.ws](https://github.com/nats-io/nats.ws) React Native / Expo example

## Add polyfill packages

nats.ws depends on some APIs not natively available within the React Native JS runtime. We need to use [polyfills](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill) to fill in these missing APIs.


Install the required packages in your React Native / Expo project using one of the following commands:

**yarn:**
``yarn add @azure/core-asynciterator-polyfill fastestsmallesttextencoderdecoder nats.ws node-libs-react-native react-native-url-polyfill text-encoding-polyfill``

**npm:**
``npm install @azure/core-asynciterator-polyfill fastestsmallesttextencoderdecoder nats.ws node-libs-react-native react-native-url-polyfill text-encoding-polyfill``


## Modify `metro.config.js`

The following needs to be added to the Metro bundler's configuration file to add Node core modules such as `stream` to the React Native runtime.

```js
// metro.config.js
module.exports = {
resolver: {
extraNodeModules: require('node-libs-react-native'),
    },
    // Add more config here if needed
};
```

## Import polyfills in `App.js`
Import the polyfills in your app's ***starting file*** (`App.js` in my case). This ensures the APIs they provide become available globally within your application's JavaScript context.

```js
import 'react-native-url-polyfill/auto';
import 'text-encoding-polyfill';
import '@azure/core-asynciterator-polyfill'
```


## Ready to use nats.ws

Now you have completed the setup and can start using nats.ws in your React Native / Expo app.

Use the code in [`App.js`](https://github.com/thegreatzeus/NATS-WS-React-Native-Example/blob/master/App.js) as a reference to build your solution.


## Run example app
1. Clone this repo: `git clone https://github.com/thegreatzeus/NATS-WS-React-Native-Example.git`
2. cd into the `NATS-WS-React-Native-Example` directory: `cd NATS-WS-React-Native-Example`
3. Install dependencies: `yarn install` or `npm install`
4. Run: `npm start`

---
## Credit

Special thanks to [kindapath](https://github.com/nats-io/nats.ws/issues/195#issuecomment-1821389522), [Darapsas](https://github.com/aws-amplify/amplify-js/issues/8176#issuecomment-827632909), and [Byron Ruth](https://nats.io/blog/getting-started-nats-ws/#reactjs) for their invaluable contributions.
