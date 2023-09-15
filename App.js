import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
//import * as Linking from 'expo-linking';
import * as ExpoShazamKit from 'expo-shazamkit';
import { MatchedItem } from 'expo-shazamkit';

console.log(Constants.systemFonts);

export default function App() {

  const [searching, setSearching] = useState(false);
  const [song, setSong] = useState<MatchedItem | null>(null);

  const [counterEvent, setCounterEvent] = useState(0);

  const counter = () => {
    console.log("Listening ["+counterEvent+"]: ");  
    setCounterEvent(counterEvent+1);
  }

  const startListing = async () => {

    try {
      if (song) {
        setSong(null)
      }
      setSearching(true);
      //const result = await ExpoShazamKit.startListening();
      const result = "test";
      if (result.length > 0) {
        setSong(result[0]);
      } else {
        Alert.alert("No Match", "No songs found");
      }

    } catch (e) {
      console.log("Exception: " + e)
    }

    setSearching(false);

  }


  return (  
    <View style={styles.container}>
      <Text>Hello World! My-Music-App-2</Text>
      <Button onPress={startListing} title="Start Listening" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
