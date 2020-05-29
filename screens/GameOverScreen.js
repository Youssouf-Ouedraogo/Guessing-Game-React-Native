import React from 'react'
import {View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    ScrollView,
    SafeAreaView
} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return (
        <ScrollView>
        <View style = {Styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={Styles.imageContainer}>
                <Image
                    fadeDuration ={1000}
                    source ={require('../assets/success.png')}
                    style={Styles.image}
                    resizeMode='cover'/>
            </View>
            <View style={Styles.resultContainer}>
                <BodyText style= {Styles.resultText}>
                    You phone needed:{' '}
                    <Text style ={Styles.highlight}>
                        {props.roundsNumber}
                    </Text>
                        {"  "}rounds to guess the number:{"   "}
                    <Text style ={Styles.highlight}>
                        {props.userNumber}
                    </Text>
                </BodyText>
            </View>
            <MainButton onPress ={props.onRestart}>New Game</MainButton>
        </View>
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 20
    },
    image:{
        width:'100%',
        height:'100%',

    },
    imageContainer:{
        width: Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
        borderRadius:Dimensions.get('window').width*0.7/2,
        borderColor: 'black',
        overflow:'hidden',
        marginVertical:Dimensions.get('window').height/30,
        borderWidth: 3
    },
    highlight:{
        color:colors.primary,
        fontFamily:'open-sans-bold'
    },
    resultText:{
        textAlign:'center',
        fontSize:Dimensions.get('window').height <400 ? 16: 20
    },
    resultContainer:{
        marginVertical: Dimensions.get('window').height/60,
        marginHorizontal: 30
    }
})

export default GameOverScreen