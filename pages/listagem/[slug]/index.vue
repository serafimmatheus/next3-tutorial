<template>
  <main class="mt-6">
    <img
      class="rounded-lg mb-8 select-none"
      src="https://placehold.co/1340x240"
      alt="placeholder"
    />
    <div class="flex gap-8">
      <div class="max-w-xs w-full">
        <ul class="flex items-center gap-3">
          <li>
            <nuxt-link to="/" class="text-[#1F2D58] hover:underline text-sm">
              Página Inicial
            </nuxt-link>
          </li>
          <li class="text-[#6E6E6E] hover:underline text-sm">></li>
          <li>
            <nuxt-link
              :to="`/listagem/${$route.params.slug}`"
              class="text-[#6E6E6E] hover:underline text-sm"
            >
              {{ $route.params.slug }}
            </nuxt-link>
          </li>
        </ul>

        <h1 class="text-[#1F2D58] text-2xl font-bold my-8">
          {{ $route.params.slug }}
        </h1>

        <div
          class="flex items-center gap-2 bg-white rounded-lg border border-[#DFDFDF] p-4 mb-8"
        >
          <UToggle v-model="selected" />

          <p class="text-[#8E41F2]">Mostrar apenas disponíveis</p>
        </div>

        <div>
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">
              Centro de Distribuição
            </h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsCD" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">Marca compatível</h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsMarca" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">Cor</h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsCor" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">Tipo de célula</h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsTC" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">Voltagem</h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsVT" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">Capacidade</h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsCAP" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <div
            class="flex items-center justify-between pb-3 border-b border-[#DFDFDF]"
          >
            <h3 class="text-[#1F2D58] text-lg font-bold">
              Quantidade de células
            </h3>

            <p class="flex items-center gap-2 text-[#1F2D58]">
              Ver mais
              <IconDrop />
            </p>
          </div>

          <ul class="mt-3">
            <li v-for="(item, index) in itemsQC" :key="index">
              <UCheckbox
                :ui="{
                  base: 'w-4 h-4',
                  border: 'border border-[#DFDFDF] dark:border-[#DFDFDF]',
                  background: 'bg-white dark:bg-white',
                  label:
                    'text-base font-bold text-[#1F2D58] dark:text-[#1F2D58]',
                }"
                color="violet"
                :label="item.label"
                :model-value="selection.includes(item.label)"
                @update:model-value="
                  (value) => toggleSelection(item.label, value)
                "
              />
            </li>
          </ul>
        </div>

        <div class="mt-8">
          <img src="https://placehold.co/310x330" alt="placeholder" />
        </div>
      </div>

      <div class="flex-1">
        <div class="flex items-center gap-4 justify-between">
          <div>
            <h4 class="text-md text-[#6E6E6E]">Mostrando 49 resultados</h4>
          </div>

          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <p class="text-[#1F2D58] text-sm">Mostrar 18 por página</p>
              <IconDrop />
            </div>

            <div class="flex items-center gap-2">
              <p class="text-[#1F2D58] text-sm">Mais vendidos</p>
              <IconDrop />
            </div>
          </div>
        </div>

        <div class="mt-4 relative">
          <BoxDelivery />
        </div>

        <div class="mt-3 bg-white rounded-lg border border-[#DFDFDF] p-4">
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <h6 class="text-[#1F2D58] text-sm mr-4">Filtros ativos</h6>

              <div class="flex flex-wrap items-center gap-2">
                <UButton
                  :ui="{
                    padding: {
                      xl: 'py-1 px-3',
                    },
                  }"
                  color="violet"
                  variant="outline"
                  size="xl"
                  :key="item"
                  v-for="item in selection"
                >
                  {{ item }}
                  <IconClose @click="removeFilterItem(item)" />
                </UButton>
              </div>
            </div>

            <UButton
              color="violet"
              variant="ghost"
              size="sm"
              @click="removeAllFilters"
              >Limpar filtro</UButton
            >
          </div>
        </div>

        <div class="flex flex-wrap gap-3 mt-4 justify-between">
          <UCard
            :key="product.id"
            v-for="product in products?.products"
            :ui="{
              base: 'w-[280px]',
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
                  :alt="product.titulo"
                />
                <div
                  class="flex justify-between items-center absolute gap-2 top-2 left-2"
                >
                  <span
                    v-for="tags in product.tags"
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
                    :v-if="product.discount_percentage > 0"
                    class="rounded-lg py-1 px-2 text-xs text-white bg-green-500"
                    >{{ product.discount_percentage }}% OFF</span
                  >
                </div>
              </div>
            </template>

            <main class="select-none">
              <h3
                class="text-lg text-[#1F2D58] font-bold leading-6 min-h-[75px]"
              >
                {{ product.titulo }}
              </h3>

              <div class="space-x-2 mt-8">
                <span class="line-through text-sm text-[#6E6E6E]">{{
                  formatCurrency(product.preco_atual)
                }}</span>
                <strong class="text-lg text-[#1F2D58]">
                  {{ formatCurrency(product.preco_atual) }}
                </strong>
              </div>

              <div>
                <span class="text-sm text-[#6E6E6E]">
                  até {{ product.parcelas.quantidade }}x de
                  {{ formatCurrency(product.parcelas.valor) }} sem juros
                </span>
              </div>

              <div>
                <span class="text-lg text-[#8E41F2] font-bold">
                  {{ formatCurrency(product.preco_atual) }} via Pix
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
                  v-for="delivery in product.entrega"
                  class="text-sm text-[#6E6E6E] bg-slate-100 p-1 rounded-sm"
                >
                  {{ delivery }}
                </span>
              </div>
            </template>
          </UCard>
        </div>

        <div class="flex items-center justify-center pt-8">
          <UPagination v-model="page" :page-count="5" :total="items.length" />
        </div>
      </div>
    </div>

    <div class="mt-14">
      <img src="@/assets/avaliacoes.png" alt="avaliações do google" />
    </div>
  </main>
</template>

<script setup lang="ts">
interface Product {
  products: {
    id: number
    titulo: string
    preco_atual: number
    parcelas: Parcelas
    discount_percentage: number
    tags: string[]
    preco_pix: number
    entrega: string[]
    categoria: string
  }[]
}

export interface Parcelas {
  quantidade: number
  valor: number
}

const page = ref(1)
const items = ref(Array(100))

const selected = ref(false)
const selection = ref<string[]>([])

const itemsCD = [
  { label: 'Todos' },
  { label: 'São Paulo/SP' },
  { label: 'Betim/MG' },
  { label: 'Joinville/SC' },
]

const itemsMarca = [
  { label: 'Acer' },
  { label: 'Apple' },
  { label: 'Asus' },
  { label: 'CCE' },
  { label: 'Clevo' },
]

const itemsCor = [
  { label: 'Azul' },
  { label: 'Branco' },
  { label: 'Cinza' },
  { label: 'Prata' },
  { label: 'Preto' },
]

const itemsVT = [
  { label: '10.8 V' },
  { label: '10.95 V' },
  { label: '11.1 V' },
  { label: '11.25 V' },
  { label: '11.4 V' },
]

const itemsTC = [
  { label: 'Íons de lítio' },
  { label: 'Íons de lítio polímero' },
]

const itemsCAP = [
  { label: '12800 mAh' },
  { label: '1600 mAh' },
  { label: '2000 mAh' },
  { label: '2200 mAh' },
  { label: '2700 mAh' },
]

const itemsQC = [
  { label: '6 células' },
  { label: '9 células' },
  { label: '4 células' },
  { label: 'Lítio-Polímero' },
  { label: '3 células' },
]

const removeFilterItem = (item: any) => {
  selection.value = selection.value.filter((i) => i !== item)
}

const removeAllFilters = () => {
  selection.value = []
}

const toggleSelection = (label: any, isSelected: any) => {
  if (isSelected) {
    // Adiciona ao array de seleção
    selection.value.push(label)
  } else {
    // Remove do array de seleção
    selection.value = selection.value.filter((item) => item !== label)
  }
}

const { data: products } = useAsyncData<Product>(async () => {
  const [products] = await Promise.all([
    $fetch<Product>('http://localhost:3000/api/products'),
  ])

  return products
})

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
</script>
