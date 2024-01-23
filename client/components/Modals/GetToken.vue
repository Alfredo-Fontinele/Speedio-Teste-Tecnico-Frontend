<script setup lang="ts">
import { useGetToken } from "../../composables/useGetToken";

const props = defineProps({
  token: {
    type: String,
    required: true,
  },
  closeModal: {
    type: Function,
    required: true,
  },
});

const { isCopied, copieSubmit } = useGetToken({ token: props.token });
</script>

<template>
  <ModalsRoot>
    <section
      class="bg-white w-full max-w-[500px] py-4 px-4 rounded flex flex-col gap-4"
    >
      <div class="w-full flex justify-between items-center gap-4">
        <h2>Olá! Seus dados foram salvos</h2>
        <IconsButtonClose
          @click="props.closeModal()"
          class="text-2xl cursor-pointer"
        />
      </div>
      <div>
        <p class="text-xs">
          Guarde este token para recuperar suas tarefas que você optou por
          persistir no banco de dados desta aplicação
        </p>
      </div>
      <div class="flex items-center justify-between w-full gap-3">
        <input
          type="password"
          class="px-3 py-4 w-full text-xs rounded-lg border-2 border-solid border-neutral-200 max-w-[420px]"
          :value="props.token"
        />
        <div
          @click="copieSubmit()"
          class="flex justify-center items-center p-2 border-2 border-solid border-neutral-200 rounded-md cursor-pointer"
        >
          <IconsCopy v-if="!isCopied" class="cursor-pointer" />
          <IconsCopied
            v-else
            class="text-pallete-blue-primary cursor-pointer"
          />
        </div>
      </div>
    </section>
  </ModalsRoot>
</template>
