import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"

import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../public/images/Logo.png")}
          style={{ width: 200, height: 32, resizeMode: "contain" }}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <Icon name="pluscircleo" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <View style={styles.tasksHeader}>
          <View style={styles.taskBox}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.numberBox}>0</Text>
          </View>

          <View style={styles.taskBox}>
            <Text style={styles.completedText}>Concluídas</Text>
            <Text style={styles.numberBox}>0</Text>
          </View>
        </View>

        <View style={styles.empty}>
          <Image
            source={require("../../../public/images/Clipboard.png")}
            style={{ width: 56, height: 56, resizeMode: "contain" }}
          />

          <View>
            <Text style={styles.emptyText1}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText2}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
