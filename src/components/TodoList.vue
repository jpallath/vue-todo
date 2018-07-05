<template>
<div>
  <div class="list" v-bind:list="list">
    <AddItem v-on:updateList="addToList($event, list, matchedTodo)" v-on:matchingTodo="matchTodo($event, matchedTodo)"/>
      <ul>
          <TodoListItem v-on:changeStatus="changeCompletion($event, list)" v-for="(listItem, index) in list" :key=index v-bind:index="index" v-bind:title="listItem.title" v-bind:completed="listItem.completed"></TodoListItem>
              <h1>{{matchedTodo[matchedTodo.length-1]}} </h1>
      </ul>
  </div>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue"
import AddItem from "./AddItem.vue"
export default {
  name: 'TodoList',
  components: {TodoListItem, AddItem},
  data() {
    return {
      list: [
        { title: 'Clean', completed: true },
        { title: 'Code', completed: false },
        { title: 'Work', completed: true },
      ],
      matchedTodo: [],
    };
  },
  methods: {
    changeCompletion: (index, list) => {
      list[index].completed =  !list[index].completed
    },
    addToList: (newTodo, list,matchedTodo) => {
      let Todo = {
        title: newTodo,
        completed: false
      }
      matchedTodo.length = 0;
      console.log(matchedTodo);
      
      list.push(Todo)
    },
    matchTodo: (newTodo, matchedTodo) => {
      matchedTodo.push(newTodo)
      
  },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-top: 5px solid blue;
}
ul{
  list-style: none;
  display: flex;
  flex-direction: column;
}
.completed {
  color: green;
}
.notcompleted {
  color: red;
}
</style>
