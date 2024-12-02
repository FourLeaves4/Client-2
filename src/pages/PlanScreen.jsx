import React from "react";
import { View, StyleSheet } from "react-native";
import DateDisplay from "../components/DataDisplay";
import TimeDisplay from "../components/TimeDisplay";
import LabeledDivider from "../components/LabeledDivider";
import MascotWithMessage from "../components/MascotWithMessage/MascotWithMessage";
const PlanScreen = () => {
  return (
    <View style={styles.container}>
      <DateDisplay />
      <TimeDisplay />
      <LabeledDivider title="이번주 달성률"/>
       {/* MascotWithMessage 컴포넌트 */}
       <MascotWithMessage
        mascotImage={require("../../assets/Mascot.png")}
        message="이번 주 평균 달성률은"
        highlight="60%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aa6060",
    padding: 16,
  },
});

export default PlanScreen;
