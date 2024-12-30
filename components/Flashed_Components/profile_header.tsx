import { Image, StyleSheet, View, Text } from 'react-native';
import profilePic from '@/assets/images/Home/profile_pic.png';
import Heart from '@/assets/images/Home/heart.svg';
import Bookmark from '@/assets/images/Home/bookmark.svg';
import AI from '@/assets/images/Home/AI.svg';
import LottieView from 'lottie-react-native';
import { ThemedText } from '../ThemedText';
import Svg, { Rect, Defs, LinearGradient, Stop, RadialGradient } from "react-native-svg";
import Badge from './badge';

export default function ProfileHeader(props: { isActive: boolean }) {
  return (
    <View style={styles.headerBase}>

      <View style={styles.badge}>
        <View style={styles.outerCircle}>
          <Image source={profilePic} style={styles.profilePicture} />
        </View>
        <Badge />
      </View>

      <View style={styles.iconContainer}>
        <Bookmark style={styles.icons} />
        <AI style={styles.icons} />
        <Heart style={styles.icons} />

        {props.isActive &&
          <View style={styles.fireComponent}>
          <LottieView
            style={styles.fireAnimation}
            source={require('@/assets/images/Home/animation-fire.json')}
            autoPlay
            loop
          />
          <View style={styles.svgWrapper}>
            <Svg
              width="110" 
              height="40"
              style={styles.svg}
            >
              <Defs>
                <LinearGradient id="borderGradient" x1="0" y1="0" x2="1" y2="1">
                  <Stop offset="0%" stopColor="#F23B09" stopOpacity="1" />
                  <Stop offset="100%" stopColor="#FAC710" stopOpacity="1" />
                </LinearGradient>
              </Defs>
              <Rect
                x="50"
                y="5"
                width="50" 
                height="30" 
                stroke="url(#borderGradient)"
                strokeWidth="4"
                fill="none"
                rx="15"
              />
            </Svg>
            <ThemedText style={styles.iconText}>113</ThemedText>
          </View>
        </View>}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',   
    justifyContent: 'flex-start', 
    alignSelf: 'flex-start',
  },
  profilePicture: {
    width: 36,
    height: 36,
    borderRadius: 17,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  outerCircle: {
    width: 48,
    height: 48,
    borderRadius: 24, 
    borderWidth: 1,
    borderColor: '#9D80DD',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
  icons: {
    width: 24,
    height: 24,
  },
  image: {
    width: 100, // Defina o tamanho da imagem conforme necessário
    height: 100,
    position: 'absolute',
    top: 50, // Posição em relação ao SVG
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    flexDirection: 'row',
  },
  fireAnimation: {
    height: 45,
    width: 45,
    zIndex: 1,
    marginRight: -75,
    marginBottom: 5
  },
  fireComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgWrapper: {
    position: 'relative', 
    width: 100, 
    height: 40, 
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 0,
  },
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  iconText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 14,
    fontWeight: '800',
    zIndex: 0, 
    marginRight: 10
  },
});