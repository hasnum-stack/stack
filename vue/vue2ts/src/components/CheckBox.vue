<template>
    <div>
        <input type="checkbox" :checked="false" />
        <input type="text" :value="checked" @input="handleChange" />
        <!--  -->
    </div>
    <!-- : -->
</template>

<script>
    export default {
        model: {
            prop: 'checked',
            event: 'input',
        },
        props: {
            checked: {
                type: String,
            },
        },
        methods: {
            handleChange(val) {
                this.$emit('input', val.target.value);
            },
        },
    };
</script>

<style></style>
