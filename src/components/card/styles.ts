import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
    alignItems: "center",
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
    borderColor: "#333333",
    borderWidth: 2,

    elevation: 1,
  },

  text: {
    color: "#F2F2F2",
    fontSize: 14,
  },

  checkedText: {
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
  },

  checkButton: {
    padding: 12,
    borderRadius: 4,
  },

  deleteButton: {
    padding: 12,
    borderRadius: 4,
  },

  checked: {
    backgroundColor: "#5E60CE",
    borderRadius: 999,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
})
