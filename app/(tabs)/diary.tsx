import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import DiaryScreen from "@/screens/DiaryScreen";

export default function Diary() {
    return (
        <View style={[GlobalStyle.container]}>
            <DiaryScreen />
        </View>
    );
}

const styles = StyleSheet.create({});
