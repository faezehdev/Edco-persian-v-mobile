
const lenis =  new Lenis({
    smoothWheel: true,
    wheelMultiplier:2
  });


  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
lenis.on('scroll',(args)=>{
    let header = document.querySelector('header')
    if( args.scroll == 0){
        header.classList.remove('goDown')
    }
    if( args.scroll > 0){
        header.classList.add('goDown')
    }
    
})