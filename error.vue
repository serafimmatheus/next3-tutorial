<template>
  <div class="bg-[#F2F2F2]">
    <Header />
    <main class="w-ful">
      <div class="flex items-center justify-between">
        <div class="max-w-[1440px] mx-auto px-5">
          <div class="border-b border-[#D9D9D9] w-full max-w-[275px] pb-6">
            <h1 class="text-[#4BB8F6] font-extrabold text-5xl">Ops!</h1>
            <p class="text-[#1F2D58] font-extrabold text-5xl">
              Esta página não existe
            </p>
          </div>

          <div class="flex items-center gap-4">
            <UButton
              class="mt-4"
              @click="() => $router.push('/')"
              color="green"
              variant="solid"
              label="Página inicial"
            />

            <UButton
              class="mt-4"
              @click="() => $router.push('/quem-somos')"
              color="green"
              variant="solid"
              label="Quem somos"
            />
          </div>
        </div>

        <div class="py-8">
          <img src="@/assets/404.png" alt="404" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
defineProps({
  error: {
    default: {
      url: '',
      statusCode: 0,
      statusMessage: '',
      message: '',
      description: '',
      data: {},
    },
  },
})
</script>
