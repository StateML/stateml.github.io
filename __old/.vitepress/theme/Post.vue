<script setup>
import Date from './Date.vue';
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { posts } from './posts';
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
      <Date :created-date="date" :updated-date="route.data.lastUpdated" />
      <h1 class="!m-0">{{ $frontmatter.title }}</h1>
      <dl class="flex text-sm font-medium leading-5 whitespace-nowrap">
        <dt class="sr-only">Name</dt>
        <dd class="text-gray-900 whitespace-nowrap">{{ $frontmatter.author }}</dd>
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

    <Content class="mb-10" />

    <footer>
      <div class="flex mb-8">
        <div v-if="prevPost" class="flex-1 max-w-xs">
          <h2 class="text-gray-500 !text-sm">Previous Article</h2>
          <a :href="prevPost.href">{{ prevPost.title }}</a>
        </div>
        <div v-if="nextPost && prevPost" class="mx-4 border border-gray-200"></div>
        <div v-if="nextPost" :class="prevPost ? 'text-right' : ''" class="flex-1 max-w-xs">
          <h2 class="text-gray-500 !text-sm">Next Article</h2>
          <a :href="nextPost.href">{{ nextPost.title }}</a>
        </div>
      </div>
      <a class="p-2" href="/essays">← Back to the essays</a>
    </footer>
  </article>
</template>
