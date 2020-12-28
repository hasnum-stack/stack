<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div class="content">
            <div id="slidebar">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
                <TestHeader></TestHeader>
            </div>
            <div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TestHeader from '@/components/TestHeader.vue';
    @Component({
        components: {
            TestHeader,
        },
    })
    export default class App extends Vue {}
</script>

<style scoped></style>
