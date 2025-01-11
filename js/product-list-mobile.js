
let countCat = document.querySelectorAll('p.subcat')

for(let i = 0 ; i <countCat.length ; i++){
    fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${countCat[i].innerHTML}`)
    .then((response)=>{
     return response.text()
    })
    .then((html)=>{
       
        const parser = new DOMParser()
        const doc = parser.parseFromString(html,'text/html')
        let productsSec = doc.querySelector('.productContainer')
        let parent = document.querySelector('.pros')
            if(i >0){
                console.log('index > 0');              
                productsSec.querySelector('.ProNames .name1 ').remove()
                productsSec.querySelector('.ProNames .line  ').remove()    
            parent.appendChild(productsSec)

            }
          else{
            parent.appendChild(productsSec)
          }
                
let products =[...document.querySelectorAll('.product-c')]
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
let proContainer = document.querySelector('.products')
proContainer.addEventListener('mouseover',(e)=>{
    products.map(pro=>{
        pro.classList.remove('hover')
       }) 
    })

    })
}

