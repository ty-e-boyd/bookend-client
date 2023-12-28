<template>
  <div class="p-4">
    <p class="text-primary text-3xl">Bookend</p>
    <p class="text-primary text-xl">Collect and Reminiscence</p>
    <slot />
  </div>
</template>

<style>
p,
a,
h1,
h2,
h3,
h4,
h5,
h6,
span,
button {
  font-family: 'Nanum Gothic', sans-serif;
}

html,
body {
  background-color: #eee0cb;
}

textarea,
input {
  outline: none;
}
</style>
