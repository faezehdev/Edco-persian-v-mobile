let menuIcon=document.querySelector(".openNav"),menuContainer=document.querySelector(".MB-menu"),toggle=document.querySelectorAll(".openNav .toggle"),menuItems=document.querySelectorAll(".MB-menu ul li"),Isopen=!1;if(document.querySelector(".ContactUS-mobile")){console.log("ContactUS page"),document.querySelector("header").classList.add("whiteHeader")}else{document.querySelector("header").classList.add("otherpage")}if(menuIcon.addEventListener("click",(()=>{if(Isopen){if(document.querySelector(".ContactUS-mobile")){document.querySelector("header").classList.remove("darkHeader")}menuContainer.classList.toggle("open"),document.querySelectorAll("#mobile-header .right .mobile-menu .openNav .toggle").forEach((e=>{e.classList.toggle("active")})),menuItems.forEach((e=>{e.classList.toggle("active")})),console.log(Isopen),Isopen=!1}else{if(menuContainer.classList.toggle("open"),document.querySelector(".ContactUS-mobile")){document.querySelector("header").classList.add("darkHeader")}document.querySelectorAll("#mobile-header .right .mobile-menu .openNav .toggle");document.querySelector("#mobile-header .right .mobile-menu .openNav").style.transform="translateY(-2px)",toggle.forEach((e=>{e.classList.toggle("active")})),menuItems.forEach((e=>{e.classList.toggle("active")})),console.log(Isopen),Isopen=!0}})),document.querySelector(".ContactUS-mobile")){document.querySelector("header").classList.add("whiteHeader")}let langIcon=document.querySelector(".langIcon"),langSVG=document.querySelector(".langIcon svg"),langContent=document.querySelector(".langs");langIcon.addEventListener("click",(()=>{langContent.classList.toggle("openLang"),langSVG.classList.toggle("rotate")}));const lenis=new Lenis({smoothWheel:!0,wheelMultiplier:2});function raf(e){lenis.raf(e),requestAnimationFrame(raf)}requestAnimationFrame(raf),lenis.on("scroll",(e=>{let o=document.querySelector("header");if(0==e.scroll&&(o.classList.remove("goDown"),document.querySelector(".ContactUS-mobile"))){document.querySelector("header").classList.add("whiteHeader")}if(e.scroll>0){if(document.querySelector(".ContactUS-mobile")){document.querySelector("header").classList.remove("whiteHeader")}o.classList.add("goDown")}}));