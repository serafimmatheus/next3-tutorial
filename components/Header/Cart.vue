<template>
  <div class="p-5 border rounded-lg relative">
    <slot name="icon" />
    <div
      class="bg-red-500 flex justify-center items-center rounded-full absolute -top-2 -right-2 w-6 h-6"
    >
      <span>
        <slot name="badge" />
      </span>
    </div>
  </div>
</template>
