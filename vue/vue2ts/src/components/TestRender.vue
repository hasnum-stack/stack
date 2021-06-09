<template>
    <div>
        {{ random() }}
    </div>
</template>

<script>
    console.log(1234);
    export default {
        methods: {
            random() {
                console.log(Math.random());
                return Math.random();
            },
        },
    };
</script>

<style></style>
