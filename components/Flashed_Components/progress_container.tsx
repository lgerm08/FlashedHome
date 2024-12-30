import { StyleSheet, Animated } from "react-native";
import { View, Dimensions } from "react-native";
import { ThemedText } from "../ThemedText";
import Clock from "@/assets/images/Home/clock.svg";
import { useState, useEffect } from "react";
import Svg, { Rect, Defs, LinearGradient, Stop, RadialGradient } from "react-native-svg";

interface ProgressContainerProps {
  isActive: boolean;
}

export default function ProgressContainer({ isActive }: ProgressContainerProps) {
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const handleLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const AnimatedRect = Animated.createAnimatedComponent(Rect);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: isActive ? 280 : 0,
      duration: 500, // Ajuste o tempo de animação conforme necessário
      useNativeDriver: false,
    }).start();
  }, [isActive]); // Adicionado isActive como dependência
  

  return (
    <View style={styles.container} onLayout={handleLayout}>
      {isActive && (
        <Svg
          width={`${dimensions.width}`}
          height={`${dimensions.height}`}
          style={[styles.gradientBorder, { zIndex: isActive ? 1 : -1 }]}
        >
          <Defs>
            <LinearGradient id="borderGradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#C4D906" stopOpacity="1" />
              <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width={dimensions.width}
            height={dimensions.height}
            stroke="url(#borderGradient)"
            strokeWidth="5"
            fill="none"
            rx="10" 
          />
        </Svg>
      )}
      <Svg width={`${dimensions.width}`}
          height={`${dimensions.height}`} style={[StyleSheet.absoluteFillObject,]}>
              <Defs>
                <RadialGradient
                  id="grad"
                  cx="0.5"
                  cy="0"
                  rx='1'
                  ry='1'
                  fx="50%"
                  fy="50%"
                >
                  <Stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
                  <Stop offset="12.5%" stopColor="#fff" stopOpacity="0.09" />
                  <Stop offset="50%" stopColor="#fff" stopOpacity="0.06" />
                  <Stop offset="62.5%" stopColor="#fff" stopOpacity="0.03" />
                  <Stop offset="75%" stopColor="#fff" stopOpacity="0.01" />
                  <Stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </RadialGradient>
              </Defs>
              <Rect width={`${dimensions.width}`} height={`${dimensions.height}`} fill="url(#grad)" />
            </Svg>
      <View style={[styles.progressBody, isActive ? { borderWidth: 0 } : {borderWidth: 0.7}]}>
        <ThemedText style={styles.text}>Adicionar meta diária</ThemedText>
        <View style={styles.dataView}>
          <ThemedText style={styles.text}>{ isActive ? "87%" : 0}</ThemedText>
          <View style={styles.iconView}>
            <Clock />
            <ThemedText style={styles.text}>0min</ThemedText>
          </View>
        </View>
        <View style={styles.barBase}>
          {isActive && (
            <AnimatedSvg
              width={progress}
              height={8}
              style={[styles.gradientBorder, { zIndex: isActive ? 1 : -1 }]}
            >
              <Defs>
                <LinearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
                  <Stop offset="0%" stopColor="#FF1717" stopOpacity="1" />
                  <Stop offset="25%" stopColor="#FF3F17" stopOpacity="1" />
                  <Stop offset="50%" stopColor="#FF6417" stopOpacity="1" />
                  <Stop offset="100%" stopColor="#A3CF10" stopOpacity="0.9583" />
                </LinearGradient>
              </Defs>
              <AnimatedRect
                x="0"
                y="0"
                width={progress}
                height={8}
                strokeWidth="2"
                fill="url(#progressGradient)"
                rx="8" 
              />
            </AnimatedSvg>
          )}
          <Animated.View style={[styles.bar, {width: dimensions.width*0.9}, isActive && {
            shadowColor: '#FF1717', 
            shadowOffset: { width: 0, height: 10}, 
            shadowOpacity: 1, 
            shadowRadius: 10, 
            elevation: 10,
          }]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: '55%',
  },
  progressBody: {
    display: "flex",
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 8,
    borderStyle: "dashed",
    borderColor: "rgba(157, 128, 221, 0.7)",
    backdropFilter: "blur(6px)",
    width: "100%",
  },
  gradientBorder: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  text: {
    color: "#8c66cb",
    textAlign: "center",
    fontFamily: "Plus Jakarta Sans",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 14,
    letterSpacing: 0.5,
  },
  dataView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  iconView: {
    flexDirection: "row",
  },
  barBase: {
    height: 8,
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    borderRadius: 10,
    width: "100%",
  },
  bar: {
    height: 8,
    backgroundColor: "#000",
    opacity: 0.16,
    borderRadius: 10,
  },
  activeBar: {
    shadowColor: '#FF1717', 
    shadowOffset: { width: 0, height: 10}, 
    shadowOpacity: 1, 
    shadowRadius: 10, 
    elevation: 10,
  }
});