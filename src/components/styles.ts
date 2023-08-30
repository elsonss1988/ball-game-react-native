import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  area: {
    flex: 1,
    backgroundColor: "#333",
  },
  control: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    margin: 20,
  },
  controlText: {
    color: "#FFF",
  },
  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: "#0061FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottonArea: {
    width: "300%",
    backgroundColor: "red",
  },
});
