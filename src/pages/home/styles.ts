import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },

  header: {
    backgroundColor: "#0D0D0D",
    height: 180,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    marginTop: -28,
    flexDirection: "row",
    width: "90%",
    gap: 4,
  },

  input: {
    flex: 1,
    backgroundColor: "#262626",
    borderRadius: 6,
    paddingHorizontal: 16,
  },

  button: {
    backgroundColor: "#1E6F9F",
    padding: 18,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 52,
    width: 52,
  },

  buttonText: {
    color: "#fff",
  },

  tasks: {
    marginTop: 32,
    width: "90%",
  },

  tasksHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  taskBox: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },

  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },

  completedText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "bold",
  },

  numberBox: {
    backgroundColor: "#333333",
    color: "#D9D9D9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontWeight: "bold",
    fontSize: 12,
  },

  empty: {
    marginTop: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingHorizontal: 20,
    paddingVertical: 48,
    gap: 16,
  },

  emptyText1: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold"
  },

  emptyText2: {
    color: "#808080",
    fontSize: 14,

  },
})
