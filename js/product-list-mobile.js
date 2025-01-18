 
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

let countCat = document.querySelectorAll('p.subcat')
let titles =[]
let texts
let titleTemp =``
let opTemp=``
if(countCat || countCat != undefined){


for(let i = 0 ; i <countCat.length ; i++){
 
    fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${countCat[i]?.innerHTML}`)
    .then((response)=>{
     return response.text()
    })
    .then((html)=>{
       
        const parser = new DOMParser()
        const doc = parser.parseFromString(html,'text/html')
        if(doc.querySelector('.name1')!= undefined && doc.querySelector('.name1')?.innerHTML){
            titles.push(doc.querySelector('.name1')?.innerHTML )
        }
      
        if(i===0 || i==1){
            console.log(titles[0]);
            if(doc.querySelector('.productContainer .title').textContent.trim() ==='' ){
                console.log('تایتل ندارد');
                document.querySelector('.SelectBoxes').classList.add('hide')
            }
            else{
                document.querySelector('.SelectBoxes').classList.remove('hide')
                console.log('تایتل دارد');
            }
                        let titleTemp =`
            <span class="ProNames w-auto flex items-center gap-[1em] justify-center ">
            <span class="name1 font-IRANSansWebFANUM700 font-semibold text-xl leading-31.03 text-dark">
            ${titles[0]}
            </span>
            <span class="line w-[4px] flex h-[44px] bg-dark"></span>
            <span class="name2 font-IRANSansWebFANUM300 font-light text-xl leading-31.03 text-dark">
            ${titles[0]}
            </span>
            </span>
`
        let liFirst = document.querySelector('.default_option li .option .title ')
        liFirst.innerHTML = titleTemp
 }
 let titleTemp =`
 <span class="ProNames w-auto flex items-center gap-[1em] justify-center ">
 <span class="name1 font-IRANSansWebFANUM700 font-semibold text-xl leading-31.03 text-dark">
 ${titles[0]}
 </span>
 <span class="line w-[4px] flex h-[44px] bg-dark"></span>
 <span class="name2 font-IRANSansWebFANUM300 font-light text-xl leading-31.03 text-dark">
 ${titles[0]}
 </span>
 </span>
`
let liFirst = document.querySelector('.default_option li .option .title ')
liFirst.innerHTML = titleTemp
            let parentOP = document.querySelector('.select_ul  ')
            let li = document.createElement('li')
            let div = document.createElement('div')
            let p = document.createElement('p')
            console.log(doc.querySelector('.productContainer .title'));
            
          
            li.setAttribute('data-catid',countCat[i].innerHTML)
            li.appendChild(div)
            div.appendChild(p)
            li.className +='group [&.active]:bg-gray2 hover:bg-gray2 duration-100 py-[10px] px-[1em] cursor-pointer'
            div.className +='option'
            p.className +='font-IRANSansWebFANUM300 font-light text-lg leading-28.17 text-dark'
         console.log(titles);
         
            if(titles[i] !=undefined ){
                p.innerHTML  =titles[i]
                parentOP.appendChild(li)
            }
       
        
                

}
)


}

fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${countCat[0]?.innerHTML}`)
.then((response)=>{
 return response.text()
})
.then((html)=>{
 const parser = new DOMParser()
       const doc = parser.parseFromString(html,'text/html')
       let productsSec = doc.querySelectorAll('.product-c')
       let parent = document.querySelector('.products')
      productsSec.forEach((p)=>{
       parent.appendChild(p)
      })
          
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
  
}
)
})
// / SELECTBOX
let defOP = document.querySelectorAll('.default_option')

defOP.forEach((d)=>{
   d.addEventListener('click',(e)=>{
  e.currentTarget.parentElement.classList.toggle("active")
  let lis =e.currentTarget.nextElementSibling.querySelectorAll('.select_ul li')
  lis.forEach(l=>{
   l.addEventListener('click',(e1)=>{
       let currentele = e1.currentTarget.querySelector('p').innerHTML
       e1.currentTarget.parentElement.previousElementSibling.querySelector('.title ').innerHTML = currentele;
       let liss = [...document.querySelectorAll('.select_ul li')]
       liss.map(p=>{
           p.classList.remove('active')
       })
       e1.currentTarget.classList.add("active")
      let Selectcatid = e1.currentTarget.getAttribute('data-catid')
      loadPro(Selectcatid)
       e1.currentTarget.parentElement.parentElement.querySelector('.default_option ').classList.add('topsec')
       e1.currentTarget.parentElement.parentElement.classList.remove("active")
      })
  })
})
})
function loadPro(catid){
   console.log( catid,'Selectcatid');
   fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${catid}`)
.then((response)=>{
 return response.text()
})
.then((html)=>{
 const parser = new DOMParser()
       const doc = parser.parseFromString(html,'text/html')
       let productsSec = doc.querySelectorAll('.product-c')
       let parent = document.querySelector('.products')
     while (parent.firstChild){
       parent.removeChild(parent.firstChild)
     }
      productsSec.forEach((p)=>{
       parent.appendChild(p)
      })
          
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
  
}
)
})
}
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



}
 else{
    document.querySelector('.SelectBoxes').classList.add('hide')
 }

