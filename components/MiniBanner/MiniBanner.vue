<template>
  <ul class="flex gap-8">
    <li
      class="rounded-lg overflow-hidden relative"
      v-for="banner in banners"
      :key="banner.id"
    >
      <img
        class="w-[330px] h-[310px]"
        :src="banner.img"
        alt="Imagem do produto"
      />

      <div class="absolute bottom-5 px-6">
        <h3 class="text-2xl font-bold">{{ banner.title }}</h3>
        <p class="text-[#889CD9]">{{ banner.description }}</p>
      </div>
    </li>
  </ul>
</template>

<script setup>
const banners = [
  {
    id: '1',
    img: 'https://placehold.it/310x330',
    title: 'Projetores',
    description: 'Preços especiais para empresas',
    link: '/categoria/projetores',
  },
  {
    id: '2',
    img: 'https://placehold.it/310x330',
    title: "SSD's",
    description: 'Preços especiais para empresas',
    link: '/categoria/ssd',
  },
  {
    id: '3',
    img: 'https://placehold.it/310x330',
    title: 'Impressoras',
    description: 'Preços especiais para empresas',
    link: '/categoria/impressoras',
  },
  {
    id: '4',
    img: 'https://placehold.it/310x330',
    title: 'Headsets',
    description: 'Preços especiais para empresas',
    link: '/categoria/headsets',
  },
]
</script>

<style lang="scss" scoped></style>
