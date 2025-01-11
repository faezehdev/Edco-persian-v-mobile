let fixSec = document.querySelector('.FixedSec .sideMenu')
let sections = document.querySelectorAll('.section')
let menuActive = document.querySelector('.menu__active')
let btns = document.querySelectorAll('.menu__link');
lenis.on('scroll',(e)=>{
    if(e.scroll==0){
        fixSec.classList.remove('fixsec')
        menuActive.classList.remove('fixsec')
    }
    if(e.scroll>10){
        console.log(e);
        
        fixSec.classList.add('fixsec')
        menuActive.classList.add('fixsec')
        let scrTop = e.scroll
             // change active menu on scroll           
             sections.forEach(sec =>{
                let top = scrTop;
                let offset = sec.offsetTop-200;
                let height= sec.offsetHeight;
                let id =sec.getAttribute('id')
                if(top>= offset && top < offset + height){
                btns.forEach(btn=>{         
                btn.classList.remove('active');
                document.querySelector('.menu__list .menu__item a[href*='+id + ']').classList.add('active')
                menuActive.style.top =`calc(${(document.querySelector('.menu__list .menu__item a[href*='+id + ']').offsetTop)}px)` 
                     })
                 }
            })

    }

    
})

btns.forEach((btn,i)=>{         
    btn.addEventListener('click',(e)=>{
        e.preventDefault()
        if(i==0){
            console.log('first');
            lenis.scrollTo(0,{offset:0})
            for(let p=0 ; p< btns.length ; p++){
                btns[p].classList.remove('active');
              }
              btn.classList.add('active')
        }
        else{
            for(let p=0 ; p< btns.length ; p++){
                btns[p].classList.remove('active');
              }
              btn.classList.add('active');
              let target = e.currentTarget.getAttribute('href')
              lenis.scrollTo(`${target}`,{offset:-190})
        }
  
   });
   })
let IS = false
// show more content
let items =[...document.querySelectorAll('#section-2 .Schemass .Schema')]
document.addEventListener('DOMContentLoaded',()=>{
    items.map((pro,i)=>{
        if(i<2){
            pro.classList.add('show')
        }
        })
        let visibleCount = 3
        let itemPerpage = 3
        let loadMoreBtn = document.querySelector('#section-2 .showMore')
         let showMoreItems = ()=>{
          
          

            for(let i = visibleCount; i < visibleCount + itemPerpage; i++){
                if(items[i]){
                    items[i].classList.add('show')
                }
            }
            visibleCount += itemPerpage
            console.log('showMoreItems');
            console.log('visibleCount',visibleCount);
            console.log('items',items.length);
            if(visibleCount >= items.length){
               console.log(loadMoreBtn);
               loadMoreBtn.querySelector('.text').innerText ='مشاهده موارد کمتر'
               visibleCount = 3
               IS =true
            }
         }
         let showAllItems = ()=>{
            console.log('showAllItems');
            for(let i = 2; i < items.length; i++){
                if(items[i]){
                    items[i].classList.remove('show')
                }
            }
            loadMoreBtn.querySelector('.text').innerText ='مشاهده موارد بیشتر'
            IS =false
         }
         loadMoreBtn.addEventListener('click',()=>{
            !IS ? showMoreItems() : showAllItems()
          
         })
})


// product related slider
let Swiperpro= new Swiper ('.swiper-products', {
    slidesPerView: "auto",
    spaceBetween: 100,
   speed:500,
   grabCursor: true,
   navigation: {
    nextEl: '.Products .swiper-button-next',
    prevEl: '.Products .swiper-button-prev',
  },
  scrollbar: {
    el: '.Products .swiper-scrollbar',
    draggable: true,
  
  },
    }) 
// projec related slider
let Swiperproject= new Swiper ('.swiper-projects', {
    slidesPerView: "auto",
    spaceBetween: 50,
   speed:500,
   grabCursor: true,
   navigation: {
    nextEl: '.Projects .swiper-button-next',
    prevEl: '.Projects .swiper-button-prev',
  },
  scrollbar: {
    el: '.Projects .swiper-scrollbar',
    draggable: true,
  
  },
    }) 