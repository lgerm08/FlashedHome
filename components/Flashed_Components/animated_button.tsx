import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Play from "@/assets/images/Home/play_icon.svg";

// Função para criar o botão com aparência 3D e animação
export default function AnimatedButton(props: { title: string; onPress: () => void }) {
  // Animação de escala
  const translateY = new Animated.Value(0);

  const windowWidth = Dimensions.get('window').width;

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: 5, 
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 0, 
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View
        style={
          [styles.button, {height: (windowWidth*0.33)*0.408} ]
        }
      >
            <Animated.View style={[styles.topView, { transform: [{ translateY }] },]}>
                <View style={styles.innerBorder}>
                    <Play style={styles.icon}/>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </Animated.View>
      </View>
    </Pressable>
  );
}

// Estilos
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D61A77",
    shadowRadius: 2,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    marginTop: 0,
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.8)", 
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 1,
  },
  topView: {
    alignContent: 'center',
    backgroundColor: '#E03388',
    marginBottom: 16,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerBorder: {
    flexDirection: 'row',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10
  },
  text: {
    color: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 28,
    letterSpacing: 0.48,
  },
  icon: {
    marginHorizontal: 8,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'rgba(0, 0, 0, 0.15)',
  },
});