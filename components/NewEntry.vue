<script setup lang="ts">
import { ref } from 'vue';

const config = useRuntimeConfig();

const formData = ref({
  title: '',
  body: '',
  bookname: '',
  pagenumber: '',
  author: ''
});

const submitForm = async () => {
  const { data: responseData } = await useFetch(config.public.bookendApi, {
    method: 'post',
    body: {
      title: formData.value.title,
      body: formData.value.body,
      bookname: formData.value.bookname,
      pagenumber: formData.value.pagenumber,
      author: formData.value.author
    }
  });

  console.log('response', responseData);

  formData.value.title = '';
  formData.value.body = '';
  formData.value.bookname = '';
  formData.value.pagenumber = '';
  formData.value.author = '';
};
</script>

<template>
  <div>
    <form class="flex flex-col gap-3" @submit.prevent="submitForm">
      <div>
        <label class="text-secondary text-md mr-4" for="EntryTitle">Entry Title:</label>
        <input
          class="text-black p-1 border border-transparent bg-transparent rounded transition-all ease-in focus:border-warning"
          type="text"
          v-model="formData.title"
          id="title"
          placeholder="be creative.."
        />
      </div>
      <div class="flex flex-row items-center">
        <label class="text-secondary text-md mr-4" for="EntryTitle">Thoughts:</label>
        <textarea
          class="resize-none w-full sm:w-1/3 text-black p-1 border border-transparent bg-transparent rounded transition-all ease-in focus:border-warning"
          v-model="formData.body"
          id="title"
          placeholder="what do you want to remember.."
        />
      </div>
      <div>
        <label class="text-secondary text-md mr-4" for="EntryTitle">Book:</label>
        <input
          class="text-black p-1 border border-transparent bg-transparent rounded transition-all ease-in focus:border-warning"
          type="text"
          v-model="formData.bookname"
          id="title"
          placeholder="be creative.."
        />
      </div>
      <div>
        <label class="text-secondary text-md mr-4" for="EntryTitle">Page:</label>
        <input
          class="text-black p-1 border border-transparent bg-transparent rounded transition-all ease-in focus:border-warning"
          type="text"
          v-model="formData.pagenumber"
          id="title"
          placeholder="be creative.."
        />
      </div>
      <div>
        <label class="text-secondary text-md mr-4" for="EntryTitle">Book Author:</label>
        <input
          class="text-black p-1 border border-transparent bg-transparent rounded transition-all ease-in focus:border-warning"
          type="text"
          v-model="formData.author"
          id="title"
          placeholder="be creative.."
        />
      </div>
      <div class="mt-4">
        <button
          class="bg-transparent px-4 py-1 text-warning border border-warning rounded transition-all ease-in-out hover:bg-warning hover:bg-opacity-20 active:bg-secondary active:bg-opacity-40"
          type="submit"
        >
          Send Off
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
