<template>
  <div>
    <h1>Sobre</h1>

    <section>
      <h2>Produtos</h2>

      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="product.url" alt="Imagem do produto" />
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <p>R$ {{ product.price }}</p>
          <p>{{ product.createdAt }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'vitrine',
})

const products = [
  {
    id: 1,
    title: 'Teclado Mecânico',
    description: 'Teclado Mecânico RGB ABNT2 Switch Cherry MX Red',
    url: 'https://placehold.co/300x300',
    price: 100,
    createdAt: '2021-01-01',
  },
  {
    id: 2,
    title: 'Mouse Gamer',
    description: 'Mouse Gamer',
    url: 'https://placehold.co/300x300',
    price: 200,
    createdAt: '2021-01-02',
  },
  {
    id: 3,
    title: 'Monitor 144hz',
    description: 'Monitor 144hz 1ms',
    url: 'https://placehold.co/300x300',
    price: 300,
    createdAt: '2021-01-03',
  },
]
</script>
