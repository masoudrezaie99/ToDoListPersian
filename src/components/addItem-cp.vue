<template>
    <v-card class="mx-auto px-6 py-8" min-width="344">
      
      <v-text-field
        v-model="task"
        class="mb-2"
        label="عنوان"
        clearable
        prepend-icon="mdi-pencil"
      ></v-text-field>


      <v-text-field
        v-model="taskDes"
        class="mb-2"
        label="توضیحات (اختیاری)"
        clearable
        prepend-icon="mdi-text-box-outline"
      ></v-text-field>

      


<v-text-field
        
        class="custom-input"
        label="تاریخ"
        prepend-icon="mdi-calendar-month"
        v-model="taskPersianDateNumeric"
        readonly
      ></v-text-field>

<date-picker
  v-model="taskDate"
  format="YYYY-MM-DD"
  display-format="jYYYY-jMM-jDD"
  custom-input=".custom-input"
/>

      <v-text-field
        v-model="taskTime"
        :active="timeModal"
        :focused="timeModal"
        label="ساعت"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
      >
        <v-dialog
          v-model="timeModal"
          activator="parent"
          width="auto"
        >
          <v-time-picker
            v-if="timeModal"
            v-model="taskTime"
            format="24hr"
            no-title
          ></v-time-picker>
        </v-dialog>
      </v-text-field>




  
     



      <br>

      <v-btn
        :disabled="!disableBtn"
        
        color="success"
        size="large"
        type="submit"
        variant="elevated"
        block
        @click="addTask"
      >
        افزودن کار
      </v-btn>
      
  </v-card>
</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';
import DatePicker from 'vue3-persian-datetime-picker'



export default{
    name:'addItem-cp',
    
  setup(){
    const taskStore = useTaskStore()
    const {task , tasks , taskDes , taskDate , timeModal, taskTime,disableBtn, taskPersianDateNumeric} = storeToRefs(taskStore)
   
    const addTask = ()=>{
      taskStore.addTask()
  }

  


    return{task , tasks , taskDes , taskDate , timeModal, taskTime, addTask,disableBtn, taskPersianDateNumeric}

  },

  components:{
    DatePicker 
  }
 

 
}

</script>

<style scoped>
*{    direction: rtl}
</style>