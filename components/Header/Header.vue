<template>
  <header>
    <div class="bg-white py-5">
      <UContainer>
        <div class="flex items-center justify-between gap-4">
          <NuxtLink to="/">
            <img
              width="185px"
              height="65px"
              src="@/assets/Logo_Client.png"
              alt="Logo bringIT"
            />
          </NuxtLink>

          <HeaderSearch />

          <HeaderDeliverWhere>
            <template #icon>
              <IconLocation />
            </template>

            <template #title>Entregar onde?</template>

            <template #subTitle>Definir local</template>
          </HeaderDeliverWhere>

          <HeaderDeliverWhere>
            <template #icon>
              <IconUser />
            </template>

            <template #title>Bem vindo!</template>

            <template #subTitle>Entrar/Criar conta</template>
          </HeaderDeliverWhere>

          <HeaderCart :v-if="isItemCart">
            <template #icon>
              <IconCart />
            </template>

            <template #badge>1</template>
          </HeaderCart>
        </div>
      </UContainer>
    </div>

    <div class="border-t border-b border-[#DFDFDF] bg-white py-5">
      <HeaderNavUl />
    </div>
  </header>
</template>

<script setup>
const isItemCart = ref(false)
</script>
