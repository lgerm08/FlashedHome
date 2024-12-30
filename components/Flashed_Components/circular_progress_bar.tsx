import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Rect } from 'react-native-svg';

interface IParams {
    progress: number;
    size?: number;
    strokeWidth?: number;
    barWidth?: number;
    barHeight?: number;
    segments?: number;
    rx?: number;
    ry?: number;
    clipTotal?: number;
}

const CircularProgressBar = ({
    progress,
    size = 100,
    strokeWidth = 20,
    barWidth = 5,
    barHeight = 2,
    segments = 60,
    rx = 1,
    ry,
    clipTotal,
}: IParams) => {
  const radius = (size - strokeWidth) / 2;
  const totalAngle = clipTotal
    ? Math.round(clipTotal * 360)
    : 360;
  const angleStep = clipTotal
    ? (2 * Math.PI * clipTotal) / segments
    : (2 * Math.PI) / segments;
    const startingAngle = totalAngle === 360
        ? 90
        : (360 - totalAngle) / 2 + 90;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        <G rotation={startingAngle} origin={`${size / 2}, ${size / 2}`}>
          {[...Array(segments)].map((_, i) => {
            const angle = i * angleStep;
            const x = size / 2 + radius * Math.cos(angle) - barWidth / 2;
            const y = size / 2 + radius * Math.sin(angle) - barHeight / 2;

            const isActive = (progress / 100) * segments >= i;

            return (
              <Rect
                key={i}
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx={rx || barWidth / 2} // Arredondar os cantos
                ry={ry || barWidth / 2}
                fill={isActive ? 'limegreen' : '#00000029'}
                transform={`rotate(${(angle * 180) / Math.PI}, ${x + barWidth / 2}, ${y + barHeight / 2})`}
              />
            );
          })}
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {CircularProgressBar};
