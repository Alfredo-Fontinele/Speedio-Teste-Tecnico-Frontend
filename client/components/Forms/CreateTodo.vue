<script setup>
const props = defineProps({
  closeFormCreateTodo: {
    type: Function,
    required: true,
  },
});

const { todoSchema, handleSubmit } = useFormTodo();

const { onSubmit } = useCreateTodo({
  todoSchema,
  handleSubmit,
  closeFormCreateTodo: props.closeFormCreateTodo,
});

const formatCurrency = (value) => {
  if (typeof value !== "string") return;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return (value = value ? `R$ ${value}` : "");
};

const formatPotencial = () => {
  todoSchema.potencial_business.value = formatCurrency(
    todoSchema.potencial_business.value
  );
};
</script>

<template>
  <div
    class="w-full flex justify-center items-center gap-4 p-4 min-h-screen bg-pallete-blue-dark"
  >
    <section class="w-full flex flex-col gap-3 justify-center items-center">
      <div
        class="flex flex-col gap-4 w-full max-w-[500px] py-4 px-5 bg-pallete-gray-primary rounded-md"
      >
        <div class="flex items-center justify-between">
          <h2 class="text-md sm:text-lg md:text-lg text-black">
            Criar Anotação
          </h2>
          <div class="flex justify-start">
            <button
              class="px-6 py-2 text-pallete-main rounded-lg text-sm sm:text-md border-[2px] border-solid border-pallete-main hover:bg-pallete-main hover:text-white"
              @click="props.closeFormCreateTodo()"
            >
              Voltar
            </button>
          </div>
        </div>
        <form @submit="onSubmit" class="flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <Label text="Descrição" :error="todoSchema.description.error" />
            <textarea
              cols="30"
              rows="10"
              placeholder="Insira uma descrição da sua tarefa"
              class="resize-none h-[100px] p-3 text-xs rounded-lg"
              v-model="todoSchema.description.value"
              :ref="todoSchema.description.ref"
            ></textarea>
            <Label
              text="Potencial do Negócio"
              :error="todoSchema.potencial_business.error"
            />
            <input
              id="potencial"
              name="potencial"
              type="text"
              placeholder="R$ 10.000,00"
              class="px-3 py-4 text-xs rounded-lg"
              v-model="todoSchema.potencial_business.value"
              :ref="todoSchema.potencial_business.ref"
              v-text="formatCurrency(todoSchema.potencial_business.value)"
              @input="
                todoSchema.potencial_business.value = formatCurrency(
                  todoSchema.potencial_business.value
                );
                console.log(
                  formatCurrency(todoSchema.potencial_business.value)
                );
              "
            />
            <!-- <input
              id="potencial"
              name="potencial"
              type="text"
              placeholder="R$ 10.000,00"
              class="px-3 py-4 text-xs rounded-lg"
              v-model="todoSchema.potencial_business.value"
              :ref="todoSchema.potencial_business.ref"
              @input="formatPotencial"
            /> -->
            <Label text="Lembrete" :error="todoSchema.reminder_date.error" />
            <input
              type="datetime-local"
              class="px-3 py-4 text-xs rounded-lg"
              v-model="todoSchema.reminder_date.value"
              :ref="todoSchema.reminder_date.ref"
            />
          </div>

          <div class="flex justify-start items-center gap-4">
            <button
              type="submit"
              class="px-6 py-3 bg-pallete-main text-white rounded-lg text-sm sm:text-md"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
