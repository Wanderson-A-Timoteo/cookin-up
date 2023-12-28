<template>
  <footer class="rodape paragrafo">
    <span>&copy; Copyright 2023 - Desenvolvido por </span>
    <a href="https://www.wandersontimoteo.com.br/" target="_blank"> Wanderson Timóteo </a>
  </footer>
</template>

<style scoped>
.rodape {
  background: var(--verde-escuro, #263A29);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rodape a {
  color: var(--creme);
  margin-left: .35rem;
}

.rodape a:hover {
  color: var(--coral);
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    font-size: 1.1rem;
    padding: 1.5rem;
    display: block;
    align-items: center;
  }

  .rodape span{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rodape a{
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
