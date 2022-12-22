const {
    createApp
} = Vue;
//creo array oggetti delle task modificabile
createApp({
    data(){
        return{
            newTask: '',
            todolist:[
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
                {
                    text:'fare la...',
                    done: false,
                    edit: false,
                },
            ]
        }
    },
    //applicazione delle modifiche all'array oggetti come: aggiungi nuova task, rimuovi task, check alla task e edit task
    methods: {
        addTask()
        {
            let object = {
                text: this.newTask,
                done: false
            }
            
            this.todolist.push(object);
            this.newTask = '';
        },
        removeTask(index)
        {
            this.todolist.splice(index, 1);
        },
        checkedTask(index)
        {
            let checkTask = this.todolist[index];

            if(checkTask.done == true){
                checkTask.done = false;
            }
            else{
                checkTask.done = true;
            }
        },
        editTask(index){
            let task = this.todolist[index];

            if(task.edit == true){
                task.edit = false;
            }
            else{
                task.edit = true;
            }
        }
    }
}).mount('#app');