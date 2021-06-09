<template>
    <div>
        <el-button>213</el-button>
        <div>{{ test }}</div>
        <button @click="addNumber">+</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component, { mixins } from 'vue-class-component';
    import { Pages } from '@/mixins/pages';

    @Component({})
    export default class extends mixins(Pages) {
        public test: number = 123213213213;
        /**
         * addNumber
         */
        public addNumber(): void {
            console.log('🚀  ~ extends ~ addNumber ~ this', this);
            this.test++;
        }
    }

    // import { Vue, Component } from 'vue-property-decorator';
    // export default Vue.extend({});
</script>
