<template>
    <div>
        <div class="container item">
            <div class="menu-container">
                <section :style="`background : url(../${currentItem.img}) no-repeat center center `"
                class="img-div">
                </section>
                <section class="right-div">
                    <div class="action-side">
                        <h2 class="name">{{currentItem.item}}</h2>
                        <h3 class="price">Price : {{priceFormatting(currentItem.price)}}</h3>
                        <div>
                            <input class="countInput" v-model="count" type="number" min="1" name="search" id="search">
                            <button @click="addToCart" type="submit">Add to cart - {{priceFormatting(cummulatedPrice)}}</button>
                        </div>
                    </div>
                    <div>
                        <AppFieldSet v-if="currentItem.addOns" :sets="currentItem.addOns" label="addOns" @addOns="updateAddOns"/>
                        <AppFieldSet v-if="currentItem.options" inputType="radio" :sets="currentItem.options" label="options" @options="updateOptions" />
                    </div>
                    <AppToast v-if="cartSubmitted">
                        Order submitted <br>
                        check out more link <nuxt-link to="/restaurant">restaurant</nuxt-link>
                    </AppToast>
                </section>
                <section class="bottom-div">
                    <h3>Description</h3>
                    <p>{{currentItem.description}}</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

import AppFieldSet from '@/components/AppFieldSet.vue';
import { mapState } from 'vuex';
import AppToast from '@/components/AppToast.vue';
export default {
    components: {
        AppFieldSet,
        AppToast
    },
    data(){
        return {
            id : this.$route.params.id,
            count : 1,
            selectedAddOns : [],
            selectedOptions : '',
            cartSubmitted : false
        }
    },
    computed: {
        ...mapState([
            'fooddata',
        ]),
        currentItem() {
            let result;
            for(let i = 0; i < this.fooddata.length; i++){
                for(let j = 0; j < this.fooddata[i].menu.length; j++){
                    if(this.fooddata[i].menu[j].id === this.id){
                        result = this.fooddata[i].menu[j];
                        break;
                    }
                }
            }
            return result;
        },
        cummulatedPrice() {
            return this.currentItem.price * this.count
        }
    },
    methods: {
            priceFormatting(item){
                return '$' + item.toFixed(2);
            },
            updateAddOns(value){
              this.selectedAddOns = value;
            },
            updateOptions(value){
              this.selectedOptions = value;
            },
            addToCart(){
              let FormData = {
                item : this.currentItem.item,
                count : this.count,
                options: this.selectedOptions,
                addOns : this.selectedAddOns,
                combinedPrice : this.cummulatedPrice
              };
              console.log(FormData);
              this.$store.commit('addToCart', FormData);
              this.cartSubmitted = true;
            }
    }

}
</script>

<style lang="scss" scoped>

.container.item{
    display: flex;
    flex-flow:  column;
    padding: 40px;
    justify-content: center;
    height: 650px;
}
.menu-container {
    width: 1000px;
    margin: auto;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 3fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 10px;
}

.img-div {
    width: 100%;
    height: 100%;
    grid-area: 1 / 1 / 2 / 2;
    // background-color: rgba($color: #000000, $alpha: .2);
}
.action-side >.price , .action-side>.name{
        padding: 10px 0px
}
.right-div {
    grid-area: 1 / 2 / 3 / 3;
    // background-color: rgba($color: red, $alpha: .2);
}
.bottom-div {
    padding: 20px 0px;
    grid-area: 2 / 1 / 3 / 2;
    // background-color: rgba($color: pink, $alpha: .3);
}
.countInput{
    padding: 10px;
    width: 50x;
}
.countInput:active{
    border: black solid;
}
</style>
