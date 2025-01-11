let swiperBanner = new Swiper(".swiper-banners", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,  
      },
      speed: 1000,
      autoplay:true,
      effect:'cube',
      grabCursor: true,
      cubeEffect: {
       shadow: true,
       slideShadows: true,
       shadowOffset: 20,
       shadowScale: 0.94,   
 },
      navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
  },
});
let products =[...document.querySelectorAll('.product')]
document.addEventListener('scroll',()=>{
    products.map(pro=>{
    let fadeElement = pro
    let positionElement = fadeElement.getBoundingClientRect().top+100;
    let windowHeight = window.innerHeight
    if(positionElement < windowHeight){
        pro.classList.add('fade-in')
    }
    })
  
   
})


// hover product
products.forEach(pro=>{
    pro.addEventListener('mouseover',(e)=>{
        e.stopPropagation()
        hover(e.currentTarget)
        e.currentTarget.classList.add('active')
    })
    pro.addEventListener('mouseleave',(e)=>{
      pro.classList.remove('active')
      pro.classList.remove('hover')

    })
})
let hover = ()=>{
   products.map(pro=>{
    pro.classList.add('hover')
   })
}
let proContainer = document.querySelector('.Products-cat')
proContainer.addEventListener('mouseleave',(e)=>{
    products.map(pro=>{
        pro.classList.remove('hover')
       }) 
    })
