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
  <ul class="background">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
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

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background: #3584e4;
  overflow: hidden;
}
.background li {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #2f76cd;
  color: transparent;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 7s ease-in forwards infinite;
}
undefined
.background li:nth-child(0) {
  animation-delay: 0s;
  left: 45vw;
  top: 13vh;
  border-color: #3a91fa;
}

.background li:nth-child(1) {
  animation-delay: 2s;
  left: 4vw;
  top: 63vh;
}

.background li:nth-child(2) {
  animation-delay: 4s;
  left: 27vw;
  top: 80vh;
}

.background li:nth-child(3) {
  animation-delay: 6s;
  left: 76vw;
  top: 5vh;
}

.background li:nth-child(4) {
  animation-delay: 8s;
  left: 99vw;
  top: 92vh;
  border-color: #3a91fa;
}

.background li:nth-child(5) {
  animation-delay: 10s;
  left: 19vw;
  top: 26vh;
}

.background li:nth-child(6) {
  animation-delay: 12s;
  left: 85vw;
  top: 74vh;
  border-color: #3a91fa;
}

.background li:nth-child(7) {
  animation-delay: 14s;
  left: 63vw;
  top: 51vh;
}

.background li:nth-child(8) {
  animation-delay: 16s;
  left: 57vw;
  top: 45vh;
  border-color: #3a91fa;
}

.background li:nth-child(9) {
  animation-delay: 18s;
  left: 35vw;
  top: 35vh;
  border-color: #3a91fa;
}

</style>
