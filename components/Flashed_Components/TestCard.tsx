import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Svg, { Rect, Defs, RadialGradient, Stop } from "react-native-svg";
import { useState, useEffect } from 'react';
import Calendar from '@/assets/images/Home/calendar.svg';
import Add from '@/assets/images/Home/add-square.svg';

export default function TestCard(props: { isActive: boolean }) {
  const windowWidth = Dimensions.get('window').width;
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  const handleLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  if (props.isActive) {
    return (
      <View
        style={[
          styles.activeContainer,
          { minWidth: windowWidth * 0.33 },
        ]}
      >
        <Text style={styles.activeText}>Prova</Text>
        <View style={styles.row}>
          <Text style={styles.activeText}>MAT</Text>
          <View style={{ flexDirection: 'row' }}>
            <Calendar />
          <Text style={styles.activeText}>16/01</Text>
            </View>
        </View>
        <View>
        <View style={styles.topSeparator} />
        <View style={styles.separator} />
        </View>
      </View>
    );
  }

  return (
    <View
      style={[
        styles.inactiveContainer,
        { minWidth: windowWidth * 0.33 },
      ]}
      onLayout={handleLayout}
    >
      <Svg
        width={dimensions.width}
        height={dimensions.height}
        style={[StyleSheet.absoluteFillObject]}
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
          width={`${dimensions.width}`}
          height={`${dimensions.height}`}
          fill="url(#grad)"
        />
      </Svg>
      <Add />
      <Text style={styles.inactiveText}>Adicionar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inactiveContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    marginVertical: 4,
    borderRadius: 8,
    borderColor: 'rgba(157, 128, 221, 0.7)',
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: 'rgba(62, 0, 124, 0.8)',
    borderStyle: 'dashed',
  },
  inactiveText: {
    color: '#8C66CB',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },
  activeContainer: {
    backgroundColor: '#5203A1',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  activeText: {
    color: '#FFF',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  separator: {
    height: 5,
    backgroundColor: '#3E007C',
    marginVertical: 8,
    borderRadius: 8,
  },
  topSeparator: {
    position: 'absolute',
    height: 7,
    backgroundColor: '#E03388',
    marginVertical: 8,
    width: '50%',
    zIndex: 1,
    borderRadius: 8,
  }
});
