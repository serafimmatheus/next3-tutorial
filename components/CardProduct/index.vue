<template>
  <UCard
    :key="item.id"
    :ui="{
      base: 'w-[320px]',
      background: 'bg-white dark:bg-white',
      divide: 'divide-y divide-[#DFDFDF] dark:divide-[#DFDFDF]',
      ring: 'ring-1 ring-[#DFDFDF] dark:ring-[#DFDFDF]',
      body: {
        padding: 'px-4 py-5 sm:p-6',
      },
      header: { padding: 'sm:px-0 py-0 px-0' },
    }"
  >
    <template #header>
      <div class="relative">
        <img
          class="p-0 select-none w-full overflow-hidden object-cover"
          src="https://placehold.co/310x210"
          :alt="item.titulo"
          width="310"
          height="210"
        />

        <div
          class="flex justify-between items-center absolute gap-2 top-2 left-2"
        >
          <span
            v-for="tags in item.tags"
            :key="tags"
            :class="{
              'bg-white text-[#8E41F2] rounded-lg py-1 px-2 text-xs':
                tags === 'Novo',

              'bg-[#8E41F2] text-white rounded-lg py-1 px-2 text-xs':
                tags === 'Novidade',

              'bg-[#F2C94C] text-white rounded-lg py-1 px-2 text-xs':
                tags === 'Usado',
            }"
          >
            {{ tags }}
          </span>
          <span
            :v-if="item.discount_percentage > 0"
            class="rounded-lg py-1 px-2 text-xs text-white bg-green-500"
            >{{ item.discount_percentage }}% OFF</span
          >
        </div>
      </div>
    </template>

    <main class="select-none">
      <h3 class="text-lg text-[#1F2D58] font-bold leading-6 min-h-[75px]">
        {{ item.titulo }}
      </h3>

      <div class="space-x-2 mt-8">
        <span class="line-through text-sm text-[#6E6E6E]">{{
          formatCurrency(item.preco_atual)
        }}</span>
        <strong class="text-lg text-[#1F2D58]">
          {{ formatCurrency(item.preco_atual) }}
        </strong>
      </div>

      <div>
        <span class="text-sm text-[#6E6E6E]">
          até {{ item.parcelas.quantidade }}x de
          {{ formatCurrency(item.parcelas.valor) }} sem juros
        </span>
      </div>

      <div>
        <span class="text-lg text-[#8E41F2] font-bold">
          {{ formatCurrency(item.preco_pix) }} via Pix
        </span>
      </div>
    </main>

    <template #footer>
      <h4 class="flex gap-1 text-xs text-[#6E6E6E]">
        <IconBoxDelivery />
        Entregue por
      </h4>

      <div class="flex items-center gap-2 mt-2">
        <span
          :key="delivery"
          v-for="delivery in item.entrega"
          class="text-sm text-[#6E6E6E] bg-slate-100 p-1 rounded-sm"
        >
          {{ delivery }}
        </span>
      </div>

      <div>
        <NuxtLink
          :to="`/produto/${item.id}`"
          class="text-blue-500 hover:underline mt-4 inline-block"
        >
          Voltar
        </NuxtLink>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const { item } = defineProps<{
  item: {
    id: number
    titulo: string
    preco_atual: number
    preco_pix: number
    parcelas: {
      quantidade: number
      valor: number
    }
    tags: string[]
    entrega: string[]
    discount_percentage: number
  }
}>()

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
</script>
