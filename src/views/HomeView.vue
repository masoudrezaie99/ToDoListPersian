<template>
  <v-card height="100%" min-width="120px" color="blue-grey-lighten-4">
    <v-fab
      color="success"
      icon="mdi-pencil"
      class="mr-2 mb-2"
      location="bottom end"
      size="64"
      absolute
      app
      appear
      extended
      text="Extended"
      @click="overlay = !overlay"
    ></v-fab>

    <listItemCp/>

    
  </v-card>



  <v-overlay v-model="overlay" class="align-center justify-center">

    <addItemCp/>
    
    </v-overlay>
</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';
import listItemCp from '../components/listItem-cp.vue';
import addItemCp from '../components/addItem-cp.vue';



export default{
  setup(){
    const taskStore = useTaskStore()
    const {overlay} = storeToRefs(taskStore)
   
  
 

  


    return{overlay}

  },


  components:{
    listItemCp,
    addItemCp
  }

 
}

</script>


<style>



</style>
