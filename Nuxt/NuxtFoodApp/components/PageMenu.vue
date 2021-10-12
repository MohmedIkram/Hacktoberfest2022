<template>
    <nav>
      <ul>
        <li><nuxt-link exact to="/"><AppLogo/></nuxt-link></li>
        <li><nuxt-link exact to="/restaurant">Resturant Info</nuxt-link></li>
      </ul>
      <nuxt-link to="/cart">
          Cart
        <span v-if="cartItemCount" class="smallnum">{{cartItemCount}}</span>
      </nuxt-link>
    </nav>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
import { mapGetters } from 'vuex';

export default {
  computed: { 
    ...mapGetters([
      'cartItemCount',
    ])
  },
  components: {
    AppLogo
  },
  name: "PageMenu"
};
</script>

<style scoped>

</style>
