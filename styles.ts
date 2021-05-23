import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: "100%",
  },
  bar: {
    height: "25%",
    width: "100%",
    display: "flex",
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cta: {
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FC85AE",
    padding: 10,
    width: 100,
    top: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
  },
  bottomNav: {
    height: "10%",
    backgroundColor: "#303A52",
  },
  welcome: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#FC85AE",
    borderRadius: 10,
    marginTop: 10,
    width: 120,
  },
  titleStyle: {
    color: "#000",
  },
});
