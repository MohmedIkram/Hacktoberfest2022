<template>
    <main class="container cart">
        <h2>Cart</h2>
        <table v-if="cart.length">
            <thead>
                <tr>
                <th>Item</th>
                <th>Add Ons</th>
                <th>Amount</th>
                <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                <td>
                    {{item.item}}
                    <span v-if="item.options">- {{item.options}} </span>
                </td>
                <td><span v-for="addOn in item.addOns" :key="addOn" class="comma">{{addOn}}</span></td>
                <td>{{item.count}}</td>
                <td>{{item.combinedPrice}}</td>
                </tr>
                <tr>
                <td colspan="3"></td> 
                <td class="total">Total: ${{totalPrice.toFixed(2)}}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <h2>Cart is Empty</h2>
            <div class="center">
                    <AppEmptyCart/>
                    <nuxt-link to="/restaurant"><button class="primary">Fill it up!</button></nuxt-link>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import AppEmptyCart from '@/components/AppEmptyCart.vue';

export default {
    components: {
        AppEmptyCart
    },
    computed: {
        ...mapState([
            'cart',
        ]),
        ...mapGetters(
            ['totalPrice']
        )
    },
};
</script>

<style scoped>
.center{
    display: flex;
    flex-flow:column wrap ;
    justify-content: center;
    align-content: center;
}
</style>