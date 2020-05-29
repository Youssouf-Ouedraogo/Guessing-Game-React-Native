import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

const fetchFonts = () =>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });

};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded){
    return (
      <AppLoading
        startAsync = {fetchFonts}
        onFinish = {()=>setDataLoaded(true)}
        onError= {(err) => console.log(err)}
      />

    )
  }
  const configureNewGameHandler = () =>{
    setGuessRounds(0)
    setUserNumber(null)
  }
  const startGameHandler = (selectedNunber) =>{
    setUserNumber(selectedNunber)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds (numberOfRounds)
  }
  let content = <StartGameScreen onStartGame = {startGameHandler}/>
  if (userNumber && guessRounds <=0){
    content = <GameScreen userChoice = {userNumber} onGameOver ={gameOverHandler}/>
  }else if (guessRounds >0){
      content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber ={userNumber}
        onRestart = {configureNewGameHandler}/>
      )
  }
  return (
    <SafeAreaView>
      <View style ={styles.screen}>
        <Header title = "Guess A Number"/>
        {content}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen:{
      flex:1
    }
});

