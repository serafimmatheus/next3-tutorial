<template>
  <div class="flex items-center cursor-pointer">
    <div class="p-5 border-r-0 border rounded-tl-lg rounded-bl-lg">
      <slot name="icon" />
    </div>

    <div
      class="p-3 border rounded-tr-lg rounded-br-lg flex items-center w-44 justify-between"
    >
      <div>
        <h6 class="text-xs text-[#6E6E6E]">
          <slot name="title" />
        </h6>
        <strong class="text-sm text-[#1F2D58]">
          <slot name="subTitle" />
        </strong>
      </div>

      <IconDrop />
    </div>
  </div>
</template>
