import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Rect, Defs, Stop, RadialGradient } from "react-native-svg";

export default function Badge() {
  const [textLayout, setTextLayout] = useState({ width: 0, height: 0 });

  return (
    <View style={styles.textBorder}>
      <Svg
        width={textLayout.width} // Adiciona padding horizontal
        height={textLayout.height} // Adiciona padding vertical
        style={[StyleSheet.absoluteFillObject, { position: 'absolute' }]}
      >
        <Defs>
          <RadialGradient
            id="grad"
            cx="0.5"
            cy="0"
            rx="1"
            ry="1"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
            <Stop offset="12.5%" stopColor="#fff" stopOpacity="0.105" />
            <Stop offset="25%" stopColor="#fff" stopOpacity="0.09" />
            <Stop offset="50%" stopColor="#fff" stopOpacity="0.06" />
            <Stop offset="62.5%" stopColor="#fff" stopOpacity="0.045" />
            <Stop offset="75%" stopColor="#fff" stopOpacity="0.03" />
            <Stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Rect
          width="100%"
          height="100%"
          fill="url(#grad)"
          rx={4} 
        />
      </Svg>
      <Text
        style={styles.text}
        onLayout={(event) => {
          const { width, height } = event.nativeEvent.layout;
          setTextLayout({ width, height });
        }}
      >
        MBTI
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#9D80DD',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
    letterSpacing: 0.24,
  },
  textBorder: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#9D80DD',
    backgroundColor: 'rgba(255, 255, 255, 0.01)',
    borderStyle: 'dashed',
    alignContent: 'center',
    verticalAlign: 'middle',
    paddingHorizontal: 10,
    marginLeft: 8,
    justifyContent: 'center',
    position: 'relative',
  },
});
