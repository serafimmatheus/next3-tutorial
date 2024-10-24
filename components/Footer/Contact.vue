<template>
  <div class="flex items-center gap-4">
    <slot name="icon" />
    <div>
      <h3 class="text-sm text-[#6E6E6E]">
        <slot name="title" />
      </h3>
      <strong class="text-lg text-[#1F2D58]">
        <slot name="subTitle" />
      </strong>
    </div>
  </div>
</template>
