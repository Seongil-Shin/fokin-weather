import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const apikey = "1e723b425411775e3c4dce46df128efc";

export default function App() {
   const [isLoading, setIsLoading] = useState(true);
   const [weatherData, setWeaterData] = useState({ temp: "", condition: "" });
   useEffect(() => {
      const getWeather = async (latitude, longitude) => {
         const {
            data: {
               main: { temp },
               weather,
            },
         } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
         );
         setWeaterData({ temp: temp, condition: weather[0].main });
         setIsLoading(false);
      };
      const getCurrentPosition = async () => {
         try {
            await Location.requestForegroundPermissionsAsync();
            const {
               coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            getWeather(latitude, longitude);
         } catch (err) {
            Alert.alert("Can't find you.", "So sad");
         }
      };
      getCurrentPosition();
   }, []);
   return isLoading ? (
      <Loading />
   ) : (
      <Weather
         temp={Math.round(weatherData.temp)}
         condition={weatherData.condition}
      />
   );
}
