import 'react-native-url-polyfill/auto';
import 'text-encoding-polyfill';
import '@azure/core-asynciterator-polyfill'

import { connect } from "nats.ws";
import { View, Text } from 'react-native'
import { useEffect, useState } from "react";

export default function App() {
  const [nats, setNats] = useState();

  useEffect(() => {
    (async () => {
      const nc = await connect({
        servers: ["wss://demo.nats.io:8443"],
      })
      setNats(nc)
      console.log("connected to NATS")
    })();

    return () => {
      nats?.drain();
      console.log("closed NATS connection")
    }
  }, [])

  return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        {nats ? (
            <Text>Connected to {nats?.getServer()}</Text>
        ) : (
            <Text>Connecting to NATS...</Text>
        )}
      </View>
  )
}