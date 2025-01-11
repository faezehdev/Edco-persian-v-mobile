let mapIran = document.querySelector('.Map_1')
let xLat = mapIran.getAttribute('data-x')
let yLat = mapIran.getAttribute('data-y')
let re1 = yLat.replace('<p>','')
yLat = re1.replace('</p>','')
let map_1 = L.map('Map_1',{
    center:[yLat,xLat],
    zoom:4,
    scrollWheelZoom:false
})
        let tiles= new L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
zoom:4
}).addTo(map_1);
var customIcon = L.icon({
  iconUrl: './images/location.png',
  iconSize: [30, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
  });
var activeIcon = L.icon({
  iconUrl: './images/activeLocation.png',
  iconSize: [30, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
  });
  var marker1 = L.marker([yLat,xLat],{ icon: activeIcon,dataId:9533}).addTo(map_1);
  var marker2 = L.marker([40.1792,44.4991],{ icon: customIcon,dataId:2372533}).addTo(map_1);
  
  let countbranch = document.querySelectorAll('p.branch')

for(let i = 0 ; i <countbranch.length ; i++){
    fetch(`http://r98w118.undertest.ir/loadBrench.inc?id=${countbranch[i].innerHTML}`)
    .then((response)=>{
     return response.text()
    })
    .then((html)=>{
       
        const parser = new DOMParser()
        const doc = parser.parseFromString(html,'text/html')
        let productsSec = doc.querySelector('.branch')
        let parent = document.querySelector('.Branches')
            parent.appendChild(productsSec)
          
        })
    }


  marker1.on('click', function(e){
    console.log(e);
    this.setIcon(activeIcon)
    marker2.setIcon(customIcon)
    let parent = document.querySelector('.Branches')
    let parent2 = document.querySelector('.contact-company')
      while (parent.firstChild){
        parent.removeChild(parent.firstChild)
      }
      while (parent2.firstChild){
        parent2.removeChild(parent2.firstChild)
      }
      let id= this.options.dataId
      console.log('id',id);
      
      fetch(`http://r98w118.undertest.ir/loadMainCenter.inc?id=${id}`)
      .then((response)=>{
       return response.text()
      })
      .then((html)=>{
         
          const parser = new DOMParser()
          const doc = parser.parseFromString(html,'text/html')
          let Sec = doc.querySelector('.RightSec')
          let parent = document.querySelector('.contact-company')
          console.log(Sec,'Sec');
          
          while (parent.firstChild){
            parent.removeChild(parent.firstChild)
          }
              parent.appendChild(Sec)
            
          })
  let countbranch = document.querySelectorAll('p.branch')

  for(let i = 0 ; i <countbranch.length ; i++){
      fetch(`http://r98w118.undertest.ir/loadBrench.inc?id=${countbranch[i].innerHTML}`)
      .then((response)=>{
       return response.text()
      })
      .then((html)=>{
         
          const parser = new DOMParser()
          const doc = parser.parseFromString(html,'text/html')
          let productsSec = doc.querySelector('.branch')
          let parent = document.querySelector('.Branches')
             
            parent.appendChild(productsSec)                    
            
          })
      }
  })
  marker2.on('click',function(e){
    console.log(e);
    this.setIcon(activeIcon)
    marker1.setIcon(customIcon)
   let id= this.options.dataId
   console.log(id,'id');
   let parent = document.querySelector('.Branches')
   while (parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
    fetch(`http://r98w118.undertest.ir/loadCenter.inc?id=${id}`)
    .then((response)=>{
     return response.text()
    })
    .then((html)=>{
       
        const parser = new DOMParser()
        const doc = parser.parseFromString(html,'text/html')
        let Sec = doc.querySelector('.RightSec')
        let parent = document.querySelector('.contact-company')
        console.log(Sec,'Sec');
        while (parent.firstChild){
          parent.removeChild(parent.firstChild)
        }
            parent.appendChild(Sec)
          
        })

        fetch(`http://r98w118.undertest.ir/loadBrench.inc?id=0000`)
        .then((response)=>{
         return response.text()
        })
        .then((html)=>{
           
            const parser = new DOMParser()
            const doc = parser.parseFromString(html,'text/html')
            let productsSec = doc.querySelector('.branch')
            let parent = document.querySelector('.Branches')
               
              parent.appendChild(productsSec)                    
              
            })
        
  })

