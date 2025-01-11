
//------------- mobile header-----------------
let menuIcon = document.querySelector('.openNav')
let menuContainer = document.querySelector('.MB-menu')
let toggle = document.querySelectorAll('.openNav .toggle')
let menuItems = document.querySelectorAll('.MB-menu ul li')
let Isopen = false
// let whiteSVG = `<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//  <path d="M7 1H3H2L4.5 4L7 1Z" fill="#282828" stroke="black"></path>
//  </svg>`
//  let darkSVG = `<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
//  <path d="M7 1H3H2L4.5 4L7 1Z" fill="white" stroke="white"></path>
//  </svg>`
menuIcon.addEventListener('click',()=>{
  if(!Isopen){
    menuContainer.classList.toggle('open')
    // document.querySelector('#mobile-header .right .lang .langIcon span ').style.color='#000'
    let toggles = document.querySelectorAll('#mobile-header .right .mobile-menu .openNav .toggle')
    // document.querySelector('.langIcon span:nth-child(2)').innerHTML = whiteSVG
    document.querySelector('#mobile-header .right .mobile-menu .openNav').style.transform='translateY(-2px)';
    toggles.forEach(r=>{
      // r.style.backgroundColor='#000'
    })
    toggle.forEach((t)=>{
      t.classList.toggle('active')
    })
    let i=.1
    menuItems.forEach((items)=>{
      items.classList.toggle('active')
      // items.style.transitionDelay=`${i+.1}s`
      // i+=.1
    })
    console.log(Isopen);
    Isopen =true
  }
  else{
    menuContainer.classList.toggle('open')
    // document.querySelector('#mobile-header .right .lang .langIcon span ').style.color='#fff'
    let toggles = document.querySelectorAll('#mobile-header .right .mobile-menu .openNav .toggle')
    // document.querySelector('.langIcon span:nth-child(2)').innerHTML = darkSVG
    // document.querySelector('#mobile-header .right .mobile-menu .openNav').style.transform='translateY(0px)';
    toggles.forEach(r=>{
      // r.style.backgroundColor='#fff'
    })
    toggle.forEach((t)=>{
      t.classList.toggle('active')
    })
    let i=.1
    menuItems.forEach((items)=>{
      items.classList.toggle('active')
      // items.style.transitionDelay=`${i+.1}s`
      // i+=.1
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