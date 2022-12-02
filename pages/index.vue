<template>
    <div class="mainBox">
      <div class="header"><h1>Mon site</h1></div>
      <div class="lien">
        <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github">github</a>
        <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github">github</a>
        <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github">github</a>
        <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github">github</a>
        <a href="https://portfolio-gamma-ashy-38.vercel.app/api/github">github</a>
      </div>
    </div>
</template>
<style scoped>
.mainBox {
    justify-content: space-around;
    background-color: #3D578C;
    display: flex;
    flex-direction:column;
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
.header:first-child:hover{
  background: linear-gradient(90deg, #ad04e5, #c33987, #540694, #882194);
  background-size: 400%;
}
.header:first-child:before{
  content: '';
  position: absolute;
  background: inherit;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}
.header:first-child:hover:before{
  top: 50%;
  right: 15%;
  bottom: 39%;
  left: 15%;
  opacity: 1;
  z-index: -1;
}
.header:hover{
  z-index: 1;
  animation: glow 8s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 400%;
  }
}

.lien{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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
