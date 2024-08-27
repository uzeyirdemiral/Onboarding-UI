import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = async () => {
    await setItem("onboarded", "1");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Onboarding
        bottomBarHighlight={false}
        onDone={handleDone}
        onSkip={handleDone}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View>
                <Lottie
                  source={require("../assets/animations/boost.json")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <Lottie
                  source={require("../assets/animations/work.json")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View>
                <Lottie
                  source={require("../assets/animations/achieve")}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.8,
    height: height / 3,
  },
});
