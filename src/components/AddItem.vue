<template>
<div>
<input type="text" v-model="newTodo" @keyup="matchedTodo(newTodo)" @keyup.enter="addTodo(newTodo)">
<button v-on:click="addTodo(newTodo)">Submit</button>
</div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      newTodo: null
    };
  },
  methods: {
    addTodo: function(newTodo) {
      this.$emit("updateList", newTodo);
      this.newTodo = "";
    },
    matchedTodo: function(newTodo) {
      this.$emit("matchingTodo", newTodo)
      
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 2.5%;
  width: 50%;
  align-self: center;
}
</style>

