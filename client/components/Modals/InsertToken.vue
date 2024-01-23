<script setup lang="ts">
import { useInsertToken } from "../../composables/useInsertToken";
const { handleSubmitForm, token } = useInsertToken();

const props = defineProps({
  closeModal: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <ModalsRoot>
    <form
      @submit="handleSubmitForm"
      class="bg-white w-full max-w-[500px] py-4 px-4 rounded flex flex-col gap-4"
    >
      <div class="w-full flex justify-between items-center gap-4">
        <h2>Recuperar Dados</h2>
        <IconsButtonClose
          @click="props.closeModal()"
          class="text-2xl cursor-pointer"
        />
      </div>
      <div class="w-full flex flex-col gap-2">
        <input
          type="password"
          class="px-3 py-4 w-full text-xs rounded-lg border-2 border-solid border-neutral-200"
          placeholder="Inserir token"
          v-model="token.value"
          :ref="token.ref"
        />
        <p class="text-pallete-red-alert text-xs" v-if="token.error">
          * Token é obrigatório
        </p>
      </div>
      <div class="flex justify-start items-center">
        <button
          type="submit"
          class="bg-black text-white rounded-lg px-3 py-2 text-sm"
        >
          Enviar
        </button>
      </div>
    </form>
  </ModalsRoot>
</template>
