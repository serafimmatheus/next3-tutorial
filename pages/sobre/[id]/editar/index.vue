<template>
  <div>
    <h1>Editar {{ idParams }}</h1>

    <h5>preço: {{ formatacao }}</h5>

    <NuxtLink to="/">Home</NuxtLink>

    <NuxtLink to="/sobre">Sobre</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'vitrine',
  middleware: 'sobre',
})
const { formatacao } = useFormatacao(300)

const route = useRoute()
const idParams = computed(() => route.params.id)
</script>

<style lang="scss" scoped></style>
