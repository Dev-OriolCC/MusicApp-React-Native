import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
//import * as Linking from 'expo-linking';
import * as ExpoShazamKit from 'expo-shazamkit';
import  {MatchedItem}  from 'expo-shazamkit';


console.log(Constants.systemFonts);

export default function App() {

  const [searching, setSearching] = useState(false);
  const [song, setSong] = useState("Amour");
  //const [song, setSong] = useState<MatchedItem | null>(null);
  const greeting: string = "Hello World!";
  console.log(greeting);
  //

  const [counterEvent, setCounterEvent] = useState(0);

  const counter = () => {
    console.log("Listening ["+counterEvent+"]: ");  
    setCounterEvent(counterEvent+1);
  }

  const startListing = () => {
    console.log("Listening: "+searching);

    setSearching(!searching);
    // if (song) {
    //   setSong(null)
    // }

    // try {
    //   // if (song) {
    //   //   setSong(null)
    //   // }
    //   setSearching(true);
    //   //const result = await ExpoShazamKit.startListening();
    //   const result = "test";
    //   if (result.length > 0) {
    //     //setSong(result[0]);
    //   } else {
    //     Alert.alert("No Match", "No songs found");
    //   }

    // } catch (e) { 
    //   console.log("Exception: " + e)
    // }

    // setSearching(false);

  }


  return (  
    <View style={styles.container}>
      { song && (
        <View style={[ styles.musicCard, ]} >
          
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/d/d6/TheWarning_Error.jpg' }}
            style={styles.musicAlbum}
          />
          <Text style={[styles.musicCardTrack, ]} >AMOUR</Text>
          <Text style={[styles.musicCardArtist, ]} >The Warning</Text>

        </View>
      )}
      { !searching && (
        <Pressable
          onPress={startListing}
        >
          <View style={{ gap: 20 }} >
            <Text style={[styles.mainBtn, ]} >Start Listening</Text>
          </View>
        </Pressable>
        )
      }
      { searching && (
        <View style={{ gap: 20 }} >
          <Text style={styles.textTitle} >Searching.....</Text>
          <Pressable
            onPress={startListing}
          >
            
              <Text style={[styles.mainBtnStop, ]} >Stop Listening</Text>
            
          </Pressable>
        </View>

      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#56A1BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBtn: {
    color: "#436E73",
    fontSize: 19  ,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#2F403D',
    borderWidth: 0.1
    
  },
  mainBtnStop: {
    color: "white",
    fontSize: 19,
    fontFamily: 'Roboto',
    fontWeight: 'normal',
    backgroundColor: '#BF3326',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#2F403D',
    borderWidth: 0.1
  },
  textTitle: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center'
  },
  musicCard: {
    marginBottom: 30,
    justifyContent: 'center',
    textAlign: 'center',
    gap: 10
  },
  musicCardTrack: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  musicCardArtist: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 16,
  },
  musicAlbum: {
    width: 250,
    height: 250,
    borderRadius: 10,
    borderWidth: 0.2  ,
    borderColor: "#2F403D",
      
  }

  
});
