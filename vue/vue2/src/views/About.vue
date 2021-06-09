<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <span>{{ item.obj1 && item.obj1.test1 }}</span>
      <span>{{ item.obj1 && item.obj1.test2 }}</span>
      <hr />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [],
        test0: {},
      };
    },
    created() {
      this.test0.a = {};
      this.$set(this.test0, 'a', { a: 123 });
      console.log(this.test0);
      // console.log(this.test0);
      // console.log(this.list);
      setTimeout(() => {
        this.list = [
          {
            check: false,
            obj1: {
              test1: true,
            },
          },
          {
            check: false,
            obj1: {
              test1: true,
            },
          },
        ];
      }, 500);

      setTimeout(() => {
        this.list.forEach(item => {
          // this.$set(item.obj1, 'test1', false);
          // item.obj1 = {
          //   test1: false,
          // };
          // this.$set(item, 'obj1', { test1: false });
          // item.obj1.test2 = false;
          this.$set(item.obj1, 'test2', false);
          // item.obj1.test2 = false;
        });
        console.log(this.list);
      }, 1000);
    },
  };
</script>
