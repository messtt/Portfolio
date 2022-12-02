<template>
    <div class="mainBox">
      <a href="https://thomy-lorenzatti.notion.site/thomy-lorenzatti/Pr-sentation-JAM-Portfolio-1e8c57ecb4044871bb57198238500928" target="_blank">Thomy</a>
      <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt 3</a>
      <a href="test.vue" target="_blank">test</a>
      <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github"><img src="img/25231.png" alt="">github</a>
    </div>
</template>

<style scoped>
.mainBox {
    justify-content: space-around;
    background-color: #3D578C;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
a {
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

a:hover{
    background-color: #8AA0CC;
    border-radius: 20px;
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
