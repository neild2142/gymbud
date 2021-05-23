import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    padding: 20,
    width: "100%",
    height: "100%",
  },
  card: {
    width: 240,
    padding: 20,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#606e91",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  header: {
    height: "25%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  cta: {
    justifyContent: "space-between",
  },
  tag: {
    minWidth: 60,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  bodyPartTag: {
    padding: 5,
    color: "black",
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
