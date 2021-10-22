<template>
  <div v-bind:class="['task',task.reminder ? 'reminder' : '']" v-on:dblclick="reminderToggler(task.id)">
    <h3>{{ task.text }} 
      <i v-on:click="getDeleteTaskId(task.id)" class="fa fa-times" ></i>
    </h3>
    <p>{{ task.day }}</p>

  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods: {
    getDeleteTaskId(id){
      this.$emit('delete-task', id)
    },
    reminderToggler(id){
      this.$emit('toggle-reminder', id)
    },
  },
}
</script>

<style scoped>

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  background: #51bd8bb2;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fa {
  color: red;
  margin-top: 10px;
}
</style>