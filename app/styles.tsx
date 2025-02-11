import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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