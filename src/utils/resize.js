export default function resize(){
  let rem = 1920 / 100
  let fontSize = document.documentElement.clientWidth / rem
  document.documentElement.style.fontSize = `${fontSize}px` 
}

window.addEventListener('resize', function(){
  resize()
})