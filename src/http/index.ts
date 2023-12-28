import type ICategoria from "@/interfaces/ICategoria";
import type IReceita from "@/interfaces/IReceita";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  const resposta = await fetch('https://gist.githubusercontent.com/Wanderson-A-Timoteo/296b01e8c66ed5aec347e903819abde6/raw/e0575d61e2984af1e4c8badd4b4c206581a33778/categorias.json');

  const categorias: ICategoria[] = await resposta.json();

  return categorias;
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/Wanderson-A-Timoteo/ade85af7b73835a2573129194bb13865/raw/8f3f140226eabb0b62580cef28467e794516dc9c/receitas.json');
}
