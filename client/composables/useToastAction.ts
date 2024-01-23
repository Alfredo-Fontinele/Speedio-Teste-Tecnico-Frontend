import { useToast } from "primevue/usetoast";

export const useToastAction = () => {
  const toast = useToast();

  const sucess = (title: string, message: string) => {
    toast.add({
      severity: "success",
      summary: title,
      detail: message,
      life: 3000,
      styleClass:
        "w-full bg-white max-w-[350px] text-neutral-400 text-black text-xs sm:text-sm",
    });
  };

  const error = (title: string, message: string) => {
    toast.add({
      severity: "error",
      summary: title,
      detail: message,
      life: 3000,
      styleClass:
        "w-full bg-white max-w-[350px] text-neutral-400 text-black text-xs sm:text-sm",
    });
  };

  return {
    sucess,
    error,
  };
};
