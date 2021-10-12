<template>
    <div>
        <fieldset>
            <legend><h3>{{label}}</h3></legend>
            <div v-for="set in sets" :key="set">
                <input :type="inputType" :name="set" v-model="selectedValues" :value="set" >
                <label :for="set">{{set}}</label>
            </div>
        </fieldset>
    </div>
</template>
<script>
    export default {
        props: {
            sets: {
                type: Array,
                default :[]
            },
            label : {
                type: String,
                default:'fields'
            },
            inputType : {
                type : String,
                default : 'checkbox'
            }
        },
        data(){
          return{
            selectedValues : [] || ""
          }
        },
        watch : {
          selectedValues(newValue){
            this.$emit(this.label,newValue);
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>
