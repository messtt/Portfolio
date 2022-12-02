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

@keyframes bg_anim {
  0%{
    color: #000000;
    background: 0;
  }
  100%{
    background: 400px;
    color: #3D578C;
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
  position: relative;
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
  top: 43vh;
}

.background li:nth-child(2) {
  animation-delay: 4s;
  left: 27vw;
  top: 20vh;
}

.background li:nth-child(3) {
  animation-delay: 6s;
  left: 76vw;
  top: 5vh;
}

.background li:nth-child(4) {
  animation-delay: 8s;
  left: 99vw;
  top: 2vh;
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
