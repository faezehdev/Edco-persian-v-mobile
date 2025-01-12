


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
    spaceBetween: 10,
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
    spaceBetween: 10,
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