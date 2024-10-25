<template>
  <div class="mt-6">
    <BannerMain />

    <div class="mt-8">
      <Advantages />
    </div>

    <div class="mt-11">
      <MiniBanner />
    </div>

    <div class="mt-24">
      <Brands />
    </div>

    <div class="mt-24 mb-24 space-y-8">
      <div class="flex items-center justify-between gap-10">
        <div>
          <h2 class="text-3xl font-bold text-[#1F2D58]">Novidades bringIT</h2>
          <span class="text-[#6E6E6E]">Recém chegados</span>
        </div>

        <div class="bg-white p-2 rounded-lg gap-4 flex">
          <UButton
            :color="categoria === 'Ver todos' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Ver todos</UButton
          >
          <UButton
            :color="categoria === 'Baterias' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Baterias</UButton
          >
          <UButton
            :color="categoria === 'Telas' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Telas</UButton
          >
          <UButton
            :color="categoria === 'Fontes' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Fontes</UButton
          >
          <UButton
            :color="categoria === 'Teclados' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Teclados</UButton
          >
        </div>
      </div>

      <CarouselProducts :products="filteredProducts" />
    </div>

    <div class="mt-24 mb-24 space-y-8">
      <div class="flex flex-col gap-10">
        <div>
          <h2 class="text-3xl font-bold text-[#1F2D58]">
            Categorias de produtos
          </h2>
          <span class="text-[#6E6E6E]">Peças e acessórios para Notebook</span>
        </div>

        <ul class="flex items-center justify-between gap-10">
          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center"
                >Acessórios</span
              >
            </div>
          </li>

          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center"
                >Armazenamento</span
              >
            </div>
          </li>

          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center">Baterias</span>
            </div>
          </li>

          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center">Cooler</span>
            </div>
          </li>

          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center">Fontes</span>
            </div>
          </li>

          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center">Teclados</span>
            </div>
          </li>

          <li>
            <div class="flex flex-col items-center justify-center gap-2">
              <img
                class="rounded-full border border-[#DFDFDF]"
                src="https://placehold.co/112x112"
                alt="placeHolder"
              />
              <span class="text-[#1F2D58] font-bold text-center">Telas</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-24 mb-24 space-y-8">
      <div class="flex items-center justify-between gap-10">
        <div>
          <h2 class="text-3xl font-bold text-[#1F2D58]">Principais ofertas</h2>
          <span class="text-[#6E6E6E]">Recém chegados</span>
        </div>

        <div class="bg-white p-2 rounded-lg gap-4 flex">
          <UButton
            :color="categoria === 'Ver todos' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Ver todos</UButton
          >
          <UButton
            :color="categoria === 'Baterias' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Baterias</UButton
          >
          <UButton
            :color="categoria === 'Telas' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Telas</UButton
          >
          <UButton
            :color="categoria === 'Fontes' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Fontes</UButton
          >
          <UButton
            :color="categoria === 'Teclados' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Teclados</UButton
          >
        </div>
      </div>

      <CarouselProducts :products="filteredProducts" />
    </div>

    <div class="flex items-end gap-4 p-4">
      <img
        class="w-1/2"
        src="@/assets/Parceiros.png"
        alt="Conheça nosso portal de parceiros"
      />
      <img
        class="w-1/2"
        src="@/assets/Sustentabilidade.png"
        alt="bringIT back sustentabiliade"
      />
    </div>

    <div class="mt-24 mb-24 space-y-8">
      <div class="flex items-center justify-between gap-10">
        <div>
          <h2 class="text-3xl font-bold text-[#1F2D58]">Principais ofertas</h2>
          <span class="text-[#6E6E6E]">Recém chegados</span>
        </div>

        <div class="bg-white p-2 rounded-lg gap-4 flex">
          <UButton
            :color="categoria === 'Ver todos' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Ver todos</UButton
          >
          <UButton
            :color="categoria === 'Baterias' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Baterias</UButton
          >
          <UButton
            :color="categoria === 'Telas' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Telas</UButton
          >
          <UButton
            :color="categoria === 'Fontes' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Fontes</UButton
          >
          <UButton
            :color="categoria === 'Teclados' ? 'primary' : 'secondary'"
            @click="getValueButton"
            >Teclados</UButton
          >
        </div>
      </div>

      <CarouselProducts :products="filteredProducts" />
    </div>

    <div class="relative w-full">
      <img
        src="@/assets/Newsletter.png"
        alt="bringIT news, fique por dentro das ofertas e novidades da bringIT"
      />

      <div class="absolute flex items-center top-24 right-16">
        <UInput
          class="w-[430px]"
          placeholder="Insira seu melhor email"
          icon="i-heroicons-mail"
          size="xl"
          color="primary"
          variant="solid"
        />
        <UButton
          icon="i-heroicons-arrow-right"
          size="xl"
          color="primary"
          square
          variant="solid"
        />
      </div>
    </div>

    <div class="mt-24">
      <img src="@/assets/avaliacoes.png" alt="avaliações google" />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'Peças e acessórios para Notebook',
    },
  ],
})

useSeoMeta({
  title: 'Home - SEO e Meta',
  ogUrl: 'https://bringit.com.br',
  ogType: 'article',
  ogTitle: 'Home',
  ogDescription: 'Peças e acessórios para Notebook',
  ogImage: 'https://bringit.com.br/assets/og-image.png',
  ogSiteName: 'bringIT',
  ogLocale: 'pt_BR',
})

const categoria = ref('Ver todos')
const products = ref([
  {
    id: 1,
    titulo: 'Bateria para Notebook Dell Vostro 3500',
    preco_atual: 12.1,
    parcelas: {
      quantidade: 12,
      valor: 1.99,
    },
    discount_percentage: 15,
    tags: ['Novo'],
    preco_pix: 215.91,
    entrega: ['São Paulo/SP'],
    categoria: 'Baterias',
  },
  {
    id: 2,
    titulo: 'Bateria para Notebook HP Pavilion G6',
    preco_atual: 189.9,
    parcelas: {
      quantidade: 10,
      valor: 18.99,
    },
    discount_percentage: 15,
    tags: ['Novo'],
    preco_pix: 180.91,
    entrega: ['Rio de Janeiro/RJ', 'Belo Horizonte/MG'],
    categoria: 'Baterias',
  },
  {
    id: 3,
    titulo: 'Bateria para Notebook Lenovo Ideapad 320',
    preco_atual: 210.5,
    parcelas: {
      quantidade: 12,
      valor: 18.99,
    },
    discount_percentage: 15,
    tags: ['Novo'],
    preco_pix: 200.0,
    entrega: ['São Paulo/SP', 'Porto Alegre/RS'],
    categoria: 'Baterias',
  },
  {
    id: 4,
    titulo: 'Bateria para Notebook Asus X540',
    preco_atual: 165.0,
    parcelas: {
      quantidade: 8,
      valor: 21.0,
    },
    discount_percentage: 15,
    tags: ['Novo'],
    preco_pix: 160.0,
    entrega: ['Curitiba/PR', 'Florianópolis/SC'],
    categoria: 'Baterias',
  },
  {
    id: 5,
    titulo: 'Bateria para Notebook Acer Aspire E5',
    preco_atual: 145.99,
    parcelas: {
      quantidade: 10,
      valor: 15.0,
    },
    discount_percentage: 15,
    tags: ['Novo'],
    preco_pix: 140.0,
    entrega: ['Recife/PE'],
    categoria: 'Baterias',
  },
  {
    id: 6,
    titulo: "Tela 15.6'' LED Slim IPS Para Notebook Acer Aspire A515-41g-1480",
    preco_atual: 342.1,
    parcelas: {
      quantidade: 12,
      valor: 19.99,
    },
    discount_percentage: 10,
    tags: ['Novidade'],
    preco_pix: 215.91,
    entrega: ['São Paulo/SP', 'Betim/MG', 'Joinville/SC'],
    categoria: 'Telas',
  },
  {
    id: 7,
    titulo: "Tela 14'' LED HD Para Notebook Dell Inspiron 14",
    preco_atual: 250.0,
    parcelas: {
      quantidade: 12,
      valor: 21.99,
    },
    discount_percentage: 10,
    tags: ['Novidade'],
    preco_pix: 240.0,
    entrega: ['Brasília/DF', 'Salvador/BA'],
    categoria: 'Telas',
  },
  {
    id: 8,
    titulo: "Tela 15.6'' LED Para Notebook HP G42",
    preco_atual: 299.9,
    parcelas: {
      quantidade: 12,
      valor: 25.0,
    },
    discount_percentage: 10,
    tags: ['Novidade'],
    preco_pix: 290.0,
    entrega: ['São Paulo/SP', 'Campinas/SP'],
    categoria: 'Telas',
  },
  {
    id: 9,
    titulo: "Tela 13.3'' LED Slim Para Notebook Samsung ATIV Book",
    preco_atual: 450.0,
    parcelas: {
      quantidade: 12,
      valor: 40.0,
    },
    discount_percentage: 10,
    tags: ['Novidade'],
    preco_pix: 440.0,
    entrega: ['Rio de Janeiro/RJ'],
    categoria: 'Telas',
  },
  {
    id: 10,
    titulo: "Tela 17.3'' LED Full HD Para Notebook Lenovo",
    preco_atual: 600.0,
    parcelas: {
      quantidade: 12,
      valor: 50.0,
    },
    discount_percentage: 10,
    tags: ['Novidade'],
    preco_pix: 580.0,
    entrega: ['São Paulo/SP'],
    categoria: 'Telas',
  },
  {
    id: 11,
    titulo: 'Fonte para Notebook Dell 19.5V 3.34A',
    preco_atual: 120.0,
    parcelas: {
      quantidade: 6,
      valor: 20.0,
    },
    discount_percentage: 0,
    tags: [],
    preco_pix: 115.0,
    entrega: ['São Paulo/SP'],
    categoria: 'Fontes',
  },
  {
    id: 12,
    titulo: 'Fonte para Notebook HP 18.5V 3.5A',
    preco_atual: 99.9,
    parcelas: {
      quantidade: 6,
      valor: 16.65,
    },
    discount_percentage: 0,
    tags: [],
    preco_pix: 90.0,
    entrega: ['Rio de Janeiro/RJ'],
    categoria: 'Fontes',
  },
  {
    id: 13,
    titulo: 'Fonte para Notebook Lenovo 20V 2.25A',
    preco_atual: 85.0,
    parcelas: {
      quantidade: 5,
      valor: 17.0,
    },
    discount_percentage: 0,
    tags: [],
    preco_pix: 80.0,
    entrega: ['Brasília/DF'],
    categoria: 'Fontes',
  },
  {
    id: 14,
    titulo: 'Fonte para Notebook Asus 19V 4.74A',
    preco_atual: 135.5,
    parcelas: {
      quantidade: 6,
      valor: 22.58,
    },
    discount_percentage: 0,
    tags: [],
    preco_pix: 130.0,
    entrega: ['Curitiba/PR'],
    categoria: 'Fontes',
  },
  {
    id: 15,
    titulo: 'Fonte Universal para Notebook 65W',
    preco_atual: 70.0,
    parcelas: {
      quantidade: 4,
      valor: 17.5,
    },
    discount_percentage: 0,
    tags: [],
    preco_pix: 68.0,
    entrega: ['São Paulo/SP'],
    categoria: 'Fontes',
  },
  {
    id: 16,
    titulo: 'Adaptador Caddy 9.5mm - AC050',
    preco_antigo: 14.88,
    preco_atual: 12.1,
    desconto: '15% OFF',
    parcelas: {
      quantidade: 12,
      valor: 1.99,
    },
    discount_percentage: 0,
    tags: [],
    preco_pix: 215.91,
    entrega: ['São Paulo/SP', 'Joinville/SC'],
    categoria: 'Adaptadores',
  },
  {
    id: 17,
    titulo: 'Teclado para Notebook Dell Inspiron 15',
    preco_atual: 89.9,
    parcelas: {
      quantidade: 5,
      valor: 17.98,
    },
    discount_percentage: 5,
    tags: ['Usado'],
    preco_pix: 85.0,
    entrega: ['Rio de Janeiro/RJ'],
    categoria: 'Teclados',
  },
  {
    id: 18,
    titulo: 'Teclado para Notebook HP Pavilion 14',
    preco_atual: 110.0,
    parcelas: {
      quantidade: 6,
      valor: 18.33,
    },
    discount_percentage: 5,
    tags: ['Usado'],
    preco_pix: 105.0,
    entrega: ['São Paulo/SP'],
    categoria: 'Teclados',
  },
  {
    id: 19,
    titulo: 'Teclado para Notebook Lenovo ThinkPad T450',
    preco_atual: 135.0,
    parcelas: {
      quantidade: 6,
      valor: 22.5,
    },
    discount_percentage: 5,
    tags: ['Usado'],
    preco_pix: 130.0,
    entrega: ['Florianópolis/SC'],
    categoria: 'Teclados',
  },
  {
    id: 20,
    titulo: 'Teclado para Notebook Asus X551',
    preco_atual: 150.0,
    parcelas: {
      quantidade: 6,
      valor: 25.0,
    },
    discount_percentage: 5,
    tags: ['Usado'],
    preco_pix: 145.0,
    entrega: ['Salvador/BA'],
    categoria: 'Teclados',
  },
])

const filteredProducts = computed(() => {
  if (categoria.value === 'Ver todos') {
    return products.value
  }
  return products.value.filter(
    (product) => product.categoria === categoria.value
  )
})

const getValueButton = ($evt) => {
  categoria.value = $evt.srcElement.innerText
}
</script>
