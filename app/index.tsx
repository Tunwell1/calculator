import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Vibration } from "react-native";

export default function Index() {
  const [input, setInput] = useState<string>(""); 

  const handlePress = (value: string) => {
    Vibration.vibrate(45);
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input);
        setInput(result.toString());
      } catch (e) {
        setInput("");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Калькулятор</Text>
      <ScrollView style={styles.inputContainer} contentContainerStyle={{ flexGrow: 1 }} horizontal={true}>
        <Text style={styles.input}>{input}</Text>
      </ScrollView>
      <View style={styles.buttonGrid}>
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", 0, "C", "=", "/"].map((item, index) => (
          <TouchableOpacity key={index} style={styles.button}
            onPress={() => handlePress(item.toString())}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50%",
    padding: 10,
  },
  text:{
    fontSize: 24,
    marginRight: "auto",
    marginBottom: 10
  },
  inputContainer: {
    height: 70,
    backgroundColor: 'rgba(100,149,237,0.7)',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 24,
    color: 'black',
    borderColor: 'black',
    height: 30,
    alignSelf: 'center',
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    width: "22%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 'auto',
    marginTop: 10,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(100,149,237,0.5)'
  },
  buttonText: {
    fontSize: 24,
  },
});
