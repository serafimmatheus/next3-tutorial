<template>
  <UCard
    :ui="{
      rounded: 'rounded-none',
      body: {
        base: '',
        background: '',
        padding: 'px-4 py-4 sm:p-4',
      },
    }"
  >
    <UContainer>
      <div class="flex items-center justify-center gap-10">
        <h6 class="text-lg font-bold">Festival de Ofertas!</h6>

        <span>
          {{ new Date().toLocaleDateString() }}
        </span>

        <UButton
          size="md"
          color="white"
          variant="solid"
          label="Quero agora"
          :trailing="false"
        />
      </div>
    </UContainer>
  </UCard>
</template>
