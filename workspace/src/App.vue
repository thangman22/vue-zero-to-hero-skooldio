<template>
  <div class="container">
    <Header>
      <template slot="title">Todos</template>
      <template slot="subTitle">My todo</template>
    </Header>
    <TodoList :todos="todosItem" />
    <TodoInput @addItem="add"/> 
  </div>
</template>
<script>
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import Header from './components/Header'
export default {
    data() {
    return {
      todosItem:[
          
      ]
    }
  },
  components: {TodoList,TodoInput,Header},
  mounted () {
    // Use axios here this.$http.get()
    this.todos = this.getLocalstorage('todo')
  },
  name: 'app',
  methods: {
    getLocalstorage(key) {
      return JSON.parse(localStorage[key])
    },
    setLocalstorage(key, value) {
      localStorage[key] = JSON.stringify(value);
      return true;
    },
    async add(newTodo) {
        this.todosItem.push({
          text: newTodo,
          completed: false,
          time: Date.now(),
          id: Date.now()
        });
        this.setLocalstorage("todo", this.todosItem);
    }
  }
}
</script>
<style scoped>
.grey {
  color:gray;
}
</style>


