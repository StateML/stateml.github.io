<script setup>
import { computed } from "vue";

const props = defineProps({
  createdDate: { type: Object, required: true },
  updatedDate: { type: Number, required: false, default: undefined },
});

function sameDay(d1, d2) {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}

const isUpdated = computed(
  () =>
    props.updatedDate != undefined &&
    !sameDay(new Date(props.createdDate.time), new Date(props.updatedDate))
);

function formatUpdatedDate() {
  return new Date(props.updatedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getDateTime(time) {
  return new Date(time).toISOString();
}
</script>

<template>
  <dl
    class="
      flex flex-wrap
      column-gap-3
      text-sm
      leading-10
      font-medium
      text-gray-500
      whitespace-nowrap
    "
  >
    <div class="flex">
      <dt class="sr-only">Created</dt>
      <dd>
        <time :datetime="getDateTime(props.createdDate.time)">{{
          props.createdDate.string
        }}</time>
      </dd>
    </div>
    <div v-if="isUpdated" class="flex">
      (
      <dt>updated&nbsp;</dt>
      <dd>
        <time :datetime="getDateTime(props.updatedDate)">{{
          formatUpdatedDate()
        }}</time>
      </dd>
      )
    </div>
  </dl>
</template>
