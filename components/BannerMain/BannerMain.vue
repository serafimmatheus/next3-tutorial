<template>
  <div class="relative">
    <img src="@/assets/banner-principal.png" alt="Banner" />

    <section class="absolute top-0 px-12 py-6">
      <div class="">
        <h2 class="text-[#1F2D58] text-5xl font-bold">
          Produtos para notebook
        </h2>
        <p class="text-[#6E6E6E]">
          Busque por categoria, marca ou modelo entre
          <strong class="text-[#8E41F2]">mais de 200.000 produtos.</strong>
        </p>
      </div>
      <form class="mt-6">
        <div class="flex">
          <USelect v-model="country" :options="countries" />
          <USelect v-model="city" :options="citys" />
          <USelect v-model="state" :options="states" />
          <UButton
            color="violet"
            icon="i-heroicons-arrow-right"
            size="sm"
            square
            variant="solid"
          />
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const countries = ['United States', 'Canada', 'Mexico']
const citys = ['New York', 'Los Angeles', 'Chicago']
const states = ['California', 'Florida', 'Texas']

const country = ref(countries[0])
const city = ref(citys[0])
const state = ref(states[0])
</script>
