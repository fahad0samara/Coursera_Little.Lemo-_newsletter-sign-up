
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../../assets/little-lemon-logo.png")}
      />
      <Text style={styles.textStyle}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </View>
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
  buttonContainer: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: -30,
    backgroundColor: "#018201",
    borderRadius: 15,
    overflow: "hidden", // Ensure the borderRadius is applied correctly
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});