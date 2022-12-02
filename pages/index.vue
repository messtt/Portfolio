<template>
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
  </ul>
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
    background-color: #330055;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23330055' cx='50' cy='0' r='50'/%3E%3Cg fill='%2336005c' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23390064' cx='50' cy='100' r='50'/%3E%3Cg fill='%233c006b' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%233f0073' cx='50' cy='200' r='50'/%3E%3Cg fill='%2342007b' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23450083' cx='50' cy='300' r='50'/%3E%3Cg fill='%2347008b' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23490093' cx='50' cy='400' r='50'/%3E%3Cg fill='%234c009b' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%234e00a4' cx='50' cy='500' r='50'/%3E%3Cg fill='%234f00ac' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%235100b5' cx='50' cy='600' r='50'/%3E%3Cg fill='%235200be' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%235300c7' cx='50' cy='700' r='50'/%3E%3Cg fill='%235400d0' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%235502d9' cx='50' cy='800' r='50'/%3E%3Cg fill='%235504e2' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%235508ec' cx='50' cy='900' r='50'/%3E%3Cg fill='%23540bf5' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23530FFF' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: contain;
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

.header {
  --c: #030435;
  --b: .1em;
  --d: 20px;

  --_s: calc(var(--d) + var(--b));

  color: var(--c);
  border: solid #0000;
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  background:
      conic-gradient(at left var(--d)  bottom var(--d),
      #0000 90deg, rgb(41 92 194 /0.3) 0 225deg,rgb(29 74 164 /0.6) 0) border-box,
      conic-gradient(at left var(--_s) bottom var(--_s),
      #0000 90deg,var(--c) 0) 0 100%/calc(100% - var(--b)) calc(100% - var(--b))  border-box;
  transform: translate(calc(var(--d)/-1),var(--d));
  clip-path:
      polygon(
          var(--d) 0%,
          var(--d) 0%,
          100% 0%,
          100% calc(100% - var(--d)),
          100% calc(100% - var(--d)),
          var(--d) calc(100% - var(--d))
      );
  transition: 0.5s;
}
.header:hover {
  transform: translate(0,0);
  clip-path:
      polygon(
          0% var(--d),
          var(--d) 0%,
          100% 0%,
          100% calc(100% - var(--d)),
          calc(100% - var(--d)) 100%,
          0% 100%
      );
}

.lien{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

a {
    border-width:2px;
    border-style: solid;
    border-color:black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8d2eec;
    height: 60px;
    width: 200px;
    margin: 0 60px;
    font-size: 20px;
    font-weight: 500;
}

a:hover{
    background-color: #8c50f3;
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

.background li {
  background-color: #3D578C;
  position: relative;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #000000;
  color: transparent;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  animation: cube 7s ease-in forwards infinite;
}
undefined
.background li:nth-child(0) {
  animation-delay: 0s;
  left: 45vw;
  top: 33vh;
  border-color: #3a91fa;
}

.background li:nth-child(1) {
  animation-delay: 2s;
  left: 4vw;
  top: 43vh;
}

.background li:nth-child(2) {
  animation-delay: 4s;
  left: 27vw;
  top: 55vh;
}

.background li:nth-child(3) {
  animation-delay: 6s;
  left: 70vw;
  top: 37vh;
}

.background li:nth-child(4) {
  animation-delay: 8s;
  left: 40vw;
  top: 54vh;
  border-color: #3a91fa;
}

.background li:nth-child(5) {
  animation-delay: 10s;
  left: 19vw;
  top: 36vh;
}

.background li:nth-child(6) {
  animation-delay: 12s;
  left: 75vw;
  top: 44vh;
  border-color: #3a91fa;
}

.background li:nth-child(7) {
  animation-delay: 14s;
  left: 63vw;
  top: 31vh;
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
