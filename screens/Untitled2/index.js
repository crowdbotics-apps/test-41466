import { Text } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }} style={styles.EwVFxLbH}>
        
        
      <View style={styles.GybOdJOw}><ImageBackground style={styles.WZIelxiD} source={require("./PikPng.com_checkered-png_1916423.png")} resizeMode="cover"></ImageBackground><View style={styles.iIofIBzL}><Text style={styles.reZXGtEC}>{"Started"}</Text></View></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#f14848"
  },
  EwVFxLbH: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    opacity: 1
  },
  GybOdJOw: {
    height: 911,
    width: 1455,
    backgroundColor: "#f53f26",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: -9.5,
    top: -7.5,
    flexDirection: "row",
    flex: 1
  },
  WZIelxiD: {
    width: 455,
    height: 314,
    position: "absolute",
    left: 500,
    top: 298.5
  },
  iIofIBzL: {
    height: 69,
    width: 384,
    backgroundColor: "#f82d2d",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 527,
    top: 647,
    borderColor: "#ffffff",
    borderWidth: 2
  },
  reZXGtEC: {
    width: 71,
    height: 19,
    lineHeight: 14,
    fontSize: 18,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    left: 156.5,
    top: 25,
    color: "#ffffff"
  }
});
export default Untitled2;