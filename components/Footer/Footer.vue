<template>
  <footer
    class="mt-16 bg-white rounded-tr-[48px] rounded-tl-[48px] border-t border-[#DFDFDF]"
  >
    <div class="py-8 border-b border-[#DFDFDF]">
      <UContainer>
        <ul class="flex items-center justify-between gap-4">
          <li>
            <FooterContact>
              <template #icon>
                <IconHelp />
              </template>
              <template #title>Telefone grátis</template>
              <template #subTitle> 0800 000 3327 </template>
            </FooterContact>
          </li>

          <li>
            <FooterContact>
              <template #icon>
                <IconPhone />
              </template>
              <template #title>Telefone</template>
              <template #subTitle>(41) 3154-8100</template>
            </FooterContact>
          </li>

          <li>
            <FooterContact>
              <template #icon>
                <IconWhatsapp />
              </template>
              <template #title>Whatsapp</template>
              <template #subTitle>(11) 93943-0844</template>
            </FooterContact>
          </li>

          <li>
            <FooterContact>
              <template #icon>
                <IconMail />
              </template>
              <template #title>E-mail</template>
              <template #subTitle>contato@bringit.com.br</template>
            </FooterContact>
          </li>
        </ul>
      </UContainer>
    </div>

    <div class="mt-8 border-b border-[#DFDFDF] pb-16">
      <UContainer>
        <div class="flex items-start justify-between gap-5">
          <FooterAbout />
          <FooterList />
          <FooterList />
          <FooterList />
        </div>
      </UContainer>
    </div>

    <div class="mt-8">
      <UContainer>
        <div class="flex items-center gap-10">
          <div class="w-full">
            <h6 class="text-[#1F2D58] text-lg font-bold">Selos</h6>

            <ul class="flex items-center gap-2 mt-3">
              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconGoogleSafe />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconBit />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconEncrypt />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconReclameAqui />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconOpinioes />
              </li>
            </ul>
          </div>

          <div class="w-full">
            <h6 class="text-[#1F2D58] text-lg font-bold">
              Formas de pagamento
            </h6>

            <ul class="flex items-center gap-2 mt-3">
              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconBoleto />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconVisa />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconAmex />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconPix />
              </li>

              <li
                class="w-[120px] h-[48px] border border-[#DFDFDF] rounded flex justify-center items-center"
              >
                <IconMastercard />
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </div>

    <div class="mt-11 mb-6">
      <UContainer>
        <FooterCopyright />
      </UContainer>
    </div>
  </footer>
</template>
