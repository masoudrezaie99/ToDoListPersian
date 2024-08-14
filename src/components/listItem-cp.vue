<template>
    <template v-for="(item,index) in tasks" :key="item.title">
    <v-card v-if="item.isdone==false" :title="item.title" :subtitle="item.timeData" :text="item.description">
      <v-card-actions>
        <v-btn @click="item.isdone=true;">انجام شد</v-btn>
        |
        <v-icon @click="tasks.splice(index, 1)" color="error" icon="mdi-delete" end tag="button"></v-icon>
      </v-card-actions>
    </v-card>
    <v-divider class="border-opacity-25" color="info"></v-divider>
</template>


</template>



<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';





export default{
    name:'listItem-cp',

  setup(){
    const taskStore = useTaskStore()
    const {task , tasks , taskDes , taskDate , timeModal, taskTime, timeData} = storeToRefs(taskStore)
    taskStore.updateTasks()
   
    // watch local storages changes
  window.addEventListener("storage", (event) => {
        if (event.key === "ToDoTasks") {
          taskStore.updateTasks()
        }
        
      });



      // watch tasks array changes
      taskStore.$subscribe((mutation, state) => {

  mutation.type 

  mutation.storeId 

  mutation.payload 

  localStorage.ToDoTasks = JSON.stringify(state.tasks)
})



 



    return{task , tasks , taskDes , taskDate , timeModal, taskTime, timeData}

  },


 
}

</script>



<style scoped>

</style>