let products =[...document.querySelectorAll('.product')]
let projects =[...document.querySelectorAll('.project')]
document.addEventListener('scroll',()=>{
    products.map(pro=>{
    let fadeElement = pro
    let positionElement = fadeElement.getBoundingClientRect().top+100;
    let windowHeight = window.innerHeight
    if(positionElement < windowHeight){
        pro.classList.add('fade-in')
    }
    })
    projects.map(pro=>{
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
let proContainer = document.querySelector('.Products-container')
proContainer.addEventListener('mouseover',(e)=>{
    products.map(pro=>{
        pro.classList.remove('hover')
       }) 
    })

// blog slider
let SwiperBanner= new Swiper ('.swiper-blogs', {
    slidesPerView: 4,
    spaceBetween: 50,
   speed:2000,
   grabCursor: true,
    }) 