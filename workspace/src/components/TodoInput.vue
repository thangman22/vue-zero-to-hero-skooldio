<template>
    <div class="input-group mb-3">
      <form @submit.prevent="addToData()">
        <input type="text" v-validate="'required'" name="todo" v-model="newTodo" class="form-control" placeholder="Type your todo" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <span>{{ errors.first('todo') }}</span>
        <div class="input-group-append">
            <button class="btn btn-success" type="submit">Add</button>
        </div>
        <Button @callbackOfbutton="addToData"></Button>
      </form>
    </div>
</template>

<script>
import LogMixins from './LogMixins'
import Button from './Button'
export default {
  name: "TodoInput",
  mixins:[LogMixins],
  data () {
      return {
            newTodo: '',
      }
  },
  props: {
      add: Function
  },
  methods: {
    addToData () {
        this.log()
        this.$emit('addItem', this.newTodo)
        // this.add(this.newTodo
    }
  }
}
</script>

<style>
</style>
