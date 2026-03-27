import { useState } from "react";
import {View , Text ,Button, Alert, Switch , ScrollView, TextInput} from "react-native";

import { RetryAgent } from "undici-types";

function HomeScreen (){
  const pressMe = ()=>{
    Alert.alert("Button Click")
    console.log("button click")
  }
  const[isEnabled , setisEnabled]=useState(false)

  const switchValueChange = ()=>{
      setisEnabled((prev)=>!prev)
      console.log(isEnabled)
  }

  const[value,setvalue]=useState("");
  const changeValue =(e:any)=>{
    setvalue(e.target.value)
  }

  return(
    <ScrollView> // view is like div
      <Text style={{color:"white"}}>Hello from home screen</Text> // text is like paragraph tag
      <Button 
        title="Click"
        onPress={pressMe}
      /> // Button is self closing and properties can be accessed
      <Switch
      value={isEnabled}
      onValueChange={switchValueChange}
      />// switch is like a on/off button and it can be manipulate by using state and function
      <ScrollView> // it allows to scroll this portion in mobile
      {
        [...Array(30)].map((_,i)=>{
          return(
            <Text style={{color:"white"}}>
              Hello using Array {i+1}
            </Text>
          )
        })
      }
      </ScrollView>

      <TextInput
      keyboardType="numbers-and-punctuation"
      style={{borderWidth:1 , color:"white", borderColor:"white"}} 
      value={value} 
      onChangeText={setvalue}
      multiline
      numberOfLines={4}
      placeholder="Enter your text"
      />
       {/* // text input is like input field in html and react nad it can be manipulate by using state and onChangeText method */}
    </ScrollView>
  )
}

export default HomeScreen;