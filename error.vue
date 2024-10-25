<template>
  <div
    class="w-full min-h-screen bg-white flex items-center justify-center flex-col"
  >
    <h1 class="text-green-500 font-bold text-7xl">
      {{ error.statusCode }}
    </h1>

    <p class="text-black">
      {{ error.statusMessage }}
    </p>

    <UButton
      class="mt-4"
      @click="() => $router.go(-1)"
      color="green"
      variant="solid"
      label="Voltar"
    />
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
