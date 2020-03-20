import React,{useState} from 'react';
import { StyleSheet, 
  Text,
   View,
   Button,
   TextInput ,
   ScrollView,
   FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode] = useState(false);

 
  /*function goalInputHandler(enteredText){
    setEnterdGoal(enteredText);
  }*/
  // const goalInputHandler = (enteredText) =>{
  //   setEnteredGoal(enteredText);
  // };

  const addGoalhandler = goalTitle =>{
    setCourseGoals( currentGoals =>[...currentGoals,
      {id:Math.random().toString(),value: goalTitle}]);
      setIsAddMode(false);
  };
  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId);
    });

  }

  const cancelGoalAdditionHandler=()=>{
    setIsAddMode(false);
  };
  return (
    <View  style={styles.screen}>
      <Button title="Add New Goal"  onPress={() =>setIsAddMode(true)}/>
    <GoalInput visible={isAddMode} onAddGoal={addGoalhandler} onCancel={cancelGoalAdditionHandler}/>
      {/* <ScrollView> */}
      <FlatList  keyExtractor={(item,index)=>item.id} data={courseGoals} renderItem={itemData =>
      //(
        // <View   style={styles.listItem}>
        //   <Text >{itemData.item.value}</Text>
        // </View> 
        <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}  />
     // )
      }/>
     
      {/* </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
});
