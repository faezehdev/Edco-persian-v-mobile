// show more project
let blogs =[...document.querySelectorAll('.blog')]
document.addEventListener('DOMContentLoaded',()=>{
    let visibleCount = 4
    let itemPerpage = 4
    let loadMoreBtn = document.querySelector('.showMoreBTN')
    if(blogs.length >= 4){
   loadMoreBtn.style.display='none'
    }
 
    blogs.map((pro,i)=>{
        console.log(pro);
        
        if(i<4){
            pro.classList.add('show')
            
        }
       

        })
      
         let showMoreItems = ()=>{
           
            
            for(let i = visibleCount; i < visibleCount + itemPerpage; i++){
                if(blogs[i]){
                    blogs[i].classList.add('show')
                }
            }
            console.log('visibleCount',visibleCount);
            visibleCount += itemPerpage
            
            if(visibleCount >= blogs.length){
                loadMoreBtn.style.display='none'
            }
         }
         loadMoreBtn.addEventListener('click',()=>{
            showMoreItems()
         })
})

