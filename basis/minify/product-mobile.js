let products=[...document.querySelectorAll(".product-c")];document.addEventListener("scroll",(()=>{products.map((e=>{e.getBoundingClientRect().top+100<window.innerHeight&&e.classList.add("fade-in")}))}));let texts,countCat=document.querySelectorAll("p.subcat"),titles=[],titleTemp="",opTemp="";if(countCat){for(let t=0;t<countCat.length;t++)fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${countCat[t].innerHTML}`).then((e=>e.text())).then((e=>{const n=(new DOMParser).parseFromString(e,"text/html");if(titles.push(n.querySelector(".name1").innerHTML),1===t){console.log(titles[0]);let e=`\n            <span class="ProNames w-auto flex items-center gap-[1em] justify-center ">\n            <span class="name1 font-IRANSansWebFANUM700 font-semibold text-xl leading-31.03 text-dark">\n            ${titles[0]}\n            </span>\n            <span class="line w-[4px] flex h-[44px] bg-dark"></span>\n            <span class="name2 font-IRANSansWebFANUM300 font-light text-xl leading-31.03 text-dark">\n            ${titles[0]}\n            </span>\n            </span>\n`;document.querySelector(".default_option li .option .title ").innerHTML=e}let r=document.querySelector(".select_ul  "),l=document.createElement("li"),a=document.createElement("div"),c=document.createElement("p");l.setAttribute("data-catid",countCat[t].innerHTML),l.appendChild(a),a.appendChild(c),l.className+="group [&.active]:bg-gray2 hover:bg-gray2 duration-100 py-[10px] px-[1em] cursor-pointer",a.className+="option",c.className+="font-IRANSansWebFANUM300 font-light text-lg leading-28.17 text-dark",r.appendChild(l),null!=titles[t]&&(c.innerHTML=titles[t])}));function loadPro(e){console.log(e,"Selectcatid"),fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${e}`).then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelectorAll(".product-c"),n=document.querySelector(".products");for(;n.firstChild;)n.removeChild(n.firstChild);t.forEach((e=>{n.appendChild(e)}));let r=[...document.querySelectorAll(".product-c")];document.addEventListener("scroll",(()=>{r.map((e=>{e.getBoundingClientRect().top+100<window.innerHeight&&e.classList.add("fade-in")}))}))}))}fetch(`http://r98w118.undertest.ir/loadProduct.inc?catid=${countCat[0]?.innerHTML}`).then((e=>e.text())).then((e=>{let t=(new DOMParser).parseFromString(e,"text/html").querySelectorAll(".product-c"),n=document.querySelector(".products");t.forEach((e=>{n.appendChild(e)}));let r=[...document.querySelectorAll(".product-c")];document.addEventListener("scroll",(()=>{r.map((e=>{e.getBoundingClientRect().top+100<window.innerHeight&&e.classList.add("fade-in")}))}))})),document.querySelectorAll(".default_option").forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.parentElement.classList.toggle("active"),e.currentTarget.nextElementSibling.querySelectorAll(".select_ul li").forEach((e=>{e.addEventListener("click",(e=>{let t=e.currentTarget.querySelector("p").innerHTML;e.currentTarget.parentElement.previousElementSibling.querySelector(".title ").innerHTML=t,[...document.querySelectorAll(".select_ul li")].map((e=>{e.classList.remove("active")})),e.currentTarget.classList.add("active"),loadPro(e.currentTarget.getAttribute("data-catid")),e.currentTarget.parentElement.parentElement.querySelector(".default_option ").classList.add("topsec"),e.currentTarget.parentElement.parentElement.classList.remove("active")}))}))}))})),products.forEach((t=>{t.addEventListener("mouseover",(t=>{t.stopPropagation(),e(t.currentTarget),t.currentTarget.classList.add("active")})),t.addEventListener("mouseleave",(e=>{t.classList.remove("active"),t.classList.remove("hover")}))}));let e=()=>{products.map((e=>{e.classList.add("hover")}))};document.querySelector(".products").addEventListener("mouseover",(e=>{products.map((e=>{e.classList.remove("hover")}))}))}else document.querySelector(".SelectBoxes").classList.add("hide");