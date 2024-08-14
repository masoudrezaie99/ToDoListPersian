import { defineStore } from "pinia";
import PN from "persian-number";

export const useTaskStore = defineStore('taskStore',{
    state:()=>({
        localStorageData : localStorage.getItem("ToDoTasks"),
        tasks:[],
        task:'',
        taskDes:'',
        taskDate:null,
        timeModal:false,
        taskTime:null,
        overlay:false,
        drawer:false,
        menuItems: [
            { text: 'خانه', icon: 'mdi-home', link:'/' },
            { text: 'آرشیو', icon: 'mdi-archive', link:'/archive'},
            
          ],
    }),


    





    getters:{
        //check addtask button availability
         disableBtn(){
            return this.task=='' || this.taskDate==null || this.taskTime==null ? false : true
        },

        // format date
        fullDate(){
            return this.taskDate == null ? this.taskDate : new Date(this.taskDate)
        },

        // return selected date into numeric persian format
        taskPersianDateNumeric(){
            const dateFa = {
                "day" : this.getDateFormat(this.fullDate , {"day" : "2-digit"}),
                "month" : this.getDateFormat(this.fullDate , {"month" : "numeric"}),
                "monthTitle" : this.getDateFormat(this.fullDate , {"month" : "long"}),
                "year" : this.getDateFormat(this.fullDate , {"year" : "numeric"}),
                "dayWeek" : this.getDateFormat(this.fullDate , {"weekday" : "long"}),
            }

            return this.taskDate == null ? this.taskDate : `${dateFa.year}/${dateFa.month}/${dateFa.day}`
            
        },

        // return selected date into long persian format
        taskPersianDateLong(){
            const dateFa = {
                "day" : this.getDateFormat(this.fullDate , {"day" : "2-digit"}),
                "month" : this.getDateFormat(this.fullDate , {"month" : "numeric"}),
                "monthTitle" : this.getDateFormat(this.fullDate , {"month" : "long"}),
                "year" : this.getDateFormat(this.fullDate , {"year" : "numeric"}),
                "dayWeek" : this.getDateFormat(this.fullDate , {"weekday" : "long"}),
            }

            return this.taskDate == null ? this.taskDate :  `${dateFa.dayWeek} | ${dateFa.day}/${dateFa.monthTitle}/${dateFa.year}`
            
        }
        
    },














    actions:{
        //georgian-date to jalali-date converter
        getDateFormat(uDate,option){
            let date = new Intl.DateTimeFormat('fa-IR', option).format(uDate);
            return date;
        },



        // add task to tasks array
        addTask(){
            this.fullDate.setHours(this.taskTime.split(":")[0])
            this.fullDate.setMinutes(this.taskTime.split(":")[1])
            
            const newTask = {
                title:this.task,
                description:this.taskDes,
                date:this.fullDate,
                isdone:false,
                timeData:`${this.taskPersianDateLong} - ${PN.convertEnToPe(this.fullDate.getMinutes())} : ${PN.convertEnToPe(this.fullDate.getHours())}`
            }


            this.tasks.push(newTask)
            localStorage.ToDoTasks = JSON.stringify(this.tasks)
            
            this.overlay=false
            this.task=''
            this.taskDes=''
            this.taskDate=null
            this.taskTime=null

            //sort tasks by selected date
            this.tasks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        },



        // show tasks saved in local storage
        updateTasks(){
            if (localStorage.ToDoTasks)
              this.tasks = JSON.parse(localStorage.ToDoTasks);
        },
    }
})