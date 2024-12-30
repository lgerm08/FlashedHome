import { StyleSheet, View, Text } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import Flashed from "@/assets/images/Home/flashinho-shape.svg";
import { CircularProgressBar } from "./circular_progress_bar";
import Battery from "@/assets/images/Home/battery.svg";

export default function FlashedBattery(props: { progress: Double }) {
  const { progress } = props;

  return (
    <View style={styles.frame}>
      {/* View do Energy Meter */}
      <View style={styles.meter}>
        <CircularProgressBar progress={progress} size={100} />
        <View style={styles.infoContainer}>
          
      </View>
      </View>

      {/* Círculo externo e interno */}
      <View style={styles.outterCircle}>
        <View style={styles.innerCircle} />
      </View>

      {/* Flashed SVG */}
      <Flashed width={60} height={60} style={styles.flashedPet} />
      
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  frame: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 0,
  },
  meter: {
    position:  "relative",
    zIndex: -2,
    alignItems: "center",
    justifyContent: "center",
  },
  flashedPet: {
    position: "absolute",
    zIndex: 1,
  },
  outterCircle: {
    position: "absolute",
    zIndex: -1,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#5203A1",
    boxShadow: "0 0 32px rgba(224, 51, 136, 0.5)",
  },
  innerCircle: {
    backgroundColor: "#5203A1",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0, // Ajustar a margem para ficar abaixo de tudo
  },
});
