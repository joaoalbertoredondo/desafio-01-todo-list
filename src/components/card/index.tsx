import { Text, TouchableOpacity, View } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import FA from "react-native-vector-icons/FontAwesome"

import { styles } from "./styles"

interface TaskCardProps {
  title: string
  isChecked: boolean
  onCheck: () => void
  onRemove: () => void
}

export function TaskCard({
  title,
  isChecked,
  onRemove,
  onCheck,
}: TaskCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkButton} onPress={onCheck}>
        {!isChecked ? (
          <Text>
            <Entypo name="circle" size={18} color={"#4EA8DE"} />
          </Text>
        ) : (
          <Text>
            <View style={styles.checked}>
              <Entypo name="check" size={10} color={"#F2F2F2"} />
            </View>
          </Text>
        )}
      </TouchableOpacity>

      <Text style={[styles.text, isChecked && styles.checkedText]}>
        {title}
      </Text>

      <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
        <Text>
          <FA name="trash-o" size={18} color={"#808080"} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}
