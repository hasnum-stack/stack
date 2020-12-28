<template>
    <div class="about">
        <h1>This is an about page</h1>
        <RelationGraph></RelationGraph>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue';
    import Components from 'vue-class-component';
    import RelationGraph from '@/components/RelationGraph.vue';
    @Components({
        components: {
            RelationGraph,
        },
    })
    export default class About extends Vue {}
</script>
