<template>
  <header>
    <h1>{{title}}</h1>
    <Button v-on:toggle-form="$emit('toggle-form')" v-bind:text="showAddTask ? 'Close' : 'Add Task'" v-bind:color="showAddTask ? '#cc0000' : 'green'"/>
  </header>
</template>


<script>
import Button from './Button.vue'

export default {
  name:'Header',
  components: {
    Button,
  }, 
  props: {
    title: String,
    showAddTask: Boolean
  }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>