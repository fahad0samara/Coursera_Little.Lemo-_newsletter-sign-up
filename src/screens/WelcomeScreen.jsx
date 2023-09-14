
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View >
      <Image
        style={styles.logo}
        source={ require("../../assets/little-lemon-logo.png") }
      />
      <Text style={styles.textStyle}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable onPress={ () => navigation.navigate("Subscribe") }>
        <Text style={styles.buttonStyle}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  logo: {
    marginTop: 150,
    marginLeft: 100,
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  textStyle: {
    marginTop: 90,
    marginLeft: 80,
    marginRight: 80,
    marginBottom: 150,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: -25, 
    backgroundColor: "#006600",
    textAlign: "center",
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    borderRadius: 15,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});