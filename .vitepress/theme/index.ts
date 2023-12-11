// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import type { Theme } from 'vitepress';
import './style.css';

export default {
  Layout,
  NotFound,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
