<template>
    <section class="selecionar-ingredientes">
      <h1 class="cabecalho titulo-ingredientes">
        Ingredientes
      </h1>
      <p class="paragrafo-lg instrucoes">
        Selecione abaixo os ingredientes que você quer usar nesta receita:
      </p>
      <ul class="categorias">

      </ul>
      <p class="paragrafo dica">
        *Atenção: consideramos que você tem em casa sal, pimenta e água.
      </p>
    </section>
</template>
  
<script lang="ts">
  export default {
    data() {
      return {
        nome: [
          {
            "nome": "Laticínios e Ovos",
            "ingredientes": ["Ovos", "Queijo", "Leite", "Manteiga", "Creme de Leite", "Iogurte", "Leite Condensado", "Sorvete"],
            "rotulo": "laticinios_e_ovos"
          },
          {
            "nome": "Farinhas e Fermentos",
            "ingredientes": ["Farinha de trigo", "Polvilho", "Farinha de rosca", "Canjica", "Farinha de mandioca", "Fubá", "Linhaça", "Fermento químico"],
            "rotulo": "farinhas_e_fermentos"
          }
        ]
      }
    }
  }
</script>
  
<style scoped>
  .selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
  }
  
  .instrucoes {
    margin-bottom: 2rem;
  }
  
  .categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
  }
  
  @media only screen and (max-width: 767px) {
    .dica {
      margin-bottom: 2.5rem;
    }
  }
</style>