<template>
  <UCarousel
    v-slot="{ item }"
    :items="products"
    :ui="{
      item: 'basis-1/4 px-1 py-1',
      container: 'flex gap-4',
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: 'start-2',
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: 'end-2',
    }"
    arrows
    class="w-full mx-auto"
  >
    <CardProduct :item="item" />
  </UCarousel>
</template>

<script setup lang="ts">
const { products } = defineProps<{
  products: {
    id: number
    titulo: string
  }[]
}>()
</script>
