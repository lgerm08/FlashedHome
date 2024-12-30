import { StyleSheet, FlatList, View, Dimensions, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import ProfileHeader from '@/components/Flashed_Components/profile_header';
import ProgressContainer from '@/components/Flashed_Components/progress_container';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedButton from '@/components/Flashed_Components/animated_button';
import SubjectCard from '@/components/Flashed_Components/subject_card';
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FlashedBattery from '@/components/Flashed_Components/flashed_battery';
import { StatusBar } from 'expo-status-bar';
import TestCard from '@/components/Flashed_Components/TestCard';
import Battery from '@/assets/images/Home/battery.svg';

export default function HomeScreen() {
  const [isActive, setIsActive] = useState(false);
  const { top: paddingTop, bottom: paddingBottom } = useSafeAreaInsets();

  const data = Array.from({ length: 5 }, (_, i) => ({
    id: `${i + 1}`,
    subject: "vazio",
  }));

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.appBase, { paddingTop, paddingBottom: Math.max(0, paddingBottom - 16) }]}>

      <StatusBar style="light" />

      <View style={[styles.headerContainer, {}]}>
        <ProfileHeader isActive={isActive} />
        <ProgressContainer isActive={isActive} />
      </View>

      <View style={[styles.gridBackground, { paddingTop: 10 }]}>

        <Svg style={styles.centerLine} height="100%" width="100%">
          <Defs>
            <LinearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0%" stopColor="#8C66CB" stopOpacity="0" />
              <Stop offset="50%" stopColor="#8C66CB" stopOpacity="1" />
              <Stop offset="68%" stopColor="#8C66CB" stopOpacity="0" />
              <Stop offset="100%" stopColor="#8C66CB" stopOpacity="0" />
            </LinearGradient>
          </Defs>
          <Rect x="0%" y="0" width="2" height="100%" fill="url(#lineGradient)" />
        </Svg>

        <View style={[styles.bodyContent]}>

          <View style={{ flex: 0.3, width: '35%' }}>
            <AnimatedButton title={'Iniciar'} onPress={() => setIsActive(!isActive)} />
          </View >

          <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ flex: 2 }} showsVerticalScrollIndicator={false}>
            {data.slice(0, 3).map((item) => (
              <SubjectCard
                key={item.id}
                isActive={isActive} scaler={parseInt(item.id)}
              />
            ))}
          </ScrollView>

          <View style={{ flex: 0.5 }}>
            <ScrollView
              style={[{ height: windowHeight * 0.15 }]}
              contentContainerStyle={{ gap: 16, paddingHorizontal: 16 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {data.map((item) => <TestCard isActive={isActive} key={item.id} />)}
            </ScrollView>
          </View>
          <View style={{ flex: 0.7, opacity: isActive ? 1 : 0.3 }}>
            <FlashedBattery progress={isActive ? 87 : 0} />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{
                color: "#E03388",
                fontSize: 12,
                marginRight: 2,
                fontWeight: "bold",
              }}>{isActive ? 87 : 0}</Text>
              <Battery />
            </View>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBase: {
    backgroundColor: '#3E007C',
    paddingHorizontal: 16,
    flex: 1,
  },
  headerContainer: {
    height: 'auto',
    justifyContent: 'space-between',
    flex: 2,
  },
  gridBackground: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  bodyContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  horizontalListContainer: {
    justifyContent: 'center',
  },
  listContent: {
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  centerLine: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -1 }],
    width: 2,
    zIndex: -1,
  },
});
