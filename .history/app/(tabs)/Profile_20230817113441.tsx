import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you have Ionicons installed


const Profile = () => {
  return (
   <>
    <ScrollView>
         <View style={styles.container}>
            <View style={styles.header}>
               <Image
                  source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlTauvFuw7q1xluWrxtf2uFBYgaa_a2GQfg&usqp=CAU" }}
                  style={styles.profileImage}
               />
            <Text style={styles.username}>User</Text>
            <View style={styles.buttonContainer}>
               <Pressable style={styles.button}>
                  <Text style={{color: "white", textAlign: "center", alignItems: "center", alignSelf: "center"}}>Edit Profile</Text>
               </Pressable>
            </View>
         </View>
         <View style={styles.settingsContainer}>
            <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
               <Ionicons name="ios-home-outline" size={24} color="black" style={styles.icon} />
               <Text style={styles.settingText}>My Household</Text>
               <Ionicons name="ios-chevron-forward-sharp" size={24} color="gray" style={styles.arrowIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
            <Ionicons name="ios-bar-chart-outline" size={24} color="black" style={styles.icon} />
               <Text style={styles.settingText}>My Items</Text>
               <Ionicons name="ios-chevron-forward-sharp" size={24} color="black" style={styles.arrowIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
            <Ionicons name="ios-basket-outline" size={24} color="black" style={styles.icon} />
               <Text style={styles.settingText}>setting</Text>
               <Ionicons name="ios-chevron-forward-sharp" size={24} color="black" style={styles.arrowIcon} />
            </TouchableOpacity> 
            <TouchableOpacity style={styles.settingItem} onPress={() => {}}>
               <Ionicons name="ios-wifi" size={24} color="black" style={styles.icon} />
               <Text style={styles.settingText}>setting</Text>
               <Ionicons name="ios-chevron-forward-sharp" size={24} color="gray" style={styles.arrowIcon} />
            </TouchableOpacity>
         </View>
      </View>
    </ScrollView>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
   marginVertical: 50, 
   justifyContent: 'center', 
   alignItems: 'center', 
   alignSelf: 'center'
  },
  button: {
   marginTop: "auto", 
   marginBottom: "auto", 
   backgroundColor: "black", 
   width: 200, 
   height: 50, 
   padding: 15, 
   borderRadius: 5
  },
  settingsContainer: {
   backgroundColor: "white", 
   padding: 10,
   borderRadius: 10
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: "gray"
  },
  arrowIcon: {
   color: "gainsboro"
  },
});

export default Profile;
