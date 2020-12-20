import React, {useContext, useState} from 'react'
import {View, Text, TextInput, Dimensions, Button, StyleSheet,AsyncStorage} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const {height, width} = Dimensions.get('window');
const StartScreen = ({navigation}) => {
    const [price, setPrice] = useState('')
    const [discount,  setDiscount] = useState('')
    

    const SaveHistory = () =>{
        
        var previous = [];
        previous=data.history;
        var newHistory = [...previous, { id:previous.length, price:price,
               discount:discount,final:parseFloat(price - price*discount/100).toFixed(2),}]
        Storage.setToken(JSON.stringify(newHistory))
        data.setHistory(newHistory)
    }
    return (
            <LinearGradient 
            style={{height: height, width: width,}}
            colors={['#ffd89b', '#19547b']} >
            <Button onPress={()=> navigation.navigate('HistoryScreen')} 
            title='Save History' />
            <View style={{flexDirection: 'row', padding: 20, paddingBottom: 50}}>
            <TextInput 
            placeholderTextColor='#19547b'
            onChangeText ={(price)=>{setPrice(price)}}
            value={price}
            placeholder='Original Price'
            keyboardType='decimal-pad'
            style={[styles.textField]}>
            </TextInput>
            <TextInput
            maxLength={2} 
            onChangeText ={(discount)=>{setDiscount(discount)}}
            value={discount}
            placeholderTextColor='#19547b'
            keyboardType='decimal-pad'
            placeholder= 'Discount %'
            style={styles.textField}>
            </TextInput>
            </View>  
            <View style={{marginTop: 15,borderTopRightRadius: 11,justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{ alignSelf: 'center', margin: 10, fontSize: 20, color:'black',}}>Discounted Price </Text>
            <Animatable.Text animation='bounceIn' style={{ alignSelf: 'center', margin: 1, fontSize: 30, color:'green', }}>
            {parseFloat(price - price*discount/100).toFixed(2)}
            </Animatable.Text>
            </View>          
            <Animatable.View animation='bounceInLeft'
            style={{backgroundColor: 'rgba(25,84,123, 0.2)', justifyContent: 'flex-end', width: width * 0.4,  borderBottomRightRadius: 19,marginBottom: 1, paddingVertical: 10, borderTopRightRadius: 19, }}>            
            <Text style={{ alignSelf: 'center', fontSize: 14, color:'black',}}>You are saving</Text>
            <Animatable.Text animation='bounceIn'
            style={{ alignSelf: 'center', fontSize: 25, color:'tomato',}}>{price - (price - price*discount/100)}</Animatable.Text>
            </Animatable.View>
            
            
            </LinearGradient>
            
        
    )
}

export default StartScreen

const styles = StyleSheet.create({
    textField: {
        height: height/12,
        width: width * 0.4,
        paddingLeft: 16.9, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        marginTop: 100,  
        fontSize: 15, 
        borderBottomColor: 'darkslategrey',
        borderBottomWidth: 2, 
        marginHorizontal: 7,
    }

})