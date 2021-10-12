<template>
    <div>
        <label :for="select">What {{select}} do u want?</label>
        <select @change="$emit('change', $event.target.value)" :id="select" :name="select">
            <option value>--- please a {{select}} </option>
            <option v-for="option in selectOption" :key="option" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            select: {
                type: String,
                default: "cuisine"
            },
            selectOption: {
                type: Array,
                default: () => ["tacos","pizza","dim sum"]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>