<template>
    <div class="mainBox">
      <div class="header"><h1>Mon site</h1></div>
      <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github">github</a>
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

.header{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
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
