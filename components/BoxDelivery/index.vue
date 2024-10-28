<template>
  <div
    class="bg-[#DFDFDF] flex items-center rounded-lg px-10 justify-between gap-5"
  >
    <div class="flex items-center gap-5">
      <img
        class="absolute -top-2 left-8"
        src="@/assets/box-delivery.png"
        alt="box delivery"
      />

      <div class="w-[97px] h-[20px]" />

      <p class="p-4 text-sm text-[#1F2D58]">
        Receba seu pedido no <b>MESMO DIA</b> nas cidades de <b>São Paulo</b>,
        <b>Curitiba</b>, <b>Belo Horizonte</b> e
        <b>Joinville</b>
      </p>
    </div>

    <UButton
      :ui="{
        padding: {
          xl: 'py-1 px-7',
        },
      }"
      color="violet"
      variant="outline"
      size="xl"
      to="https://volta.net"
      target="_blank"
      >Ver mais</UButton
    >
  </div>
</template>
