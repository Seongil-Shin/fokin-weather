import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
   Haze: {
      iconName: "weather-hail",
      gradient: ["#4da8b8", "#d39d38"],
      title: "Haze",
      subtitle: "Just don't go outside.",
   },
   Thunderstorm: {
      iconName: "weather-lightning",
      gradient: ["#373B44", "#4286f4"],
      title: "Thunderstorm",
      subtitle: "Just don't go outside.",
   },
   Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Drizzle",
      subtitle: "Just don't go outside.",
   },
   Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"],
      title: "Rain",
      subtitle: "Get your umbrella.",
   },
   Snow: {
      iconName: "weather-snowy",
      gradient: ["#7DE2FC", "#B9B6E5"],
      title: "Snow",
      subtitle: "Be careful when you drive",
   },
   Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"],
      title: "Atmosphere",
      subtitle: "Just don't go outside.",
   },
   Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"],
      title: "Clear",
      subtitle: "Happy Clear Day!!",
   },
   Clouds: {
      iconName: "weather-cloudy",
      gradient: ["#D7D2CC", "#304352"],
      title: "Clouds",
      subtitle: "cloudy...",
   },
   Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Mist",
      subtitle: "Be careful when you drive",
   },
   Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Dust",
      subtitle: "Just don't go outside.",
   },
};

export default function Weather({ temp, condition }) {
   console.log(condition);
   return (
      <LinearGradient
         // Background Linear Gradient
         colors={weatherOptions[condition].gradient}
         style={styles.container}>
         <StatusBar barStyle="light-content" />
         <View style={styles.halfContainer}>
            <MaterialCommunityIcons
               size={96}
               color="white"
               name={weatherOptions[condition].iconName || "weather-sunset"}
            />
            <Text style={styles.temp}>{temp}℃</Text>
         </View>
         <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>
               {weatherOptions[condition].subtitle}
            </Text>
         </View>
      </LinearGradient>
   );
}

Weather.propTypes = {
   temp: PropTypes.number.isRequired,
   condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Dust",
      "Mist",
   ]).isRequired,
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   temp: {
      fontSize: 42,
      color: "white",
   },
   title: {
      color: "white",
      fontSize: 44,
      fontWeight: "300",
      marginBottom: 10,
   },
   subtitle: {
      fontWeight: "600",
      color: "white",
      fontSize: 24,
   },
   textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start",
   },
});
