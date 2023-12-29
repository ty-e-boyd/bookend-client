<script setup lang="ts">
import { ref } from 'vue';

interface Entry {
  Title: string;
  Body: string;
  Author: string;
  BookName: string;
  PageNumber: string;
}

interface ResponseObject {
  data: Entry[];
}

const config = useRuntimeConfig();

const entries = ref<Entry[]>([]);

const loadEntries = async () => {
  const { data: responseData } = await useFetch<ResponseObject>(config.public.bookendApi, {
    method: 'get'
  });

  console.log('response', responseData.value);

  entries.value = [...responseData.value.data];
};
</script>

<template>
  <button
    class="mb-5 bg-transparent px-4 py-1 text-warning border border-warning rounded transition-all ease-in-out hover:bg-warning hover:bg-opacity-20 active:bg-secondary active:bg-opacity-40"
    @click="loadEntries"
  >
    Load Entries
  </button>
  <div v-if="entries.length > 0" v-for="entry in entries" class="p-4 border border-warning rounded my-4">
    <p class="text-black">{{ entry.Title }}</p>
    <p class="text-black">{{ entry.Body }}</p>
    <p class="text-black">{{ `Page ${entry.PageNumber} in ${entry.BookName}, written by ${entry.Author}` }}</p>
  </div>
</template>

<style scoped></style>
