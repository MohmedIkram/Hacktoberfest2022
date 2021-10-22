<template>
  <div v-bind:key="task.id" v-for="task in tasks">
    <Task v-on:delete-task="$emit('delete-task', task.id)" v-on:toggle-reminder="$emit('toggle-reminder', task.id)" v-bind:task="task" />
  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task','toggle-reminder']
  
}
</script>