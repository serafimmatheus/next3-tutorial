<template>
  <div>
    <h1>Clientes</h1>

    <p class="text-black">
      {{ pending }}
    </p>

    <!-- <div>
      <span class="text-green-400" v-if="pending">Carregando...</span>
      <span v-else-if="error">Erro ao carregar os dados</span>

      <UTable :rows="clients.data" v-else />
    </div> -->
  </div>
</template>

<script setup>
// const {
//   data: clients,
//   status,
//   pending,
//   error,
// } = useLazyFetch('https://reqres.in/api/users?delay=3', {
//   transform: (data) =>
//     data.data.map((client) => ({
//       id: client.id,
//     })),
// pick: ['data'],
//   query: {
//     page: 1,
//     per_page: 10,
//   },
//   cache: true,
// })

const { data: clients, pending } = await useAsyncData(
  'clients',
  async () => {
    const [pessoas, aleatorios] = await Promise.all([
      $fetch('https://reqres.in/api/users?delay=3'),
      $fetch('https://reqres.in/api/unknown'),
    ])

    return {
      pessoas,
      aleatorios,
    }
  },
  {
    cache: true,
    refreshInterval: 10000,
  }
)

useHead({
  title: 'Clientes',
  meta: [
    {
      name: 'description',
      content: 'Lista de clientes',
    },
  ],
})
</script>
