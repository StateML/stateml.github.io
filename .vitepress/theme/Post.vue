<script setup>
import Date from './Date.vue';
import { computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import posts from '../metadata.json';

const { frontmatter: data } = useData();
const route = useRoute();
function findCurrentIndex() {
  return posts.findIndex((p) => p.href === route.path);
}
// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date);
const nextPost = computed(() => posts[findCurrentIndex() - 1]);
const prevPost = computed(() => posts[findCurrentIndex() + 1]);
</script>

<template>
  <article class="prose">
    <header>
      <h1>{{ data.title }}</h1>
      <Date :date="date" />
    </header>

    <Content />

    <footer>
      <div v-if="nextPost">
        <h2>Next Article</h2>
        <a :href="nextPost.href">{{ nextPost.title }}</a>
      </div>
      <div v-if="prevPost">
        <h2 class="text-xs tracking-wide uppercase text-gray-500">Previous Article</h2>
        <a :href="prevPost.href">{{ prevPost.title }}</a>
      </div>
      <a class="link" href="/">← Back to the blog</a>
    </footer>
  </article>
</template>
