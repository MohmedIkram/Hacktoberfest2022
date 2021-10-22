<template>
  <button v-on:click="onClick()" v-bind:style='{background:color}' class="btn">{{ text }}</button>
</template>


<script>
export default {
  name: 'Button',
  props: {
    text: "",
    color: "",
  },
  methods: {
    onClick() {
      this.$emit('toggle-form')
    }
  }
}
</script>