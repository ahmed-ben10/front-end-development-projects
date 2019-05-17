<template>
    <div id="todo-container">
        <ul>
            <li v-if="toDoItem.completed">{{todo.title}}</li>
            <li v-else class="completed">{{todo.title}}</li>

        </ul>
    </div>
</template>

<script>
export default {
    name:"ToDoComponent",
    props:["todo"],
    data:function(){
        return{
            toDoItem:this.todo
        }
    },
    methods:{
    
    }
}
</script>

<style scoped>
    .completed{
        text-decoration: line-through;
        color: red;
    }
</style>
