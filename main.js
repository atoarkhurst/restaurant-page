(()=>{"use strict";function e(e,t,n={}){const c=document.createElement(e);for(let e in n)"innerHTML"===e?c.innerHTML=n[e]:"classList"===e?c.classList.add(n[e]):c[e]=n[e];return t.appendChild(c),c}function t(e,t,n={}){const c=document.createElement(e);for(let e in n)"innerHTML"===e?c.innerHTML=n[e]:"classList"===e?c.classList.add(n[e]):c[e]=n[e];return t.appendChild(c),c}!function(){const t=e("header",document.querySelector("#content"),{classList:"header"}),n=e("nav",t,{});e("div",n,{innerHTML:"Home",classList:"home-tab"}),e("div",n,{innerHTML:"Menu",classList:"menu-tab"}),e("div",n,{innerHTML:"Contact",classList:"contact-tab"}),document.createElement("h1").innerHTML="Welcome to Bella Cucina Virtuale",document.createElement("img").src="https://placehold.co/600x400",document.createElement("p").innerHTML="Step into the virtual world of culinary elegance at Bella Cucina Virtuale, where innovation meets tradition."}();const n=document.querySelector(".menu-tab");document.querySelector(".contact-tab"),n.addEventListener("click",(function(){const e=document.querySelector("#content");t("h1",e,{innerHTML:"Our Menu"});const n=t("div",e,{classList:"entree-container"});t("h2",n,{innerHTML:"Main Entrees"});const c=t("div",n,{classList:"entree-items"});[{imgSrc:"https://placehold.co/600x400",title:"Sous-Vide Lamb Shank",description:"Tender lamb, slow-cooked to perfection and served atop a bed of saffron risotto. Accompanied by a rich red wine reduction sauce."},{imgSrc:"https://placehold.co/600x400",title:"Sous-Vide Lamb Shank",description:"Tender lamb, slow-cooked to perfection and served atop a bed of saffron risotto. Accompanied by a rich red wine reduction sauce."}].forEach((e=>{const n=t("div",c,{classList:["entree"]});t("img",n,{src:e.imgSrc}),t("h3",n,{innerHTML:e.title}),t("p",n,{innerHTML:e.description})}))}))})();