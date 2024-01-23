type UseGetTokenProps = {
  token: string;
};

export const useGetToken = ({ token }: UseGetTokenProps) => {
  const isCopied = ref(false);

  const setCopie = () => {
    isCopied.value = true;
  };

  const copieSubmit = () => {
    setCopie();
    navigator.clipboard.writeText(token);
  };

  return {
    isCopied,
    copieSubmit,
  };
};
