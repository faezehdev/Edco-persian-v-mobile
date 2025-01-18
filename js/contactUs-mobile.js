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
 if(productsSec.querySelector('h2') ==null){
    console.log('نمایندگی وجود ندارد');
    let elseSec =document.createElement('p')
    elseSec.innerHTML ='نمایندگی وجود ندارد'
    parent.appendChild(elseSec) 
    elseSec.classList.add('else')
}
else{
    console.log('نمایندگی وجود دارد');
    parent.appendChild(productsSec) 
}
 })
 }
 var markers = [{
 name: 'Iran',
 coords: [32, 53],
 id:'Iran',
 style: {
 image: "./images/Group.png"
 }
 },
 {
 name: 'Armenia',
 id:'Armenia',
 coords: [40, 45],
 style: {
 image: "./images/Group.png"
 }
 },
 ];
 
 var map = new JsVectorMap({
 map: 'world',
 selector: '#map-wrapper',
 // markers:markers,
 regionsSelectable: true,
 markersSelectable: true, // The markers are selectable,
 selectedMarkers: [0], // Select the first marker in the array
 // -------- Events --------

 onMarkerSelected: function (code, isSelected, selectedMarkers) {
 
 let selectedMarkerss = map.getSelectedMarkers()
 if(selectedMarkerss.includes(code)){
 selectedMarkerss.forEach(element => {
 
 if(element != code){
 map.clearSelectedMarkers([element])
 console.log(map.getSelectedMarkers());

 }
 });
 }
 let markerElem = document.querySelector(`.jsvmap-marker[data-index="${code}"]`)
 let elems = document.querySelectorAll('.jsvmap-marker')
 switch(code){
 case "0" :{
 console.log('Iran');
 let markerElem = document.querySelector(`.jsvmap-marker[data-index="0"]`)
 if(selectedMarkerss.includes(code)){
 selectedMarkerss.forEach(element => {
 
 if(element != code){
 map.clearSelectedMarkers([element])
 console.log(map.getSelectedMarkers());
 markerElem.setAttribute('href',"./images/activeLocation.png")
 }
 });
 }
 markerElem.classList.add('clicked')
 markerElem.setAttribute('data-clicked',"true")
 let parent = document.querySelector('.Branches')
 let parent2 = document.querySelector('.contact-company')
 while (parent.firstChild){
 parent.removeChild(parent.firstChild)
 }
 while (parent2.firstChild){
 parent2.removeChild(parent2.firstChild)
 }
 let id= 9533
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
 if(productsSec.querySelector('h2') ==null){
    console.log('نمایندگی وجود ندارد');
    let elseSec =document.createElement('p')
    elseSec.innerHTML ='نمایندگی وجود ندارد'
    parent.appendChild(elseSec) 
    elseSec.classList.add('else')
}
else{
    console.log('نمایندگی وجود دارد');
    parent.appendChild(productsSec) 
}
 })
 }
 break
 }
 case "1" :{
 console.log('Armanestan');
 let markerElem = document.querySelector(`.jsvmap-marker[data-index="1"]`)
 if(selectedMarkerss.includes(code)){
 selectedMarkerss.forEach(element => {
 
 if(element != code){
 map.clearSelectedMarkers([element])
 console.log(map.getSelectedMarkers());
 markerElem.setAttribute('href',"./images/activeLocation.png")
 }
 });
 }
 let id= 9533
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
console.log(productsSec.querySelector('.contact-box'));
if(productsSec.querySelector('h2') ==null){
    console.log('نمایندگی وجود ندارد');
    let elseSec =document.createElement('p')
    elseSec.innerHTML ='نمایندگی وجود ندارد'
    parent.appendChild(elseSec) 
    elseSec.classList.add('else')
}
else{
    console.log('نمایندگی وجود دارد');
    parent.appendChild(productsSec) 
}

 })
 break
 }
 default:{
 break
 }
 }
 
 
 },
 onRegionTooltipShow: function (tooltip, code) {
 if (code === 'RU') {
 tooltip.selector.innerHTML = tooltip.text() + ' <b>(Hello Russia)</b>'
 }
 },
 
 
 // -------- Labels --------
 // labels: {
 // markers: {
 // render: function(index) {
 // return markers[index].name;
 // },
 // offsets: function(index) {
 // return markers[index].offset || [0, 0]
 // }
 // },
 // regions: {
 // render: function(code) {
 // var codes = ['EG', 'KZ', 'CN']
 
 // if (codes.indexOf(code) > -1) {
 // return ''
 // }
 // },
 // }
 // },
 
 // -------- Region and label style --------
 regionStyle: {
 selected: {
 // fill: "#5c5cff"
 }
 },
 regionLabelStyle: {},
 
 // -------- Marker and label style --------
 markers: markers,
 markerStyle: {
 // initial: {
 // fill: '#e3eaef',

 // },
 // hover: {
 // stroke: "#676767",
 // fillOpacity: 1,
 // strokeWidth: 2.5,
 // fill: '#e3eaef',

 // image: "./images/activeLocation.png"
 // },
 selected: {
 fill: '#e3eaef',
 image: "./images/activeLocation.png"
 }
 },
 markerLabelStyle: {
 initial: {
 fontFamily: 'Poppins',
 fontSize: 13,
 fontWeight: 500,
 fill: '#35373e',
 },
 },

 })
 
 function $(selector) {
 return document.querySelector(selector)
 }


 try {
 fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
 return true;
 }).catch(function(e) {
 var carbonScript = document.createElement("script");
 carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
 carbonScript.id = "_carbonads_js";
 document.getElementById("carbon-block").appendChild(carbonScript);
 });
 } catch (error) {
 console.log(error);
 }
 
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
 ga('create', 'UA-46156385-1', 'cssscript.com');
 ga('send', 'pageview');
 