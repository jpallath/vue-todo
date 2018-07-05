<template>
    <li v-on:click="changeStatus()" v-if="completed" class="completed">
        <h1>{{index+1}}: {{title}}</h1>
    </li>
    <li v-on:click="changeStatus()" v-else class="notcompleted">
        <h1>{{index+1}}: {{title}}</h1>
    </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ["title", "completed", "index"],
    methods: {
      changeStatus: function() {
          let  index = this._props.index;
          
          this.$emit('changeStatus', index)
      }
    },
  }
</script>

<style>
li:hover{
    cursor: pointer;
}
</style>
