<template>
  <div class="flex flex-col w-full min-h-screen bg-[#F2F2F2]">
    <Offerings />
    <Header />

    <UContainer class="w-full flex-1">
      <slot />
    </UContainer>

    <Footer />
  </div>
</template>
