<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>
      Restaurant 
    </h1>
    <AppSelect @change="selectedRestaurant = $event" />
    </div>
    <AppRestaurantInfo :dataSource="filteredRestaurant"/>
  </main>
</template>

<script>
import AppSelect from '@/components/AppSelect.vue';
import AppRestaurantInfo from "../components/AppRestaurantInfo";
import { mapState } from 'vuex';

export default {
name: "restaurant",
  components:{
    AppRestaurantInfo,
    AppSelect
  },
  data() {
    return {
      selectedRestaurant : ""
    }
  },
  computed : {
    ...mapState([
      'fooddata'
    ]),
    filteredRestaurant() {
        if(this.selectedRestaurant){
          return this.fooddata.filter(el => {
            let name = el.name.toLowerCase();
            return name.includes(this.selectedRestaurant);
          })
        }
        return this.fooddata
    },
  } 
}
</script>

<style scoped>

</style>
