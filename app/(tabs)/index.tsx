import { useState } from "react";
import {View , Text ,Button, Alert, Switch} from "react-native";

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
      <Text>Hello from home screen</Text>
      <Button 
        title="Click"
        onPress={pressMe}
      />
      <Switch
      value={isEnabled}
      onValueChange={switchValueChange}
      />
    </View>
  )
}

export default HomeScreen;