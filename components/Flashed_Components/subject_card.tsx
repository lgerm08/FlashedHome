import { Image, StyleSheet, View, Text, Pressable, Dimensions } from 'react-native';
import Add from '@/assets/images/Home/add-square.svg';
import Svg, { Rect, Defs, LinearGradient, Stop, RadialGradient } from "react-native-svg";
import { useState, useEffect } from 'react';
import Globe from '@/assets/images/Home/globe.svg';

export default function SubjectCard(props: { isActive: boolean, scaler: number }) {
  const windowWidth = Dimensions.get('window').width;
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [borderStyle, setBorderStyle] = useState<'solid' | 'dashed'>('dashed');

  const handleLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  useEffect(() => {
    setBorderStyle(props.isActive ? 'solid' : 'dashed');
  }, [props.isActive]);

  return (
    <View
      style={[
        styles.border,
        {
          minHeight: 70,
          width: props.isActive ? windowWidth * (0.41 - props.scaler*0.05) : windowWidth*0.41,
          borderStyle: borderStyle,
        },
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
      

      <Pressable>
        {props.isActive ? <Globe style={{width: 15, height: 15}}/> : <Add />}
      </Pressable>

      <View>
        {props.isActive ? (
          <Text style={styles.text}>Geografia</Text>
        ) : (
          <Text style={styles.text}>Adicionar</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.8,
    marginVertical: 4,
    borderRadius: 8,
    borderColor: 'rgba(157, 128, 221, 0.7)',
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: 'rgba(62, 0, 124, 0.8)',
  },
  text: {
    color: '#8C66CB',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '800',
  },
});
