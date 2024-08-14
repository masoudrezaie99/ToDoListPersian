<template>
        <v-app-bar :elevation="2" color="blue-grey-darken-3" scroll-behavior="hide" scroll-threshold="268" >
      
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
  
  
    <v-app-bar-title>لیست کار ها</v-app-bar-title>
  </v-app-bar>
  
  
  <v-navigation-drawer
          v-model="drawer"
          location="end"
          temporary
        >
        <v-list>
      <v-list-subheader>منو</v-list-subheader>

      <v-list-item
        v-for="(item, i) in menuItems"
        :key="i"
        :value="item"
        color="primary"
        rounded="shaped"
        :href="item.link"
      >
      
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
     
      </v-list-item>
      
    </v-list>

        </v-navigation-drawer>
</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';

    export default {
        name:'header-cp',
        setup(){
    const taskStore = useTaskStore()
    const {drawer,menuItems} = storeToRefs(taskStore)

    return{drawer,menuItems}

  },
    }
</script>

<style scoped>

</style>