import { useState } from "react";
import {View , Text ,Button, Alert, Switch , ScrollView} from "react-native";

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
  return(
    <View>
      <Text style={{color:"white"}}>Hello from home screen</Text>
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
    </View>
  )
}

export default HomeScreen;