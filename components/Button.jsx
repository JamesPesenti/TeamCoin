import { 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  StyleSheet, 
  Text, 
  View
} from 'react-native'

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{color: "white", fontSize: 40, top: 20, textAlign: "center", alignItems: "center"}}>+</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
   button: {
      width: 40,
      height: 40,
      backgroundColor: "purple",
      borderRadius: 100
   }
})