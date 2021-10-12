<template>
  <main class="container">
    <AppHeader/>
    <AppRestaurantInfo :dataSource="fooddata"/>
    <h3>Hi from Home page</h3>
  </main>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppRestaurantInfo from "../components/AppRestaurantInfo";
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
  components : {
    AppHeader,
    AppRestaurantInfo
  }
}
</script>

<style>
</style>
