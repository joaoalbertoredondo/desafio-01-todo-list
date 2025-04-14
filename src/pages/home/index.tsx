import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { useState } from "react"
import Icon from "react-native-vector-icons/AntDesign"

import { TaskCard } from "../../components/card"

import { styles } from "./styles"

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState<string[]>([])
  const [taskTitle, setTaskTitle] = useState("")

  const sortedTasks = [
    ...tasks.sort((a, b) => {
      const aChecked = completedTasks.includes(a)
      const bChecked = completedTasks.includes(b)

      return Number(aChecked) - Number(bChecked)
    }),
  ]

  function handleAddTask() {
    if (taskTitle === "") {
      return Alert.alert("A tarefa precisa ter um título!")
    }

    setTasks((prevState) => [...prevState, taskTitle])
    setTaskTitle("")
  }

  function handleCheckTask(title: string) {
    if (completedTasks.includes(title)) {
      setCompletedTasks((prevState) =>
        prevState.filter((task) => task !== title)
      )
    } else {
      setCompletedTasks((prevState) => [...prevState, title])
    }
  }

  function handleRemoveTask(title: string) {
    Alert.alert("Remover", `Tem certeza que deseja remover a task ${title}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((tasks) => tasks !== title)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ])
  }

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
          onChangeText={setTaskTitle}
          value={taskTitle}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            <Icon name="pluscircleo" />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <View style={styles.tasksHeader}>
          <View style={styles.taskBox}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.numberBox}>{tasks.length}</Text>
          </View>

          <View style={styles.taskBox}>
            <Text style={styles.completedText}>Concluídas</Text>

            <Text style={styles.numberBox}>{completedTasks.length}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={sortedTasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TaskCard
              key={item}
              title={item}
              isChecked={completedTasks.includes(item)}
              onCheck={() => handleCheckTask(item)}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
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
          )}
        />
      </View>
    </View>
  )
}
