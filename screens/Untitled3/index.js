import { Pressable } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{}} style={styles.JgvRLoda}>
        <TextInput style={styles.RUlqzbyR}></TextInput>
        <TextInput style={styles.ipYqqWYI}></TextInput>
        <Text style={styles.bVMUEUwn}>{"Welcome to Login"}</Text>
        <Text style={styles.FVnRyfet}>{"Username"}</Text>
        <Text style={styles.EGFyOHyK}>{"Password"}</Text>
        <ImageBackground style={styles.jxQstabZ} source={require("./shashank-sahay-vwJFEkK8Kcs-unsplash.jpg")} resizeMode="cover"><Pressable><View style={styles.BtcKeXht}></View></Pressable><Text style={styles.AQPuLsiy}>{"Login"}</Text></ImageBackground>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#000000"
  },
  JgvRLoda: {
    borderRadius: 40
  },
  RUlqzbyR: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 300,
    height: 40,
    left: 28,
    top: 252,
    transform: [{
      rotate: "0deg"
    }],
    position: "absolute"
  },
  ipYqqWYI: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 300,
    height: 40,
    position: "absolute",
    top: 322,
    left: 28
  },
  bVMUEUwn: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 13,
    borderRadius: 0,
    color: "#ffffff",
    textAlign: "center",
    position: "absolute",
    left: 128,
    top: 169,
    fontWeight: "700"
  },
  FVnRyfet: {
    width: 60,
    height: 17,
    lineHeight: 14,
    fontSize: 12,
    borderRadius: 0,
    color: "#fcfcfc",
    position: "absolute",
    left: 28,
    top: 233
  },
  EGFyOHyK: {
    width: 56,
    height: 17,
    lineHeight: 14,
    fontSize: 12,
    borderRadius: 0,
    color: "#fcfcfc",
    position: "absolute",
    left: 29,
    top: 305
  },
  jxQstabZ: {
    width: 450,
    height: 634,
    position: "absolute",
    left: -16,
    top: 45,
    zIndex: -10
  },
  BtcKeXht: {
    height: 30,
    width: 300,
    backgroundColor: "#433c3c",
    borderRadius: 20,
    color: "#777777",
    position: "absolute",
    left: 50,
    top: 341,
    borderColor: "#060606",
    opacity: 0.72
  },
  AQPuLsiy: {
    width: 43,
    height: 22,
    lineHeight: 14,
    fontSize: 12,
    borderRadius: 0,
    position: "absolute",
    left: 175,
    top: 346,
    color: "#fcfcfc"
  }
});
export default Untitled3;