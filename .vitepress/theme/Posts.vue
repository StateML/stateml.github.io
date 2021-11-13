<script setup>
import Date from "./Date.vue";
import posts from "../metadata.json";
</script>

<template>
  <div>
    <div class="divide-y divide-gray-200">
      <div class="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1
          class="
            text-3xl
            leading-9
            font-extrabold
            text-gray-900
            dark:text-gray-400
            tracking-tight
            sm:text-4xl sm:leading-10
            md:text-6xl md:leading-14
          "
        >
          {{ $frontmatter.title }}
        </h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-500">
          {{ $frontmatter.subtitle }}
        </p>
      </div>
    </div>
    <ul class="divide-y divide-gray-200">
      <li class="py-12" v-for="{ title, href, date, tags, excerpt } of posts">
        <article
          class="
            space-y-2
            xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline
          "
        >
          <Date :created-date="date" />
          <div class="space-y-3 xl:col-span-3">
            <h2 class="text-xl leading-8 font-semibold tracking-tight">
              <a
                class="text-gray-900 no-underline dark:text-gray-400"
                :href="href"
                >{{ title }}</a
              >
            </h2>
            <div v-if="tags" class="flex flex-wrap items-center gap-3">
              <div
                v-for="tag in tags"
                :key="tag"
                class="px-1 rounded bg-gray-200 text-black dark:text-gray-400"
              >
                {{ tag }}
              </div>
            </div>
            <div class="text-base leading-6 font-normal dark:text-gray-300">
              <a class="link" aria-label="read more" :href="href"
                >Read more →</a
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
