import{S as u,i as p}from"./assets/vendor-CNpq9t8i.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(i){const s=a=>{let e=document.createElement("div");return e.innerHTML=a.trim(),e.firstChild};let r=new DocumentFragment;return i.length>0?i.forEach(a=>{const{largeImageURL:e,webformatURL:t,likes:o,views:c,comments:d,downloads:m}=a;r.appendChild(s(`
        <div class="gallery-item">
              <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  src="${t}"
                />
              </a>
              <div class="bottom-panel">
                <div class="like-chip">
                  <span class="material-symbols-outlined">thumb_up</span>
                  <p class="like-number chip-text">${o}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">visibility</span>
                  <p class="like-number chip-text">${c}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">chat</span>
                  <p class="like-number chip-text">${d}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">download</span>
                  <p class="like-number chip-text">${m}</p>
                </div>
              </div>
        </div>`))}):r.appendChild(s(`
        <div class="not-found">
              <span class="material-symbols-outlined">search_off</span>
              <p>Sorry, there are no images matching your search query. Please try again!</p>
        </div>`)),r}const f=document.querySelector(".btn-search"),y=document.querySelector(".loader-btn");let g=new u(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1});function b(i,s="flower",r){const a=new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"portrait",safesearch:"true"}),e={headers:{Accept:"application/json"}};fetch(`https://pixabay.com/api/?${a}`,e).then(t=>t.json()).then(t=>{setTimeout(()=>{r.innerHTML="",r.appendChild(h(t.hits)),window.scrollTo({top:0,behavior:"smooth"}),g.refresh(),f.classList.remove("hidden"),y.classList.add("hidden")},500)}).catch(t=>{p.error({title:t.message})})}let v=document.querySelector(".gallery");const n=document.querySelector(".search-bar"),L=document.querySelector(".btn-search"),l=document.querySelector(".input-search"),S=document.querySelector(".loader-btn");n.addEventListener("submit",i=>{i.preventDefault();const s=n.data.value.trim();s.length>0?(L.classList.add("hidden"),S.classList.remove("hidden"),b("46528220-f321f8a91f42a85f9ca952d44",s,v)):(l.classList.add("blink"),setTimeout(()=>{l.classList.remove("blink")},500))});
//# sourceMappingURL=index.js.map
