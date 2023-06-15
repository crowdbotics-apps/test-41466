import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.EwVFxLbH}>
        <ImageBackground style={styles.PlxYxKLp} source={require("./PikPng.com_checkered-png_1916423.png")} resizeMode="cover"></ImageBackground>
        <Pressable onPress={() => {
        navigation.navigate("Untitled3");
      }}>
          <View style={styles.kDOnVpFH}>
            <Text style={styles.baHoqIfz}>{"Start"}</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#f14848"
  },
  EwVFxLbH: {
    backgroundColor: "#f14848",
    borderColor: "#f15c48"
  },
  PlxYxKLp: {
    width: 129,
    height: 81,
    position: "absolute",
    left: 113.5,
    top: 277.5
  },
  kDOnVpFH: {
    height: 30,
    width: 300,
    backgroundColor: "#f14848",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 28,
    borderColor: "#f15c48",
    top: 549
  },
  baHoqIfz: {
    width: 93,
    height: 20,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    left: 103.5,
    top: 5,
    textAlign: "center",
    color: "#fdfbfb"
  }
});
export default Untitled2;