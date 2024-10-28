<template>
  <main>
    <ul class="flex items-center gap-5 mt-4 mb-6">
        <li class="text-[#1F2D58] text-sm">
            <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="-rotate-90">
            <IconDrop />
        </li>
        <li class="text-[#6E6E6E] text-sm">
            <nuxt-link :to="`/produtos/${$route.params.slug}`"">{{ $route.params.slug }}</nuxt-link>
        </li>
    </ul>

    <div class="relative">
       <BoxDelivery />
    </div>

    <div class="grid grid-cols-5 mt-7">
      <div class="col-span-3">
        <div>
          <img src="https://placehold.co/700x700" alt="placeholder" />
        </div>
      </div>

      <div class="col-span-2">
        <div>
            <h1 class="text-[#1F2D58] text-3xl font-bold">{{ product?.titulo }}</h1>
        </div>

        <div class="py-3 border-b border-t border-[#DFDFDF] mt-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span class="text-[#6E6E6E] text-sm">SKU#:</span>
                <span class="text-[#6E6E6E] text-sm">AC050-GE-0001</span>
            </div>

            <div class="flex items-center gap-2">
              <img width="80" height="16" src="@/assets/Stars.png" alt="stars">
              <span class="text-[#1F2D58] text-sm">4.5 em 479 opiniões</span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-[#1F2D58] text-sm">Ver descrição</span>
            </div>
        </div>

        <div class="grid grid-cols-2 py-4 border-b border-[#DFDFDF] gap-4">
          <div class="col-span-1">
            <label for="resolution" class="text-[#1F2D58] text-sm font-bold">
              Resolução da tela
            </label>
            <USelect size="xl" id="resolution" v-model="resolutions" :options="resolutionScreens" />
          </div>

          <div class="col-span-1">
            <label for="screenSurfaces" class="text-[#1F2D58] text-sm font-bold">
              Superficie da tela
            </label>
            <USelect size="xl" id="screenSurfaces" v-model="surfaces" :options="ScreenSurfaces" />
          </div>
        </div>

        <div class="py-4 border-b border-[#DFDFDF] flex flex-col gap-4">
          <div v-for="entrega in product?.entrega" class="bg-white rounded-lg border shadow p-4">
            <div class="flex items-center gap-2 justify-between border-b border-[#DFDFDF] pb-4">
              <div class="flex items-center gap-2">
                <p class="flex gap-1 text-[#6E6E6E] text-xs">
                <IconBoxDelivery /> entregue por
                </p>
  
                <p class="text-[#8E41F2] text-base font-bold">{{ entrega }}</p>
                
                <span class="text-white bg-[#42CB8A] rounded text-[10px] font-bold py-1 px-1.5">15% OFF</span>
              </div>

              <div class="flex items-center gap-5">
                <div class="flex flex-col">
                  <span class="text-[#6E6E6E] text-xs">IPI</span>
                  <p class="text-[#1F2D58] text-xs">0,00%</p>
                </div>

                <div class="flex flex-col">
                  <span class="text-[#6E6E6E] text-xs">ICMS</span>
                  <p class="text-[#1F2D58] text-xs">12,00%</p>
                </div>
              </div>
            </div>


            <div class="pt-3 flex items-center gap-4 justify-between">
             <div class="flex items-center gap-4">
              <div>
                <div class="flex items-center gap-1">
                  <span class="text-xs text-[#6E6E6E]">de</span>
                  <p class="text-xs text-[#6E6E6E] line-through">
                    {{ 
                      formatCurrency(product?.preco_atual || 0) 
                    }}
                  </p>
                  <span class="text-xs text-[#6E6E6E]">por</span>

                </div>

                <p class="text-[#1F2D58] font-bold">
                  {{ formatCurrency(product?.preco_atual || 0)  }}
                </p>
              </div>

              <div class="flex flex-col">
                <p class="text-xs text-[#6E6E6E]">a vista no Pix</p>
                <p class="text-[#1F2D58] font-bold">
                  {{ formatPricePercentage() }}
                </p>
                
              </div>
             </div>

             <div class="flex gap-2 items-center">
              <div class="flex items-center bg-[#DFDFDF] rounded border border-[#DFDFDF]">
                <UButton 
                :ui="{
                  base: 'border-0',
                }"
                size="xl" variant="ghost" color="purple"
                @click="remove"
                >
                  -
                </UButton>

                <UInput :ui="{
                  base: 'border-0 w-7',
                }" color="white" placeholder="black" size="xs" v-model="value" />

                <UButton 
                :ui="{
                  base: 'border-0',
                }"
                size="xl" variant="ghost" color="purple"
                @click="addMore"
                >
                  +
                </UButton>
              </div>

              <div class="flex flex-col bg-white border border-[#DFDFDF] rounded px-2 py-0.5">
                <p class="text-xs text-[#6E6E6E]">Total</p>
                <span class="text-[#1F2D58] font-bold">
                  {{ formatCurrency(total) }}
                </span>
              </div>
             </div>
            </div>
          </div>
        </div>

        <div class="py-4 border-b border-[#DFDFDF]">
          <div class="flex items-center justify-between pb-4">
            <h4 class="text-[#1F2D58] text-sm underline">Formas de pagamento</h4>
            
            <p class="text-[#1F2D58] text-sm underline">Ver parcelas</p>
          </div>

          <div class="w-full">
            <UButton
            :ui="{
              base: 'w-full h-[52px] flex items-center justify-center border border-[#4BB8F6]',
              color: {
                white: {
                  ghost: 'bg-white text-[#4BB8F6] dark:bg-white dark:text-[#4BB8F6] font-bold dark:font-bold',
                }
              }
            }"
            color="white"
            variant="ghost"
            label="Adicionar ao carrinho" />
          </div>

          <div class="mt-4 w-full">
            <UButton  
            :ui="{
              base: 'w-full h-[52px] flex items-center justify-center border border-[#4BB8F6] shadow border-b-2',
              color: {
                white: {
                  ghost: 'bg-[#4BB8F6] text-white dark:bg-[#4BB8F6] dark:text-white font-bold dark:font-bold',
                }
              }
            }"
            color="white"
            variant="ghost"
             label="Comprar agora" />
          </div>
        </div>

        <div class="py-4">
          <div class="flex items-center justify-between">
            <h4 class="text-[#1F2D58] text-sm font-bold pb-1">Calcular frete e prazo</h4>
          </div>

          <div class="w-full border border-[#D9D9D9] rounded p-4 flex items-center justify-between bg-white">
              <p class="text-[#6E6E6E] text-sm">Selecione uma opção</p>
              <p class="text-[#1F2D58] text-sm">Calcular</p>
          </div>

          <div class="flex items-center justify-between pt-2">
            <h6 class="text-[#1F2D58] text-sm underline">Não sei meu CEP</h6>
          </div>
        </div>  
      </div>
    </div>

    <div class="mt-24">
      <UTabs :items="items" :default-index="1" />
    </div>

    <div class="mt-24">
      <div>
        <h4 class="font-bold text-3xl text-[#1F2D58]">
          Veja esses também
        </h4>
        <p class="text-[#6E6E6E]">Recém chegados</p>
      </div>

      <div class="flex gap-5">
        <CardProduct v-for="product in products?.products.slice(0, 4)" :key="product.id" :item="product" />
      </div>
    </div>

    <div class="mt-24">
     <img src="@/assets/avaliacoes.png" alt="Avaliações google">
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'



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

const items = [{
  label: 'Informações gerais',
  icon: '',
  content: 'H-Stane Hardcore é o novo PH da Dynamic Formulas, com a a forma potencializada do H-Stane ficando ainda mais forte, ganhos maiores e duradouros. Sua formulação promove uma redução significativa do percentual de gordura, além do aumento de força e densidade muscular, podendo chegar a 8kg de massa muscular magra no final do ciclo.'
}, {
  label: 'Especificações técnicas',
  icon: '',
  content: 'Para homens, é recomendado a ingestão de duas cápsulas por dia: uma pela manhã e a segunda 12 horas depois de consumir a primeira, de preferência com um shake proteico de alto índice glicêmico. De forma alguma se pode ultrapassar a dosagem, devendo ser consumido sem interrupções pelo período de 30 dias. Para mulheres, aconselha-se apenas uma cápsula por dia. Depois que o tratamento for encerrado, é indicado aguardar ao menos 90 dias para começar a usar o suplemento novamente. O produto não deve ser consumido por gestantes, tampouco lactantes ou menores de 18 anos.'
}, {
  label: 'Avaliações',
  icon: '',
  content: 'H-Stane Hardcore é o novo PH da Dynamic Formulas, com a a forma potencializada do H-Stane ficando ainda mais forte, ganhos maiores e duradouros. Sua formulação promove uma redução significativa do percentual de gordura, além do aumento de força e densidade muscular, podendo chegar a 8kg de massa muscular magra no final do ciclo.'
},{
  label: 'Perguntas frequentes',
  icon: '',
  content: 'Para homens, é recomendado a ingestão de duas cápsulas por dia: uma pela manhã e a segunda 12 horas depois de consumir a primeira, de preferência com um shake proteico de alto índice glicêmico. De forma alguma se pode ultrapassar a dosagem, devendo ser consumido sem interrupções pelo período de 30 dias. Para mulheres, aconselha-se apenas uma cápsula por dia. Depois que o tratamento for encerrado, é indicado aguardar ao menos 90 dias para começar a usar o suplemento novamente. O produto não deve ser consumido por gestantes, tampouco lactantes ou menores de 18 anos.'
}]


const route = useRoute()
const slug = route.params.slug

const product = computed(() => {
    return products.value?.products.find((product) => product.id === Number(slug))
})

const { data: products } = useAsyncData<Product>(async () => {
    const [products] = await Promise.all([
    $fetch<Product>('http://localhost:3000/api/products'),
    ])
    
    return products
})

const resolutionScreens = [
  '1024x768',
  '1280x800',
  '1366x768',
  '1440x900',
  '1600x900',
  '1920x1080',
  '2560x1440',
]

const ScreenSurfaces = [
  'Matte',
  'Glossy',
  'Anti-reflective',
  'Touchscreen',
]

const resolutions = ref(resolutionScreens[0])
const surfaces = ref(ScreenSurfaces[0])
const value = ref(0)
const total = ref(0)

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const formatPricePercentage = () => {
 const discountPercentage = product?.value?.discount_percentage || 0
  const price = product?.value?.preco_atual || 0
  const priceWithDiscount = price - (price * discountPercentage) / 100

 return formatCurrency(priceWithDiscount)
}

const formatPercentage = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
  }).format(value)
}

const addMore = () => {
  if (value.value === 10) return
 return value.value += 1
}

const remove = () => {
  if (value.value === 0) return
  value.value -= 1
}



watch(value, () => {
  total.value = value.value * (product?.value?.preco_atual || 0)
})

</script>
