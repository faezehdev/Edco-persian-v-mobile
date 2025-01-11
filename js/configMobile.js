let menuIcon = document.querySelector('.openNav')
let menuContainer = document.querySelector('.MB-menu')
let toggle = document.querySelectorAll('.openNav .toggle')
let menuItems = document.querySelectorAll('.MB-menu ul li')
let Isopen = false
menuIcon.addEventListener('click',()=>{
  if(!Isopen){
    menuContainer.classList.toggle('open')
    let toggles = document.querySelectorAll('#mobile-header .right .mobile-menu .openNav .toggle')
    document.querySelector('#mobile-header .right .mobile-menu .openNav').style.transform='translateY(-2px)';
    toggle.forEach((t)=>{
      t.classList.toggle('active')
    })
    menuItems.forEach((items)=>{
      items.classList.toggle('active')
    })
    console.log(Isopen);
    Isopen =true
  }
  else{
    menuContainer.classList.toggle('open')
    let toggles = document.querySelectorAll('#mobile-header .right .mobile-menu .openNav .toggle')
    toggles.forEach((t)=>{
      t.classList.toggle('active')
    })
    menuItems.forEach((items)=>{
      items.classList.toggle('active')
    })
    console.log(Isopen);
    Isopen=false
  }
 
})

let langIcon = document.querySelector('.langIcon')
let langSVG = document.querySelector('.langIcon svg')
let langContent = document.querySelector('.langs')
langIcon.addEventListener('click',()=>{
  langContent.classList.toggle('openLang')
  langSVG.classList.toggle('rotate')
})

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