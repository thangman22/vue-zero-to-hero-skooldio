<template>
    <ul class="list-group">
        <li v-red class="list-group-item" v-for="todo in sortItem" :key="todo.id"><input type="checkbox">
         <span :id="todo.id" :class="{ grey: todo.completed }"> {{todo.text | upperCase}}</span>         </li>
    </ul>
</template>

<script>
export default {
name: 'TodoList',
props: {
    todos: Array
},
directives:{
    red:{
        inserted: function(el){
            el.style.color = 'red'
        }
    }
},
filters: {
    upperCase: function (value) {
      return value.toUpperCase();
    }
  },
    computed: {
    sortItem () {
      let todos = this.todos.sort((a, b) => {
        return b.text.length - a.text.length
      })
      return todos
    }
  },
}
</script>

<style>

</style>
