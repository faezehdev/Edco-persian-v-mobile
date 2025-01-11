// show more project
let projects =[...document.querySelectorAll('.project')]
document.addEventListener('DOMContentLoaded',()=>{
    projects.map((pro,i)=>{
        if(i<6){
            pro.classList.add('show')
        }
        })
        let visibleCount = 6
        let itemPerpage = 6
        let loadMoreBtn = document.querySelector('.showMore')
         let showMoreItems = ()=>{
            for(let i = visibleCount; i < visibleCount + itemPerpage; i++){
                if(projects[i]){
                    projects[i].classList.add('show')
                }
            }
            visibleCount += itemPerpage
            
            if(visibleCount >= projects.length){
                loadMoreBtn.style.display='none'
            }
         }
         loadMoreBtn.addEventListener('click',()=>{
            showMoreItems()
         })
})

// blog slider
let SwiperBanner= new Swiper ('.swiper-blogs', {
    slidesPerView: 4,
    spaceBetween: 50,
   speed:2000,
   grabCursor: true,
    }) 