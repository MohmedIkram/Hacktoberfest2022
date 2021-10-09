<template>
    <section class="restaurantinfo">
      <div v-for="store in dataSource" :key="store.id">
        <h2>{{store.name}}</h2>
        <p>Delivery Time : {{store.deliveryTime}}</p>
        <p>Rating : {{store.rating}}</p>
        <p v-if="store.freeDelivery" class="label">
          <span>Free delivery</span>
        </p>

        <div class="row">
          <div v-for="menuItem in store.menu"
              :key="menuItem.id"
               class="items"
               :style="`background : url(${menuItem.img}) no-repeat center center `"
          >
            <div class="iteminfo">
              <div>
                <h4>
                  {{menuItem.item}}
                </h4>
                <p>
                  {{priceFormatting(menuItem.price)}}
                </p>
                <nuxt-link :to="`/item/${menuItem.id}`">
                  <button class="ghost">
                      View Item
                  </button>
                </nuxt-link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: [Array,Object],
    },
  },
  name: "AppRestaurantInfo",
  methods : {
    priceFormatting(item){
      return '$' + item.toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
