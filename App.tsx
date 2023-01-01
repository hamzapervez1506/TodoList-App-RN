import React from 'react';
import { View,Text,StyleSheet,Image,ScrollView, TextInput} from 'react-native';
import Tasks from './components/Items';
function PortfolioScreen(){
  return (
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.title}>Today's Tasks</Text>
      <View style={styles.tasks}>
        <Tasks text={'Task1'}/>
        <Tasks text={'Task2'}/>
        <Tasks text={'Task3'}/>
        <Tasks text={'Task4'}/>
        <Tasks text={'Task5'}/>
        <Tasks text={'Task6'}/>
        </View>
        </View>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E8EAED',
    fontFamily:'Roboto',
    
  },
  title: {
    marginTop:50,
    fontSize:25,
    fontWeight:'bold',
    color:'black',
  },
  tasks:{
    
  }
});

export default PortfolioScreen;
