<template>
  <div class="home">
    <ToDoComponent v-for="(todo,key) in toDos" :key="key" :todo="todo"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Api from '../api/Api';
import ToDoComponent from '../components/ToDoComponent';
export default {
  name: 'home',
  created(){
    Api.ToDo.fetchAll().then((response) =>{
        for(let i=0; i<10; i++){
          this.toDos.push(response.data[i]);
        }
    })
  },
  components:{
    ToDoComponent
  },
  data:function(){
    return{
      toDos:[]
    }
  }

}
</script>
