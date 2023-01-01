import React from "react";
import { View,Text,StyleSheet,Image,ScrollView, TextInput, TouchableOpacity} from 'react-native';

const Tasks = (props) => {
    return(
        <View style={styles.tasks}>
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemsText}> {props.text}</Text>
          
            </View>
              <View style={styles.circular}></View>
        </View>
    );
};

const styles= StyleSheet.create(
    {
        circular:{
            width:12,
            height:12,
            borderColor:'#55BCF6',
            borderRadius:5,
            borderWidth:2,
            marginRight:10,
        },
        square:{
            width:24,
            height:24,
            opacity:0.4,
            backgroundColor:'#55BCF6', 
            marginRight:15,
        },
        itemsText:{
            color:'#000000',
            fontWeight:'bold',
            borderRadius:20,
            border:'#000000',
            padding:10,
            maxWidth:'80%'
        },
        itemLeft:{
            flexDirection:'row',
            alignItems:'center',
            flexWrap:'wrap'
        },

        tasks:{
            backgroundColor: '#F6F6F6',
            padding: 10,
            borderRadius:10,
            margin:15,
            alignItems:'center',
            justifyContent:'space-between',
            flexDirection:'row',
            marginBottom:20,
        }
    }
)

export default Tasks;