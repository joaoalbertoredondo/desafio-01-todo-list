import { Text, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"

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
          <Text style={styles.checkButtonText}>
            <Icon name="pluscircleo" size={18} />
          </Text>
        ) : (
          <Text style={styles.checkButtonText}>
            <Icon name="checkcircleo" size={18} />
          </Text>
        )}
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
        <Text style={styles.deleteButtonText}>
          <Icon name="minuscircleo" size={18} />
        </Text>
      </TouchableOpacity>
    </View>
  )
}
