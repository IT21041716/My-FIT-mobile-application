import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView
} from "react-native";
import React from "react";
const bgImage = require("../assets/meal.png");

const MyMealPlan = () => {
    const currentDate = new Date();
    const dayOfWeekNumber = currentDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[dayOfWeekNumber];
    console.log(`Today is ${currentDay}`);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="orange" />
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <View>
          <ImageBackground source={bgImage} style={style.Image}>
            <View
              style={{ backgroundColor: "black", marginTop: 120, opacity: 0.8 }}
            >
              <Text style={style.HeaderText}>Your Plan</Text>
            </View>
            <View
              style={{ backgroundColor: "black", opacity: 0.7, height: 130 }}
            >
              <Text
                style={{ color: "white", textAlign: "justify", padding: 10 }}
              >
                Start your day with a nutritious breakfast to fuel your energy.
                Remember to update your meal log after each meal. Start your day
                with a nutritious breakfast to fuel your energy. Remember to
                update your meal.
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={style.secondDiv}>
        <ScrollView>
            <Text style={{fontSize:20,textAlign:'center', paddingTop:10, fontWeight:'bold'}}>Today Your Plan</Text>
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyMealPlan;

const style = StyleSheet.create({
  HeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
  },
  Image: {
    width: 385,
    height: 270,
    overflow: "hidden",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: "black",
      },
    }),
    resizeMode: "contain",
    backgroundColor: "black",
  },
  secondDiv: {
    backgroundColor: "white",
    height: 350,
    width: 350,
    borderRadius: 20,
    marginLeft: 20,
    opacity: 0.8,
  },
});
