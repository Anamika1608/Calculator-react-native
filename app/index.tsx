import { useState, useEffect } from "react";
import { View } from "react-native";
import IntroScreen from '../Views/Introscreen/introScreen.js'
import MainScreen from '../Views/MainScreen/mainScreen.js'

export default function Index() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setIsLoading(false);
     }, 2000);

     return () => clearTimeout(timer);
   }, []);

   return (
     <View
       style={{
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
       }}
     >
       {isLoading ? <IntroScreen /> : <MainScreen />}
     </View>
   );
}