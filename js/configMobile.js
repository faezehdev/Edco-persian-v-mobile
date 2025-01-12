let menuIcon = document.querySelector('.openNav')
let menuContainer = document.querySelector('.MB-menu')
let toggle = document.querySelectorAll('.openNav .toggle')
let menuItems = document.querySelectorAll('.MB-menu ul li')
let Isopen = false
if(document.querySelector('.ContactUS-mobile')){
  console.log('ContactUS page');
  let header = document.querySelector('header')
  header.classList.add('whiteHeader')
  }
menuIcon.addEventListener('click',()=>{
  if(!Isopen){
    menuContainer.classList.toggle('open')
    if(document.querySelector('.ContactUS-mobile')){
      let header = document.querySelector('header')
      header.classList.add('darkHeader')
      }
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
    if(document.querySelector('.ContactUS-mobile')){
      let header = document.querySelector('header')
      header.classList.remove('darkHeader')
      }
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
if(document.querySelector('.ContactUS-mobile')){
let header = document.querySelector('header')
header.classList.add('whiteHeader')
}
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
        if(document.querySelector('.ContactUS-mobile')){
          let header = document.querySelector('header')
          header.classList.add('whiteHeader')
          }
    }
    if( args.scroll > 0){
      if(document.querySelector('.ContactUS-mobile')){
        let header = document.querySelector('header')
        header.classList.remove('whiteHeader')
        }
        header.classList.add('goDown')
    }
    
})