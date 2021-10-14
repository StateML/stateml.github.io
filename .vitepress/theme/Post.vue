<script setup>
import Date from './Date.vue';
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import posts from '../metadata.json';

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
    <header class="mb-8">
      <Date :date="date" />
      <h1>{{ $frontmatter.title }}</h1>
      <dl class="flex text-sm font-medium leading-5 whitespace-nowrap">
        <dt class="sr-only">Name</dt>
        <dd class="text-gray-900">{{ $frontmatter.author }}</dd>
        <dt v-if="$frontmatter.twitter" class="sr-only">Twitter</dt>
        <dd v-if="$frontmatter.twitter">
          <span class="px-2">|</span>
          <a
            :href="'https://twitter.com/' + $frontmatter.twitter"
            target="_blank"
            rel="noopnener noreferrer"
            >{{ $frontmatter.twitter }}</a
          >
        </dd>
      </dl>
    </header>

    <Content />

    <footer>
      <div v-if="nextPost">
        <h2>Next Article</h2>
        <a :href="nextPost.href" class="p-2">{{ nextPost.title }}</a>
      </div>
      <div v-if="prevPost">
        <h2 class="text-xs tracking-wide uppercase text-gray-500">Previous Article</h2>
        <a :href="prevPost.href" class="p-2">{{ prevPost.title }}</a>
      </div>
      <a class="p-2" href="/blog">← Back to the blog</a>
    </footer>
  </article>
</template>
