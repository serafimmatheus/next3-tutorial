<template>
  <UCard class="bg-[#1F2D58]">
    <UContainer>
      <div class="flex items-center justify-between gap-10">
        <h6>Festival de Ofertas!</h6>

        <span>
          {{ new Date().toLocaleDateString() }}
        </span>

        <UButton
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          variant="solid"
          label="Button"
          :trailing="false"
        />
      </div>
    </UContainer>
  </UCard>
</template>
