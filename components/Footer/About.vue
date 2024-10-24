<template>
  <div class="flex flex-col flex-1">
    <img
      width="160px"
      height="57px"
      src="@/assets/Logo_Client.png"
      alt="Logo bringIT"
    />

    <p class="text-sm text-[#6E6E6E] mt-4 mb-10">
      Somos um e-commerce especializado na venda e distribuição de telas,
      fontes, teclados e baterias compatíveis com milhares de modelos de
      notebooks.
    </p>

    <div>
      <h6>Conecte-se</h6>

      <ul class="flex items-center gap-2">
        <li>
          <NuxtLink target="_blank" to="https://www.facebook.com/?locale=pt_BR">
            <FooterSocial>
              <template #icon>
                <IconFacebook />
              </template>
            </FooterSocial>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink target="_blank" to="https://www.youtube.com/">
            <FooterSocial>
              <template #icon>
                <IconYoutube />
              </template>
            </FooterSocial>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink target="_blank" to="https://www.linkedin.com/feed">
            <FooterSocial>
              <template #icon>
                <IconLinkedin />
              </template>
            </FooterSocial>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink target="_blank" to="https://www.instagram.com/">
            <FooterSocial>
              <template #icon>
                <IconInstagram />
              </template>
            </FooterSocial>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
