<template>
    <div class="mainBox">
      <div class="btn"><a href="https://thomy-lorenzatti.notion.site/thomy-lorenzatti/Pr-sentation-JAM-Portfolio-1e8c57ecb4044871bb57198238500928" target="_blank">Thomy</a></div>
      <div class="btn"><a href="https://v3.nuxtjs.org/" target="_blank"></a> Nuxt 3</div>
      <div class="btn"><a href="https://vuejs.org/" target="_blank"></a>Vuejs</div>
      <div class="btn"><a href="https://github.com/messtt" target="_blank"></a>github</div>
    </div>
</template>

<style scoped>
.mainBox {
    background-color: #3D578C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2A3D61;
    height: 60px;
    width: 200px;
    margin: 0 60px;
    font-size: 20px;
    font-weight: 500;
}

.btn:hover{
    background-color: #8AA0CC;
    animation: glow 0.5s;
}

@keyframes glow {
  0%{
    border-radius: 0;
  }
  100%{
    border-radius: 20px;
  }
}
</style>
