<script setup lang="ts">
import { useRemoveTodo } from "../../composables/useRemoveTodo";

const props = defineProps({
  closeModal: {
    type: Function,
    required: true,
  },
});

const { onSubmitRemove } = useRemoveTodo({ closeModal: props.closeModal });
</script>

<template>
  <ModalsRoot>
    <div id="modal" class="bg-white flex flex-col gap-4 rounded-lg py-5">
      <div class="flex items-center justify-between px-6">
        <h2 class="text-black md:text-md lg:text-lg">
          Deseja excluir esta anotação
        </h2>
        <IconsButtonClose
          @click="props.closeModal()"
          class="text-[25px] text-neutral-400 cursor-pointer"
        />
      </div>
      <div class="w-full h-[1px] bg-neutral-200"></div>
      <div class="text-neutral-400 text-xs md:text-md flex flex-col gap-2 px-6">
        <p>
          Você está prestes a excluir uma anotação e esta ação não poderá ser
          desfeita.
        </p>
        <p>Tem certexa de que deseja excluí-la?</p>
      </div>
      <div class="w-full flex justify-end items-center gap-2 px-6">
        <button
          type="button"
          @click="props.closeModal()"
          class="border-2 border-solid border-neutral-200 text-neutral-400 text-xs py-2 px-4 rounded-[50px]"
        >
          Cancelar
        </button>
        <button
          type="button"
          class="bg-[#fa6e59] text-white text-xs py-2 px-4 rounded-[50px]"
          @click="onSubmitRemove"
        >
          Excluir
        </button>
      </div>
    </div>
  </ModalsRoot>
</template>
