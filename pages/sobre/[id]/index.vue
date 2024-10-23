<template>
  <div>
    <h1>Sobre {{ $route.params.id }}</h1>

    <NuxtLink to="/">Home</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'vitrine',
  middleware: 'sobre',
})
</script>

<style lang="scss" scoped></style>
