import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Vibration } from "react-native";
import { styles } from "./styles";

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
