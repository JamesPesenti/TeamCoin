import { StyleSheet, Dimensions, ScrollView } from 'react-native'
import { Text, View } from '../components/Themed';
import React from 'react'

export default function OverviewCard ({ overview, index }) {
 
   return (
     <>
       <View style={styles.container}>
           {/* <DollarSign style={{marginTop: -20}} size={29} color={"gray"} /> */}
             <View key={index} style={styles.goalContainer}>
                <Text style={{ color: "gray", fontWeight: "bold", fontSize: 20, marginBottom: 5, marginRight: 10, }}>{overview.name}</Text>
                <Text style={{ margin: 20, fontSize: 22, fontWeight: "bold" }}>{overview.progress}</Text>
             </View>
       </View>
     </>
   )
 }