export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
  // A função every faz uma comparação e retorna um booleano, neste caso se todos os itens da lista 1 estiverem inclusos na lista 2, a função retornará verdadeiro
  return lista1.every((itemLista1) => lista2.includes(itemLista1));
}