import { defineConfig } from 'umi';
import path from 'path';
export default defineConfig({
  routes: [
    // { path: '/', component: path.resolve(__dirname, './src/pages/home/index.tsx') },
    { path: '/a', component: 'home/index.tsx' },
    { path: '/test-:id', component: 'test/index.tsx' },
  ],
  fastRefresh: true,
});
