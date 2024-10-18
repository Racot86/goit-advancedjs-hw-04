import{S as v,a as P,i as k}from"./assets/vendor-BRruC4i2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function L(o){const t=i=>{let e=document.createElement("div");return e.innerHTML=i.trim(),e.firstChild};let a=new DocumentFragment;return o.length>0?o.forEach(i=>{const{largeImageURL:e,webformatURL:s,likes:r,views:q,comments:x,downloads:T}=i;a.appendChild(t(`
        <div class="gallery-item">
              <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  src="${s}"
                />
              </a>
              <div class="bottom-panel">
              <div class="icon-wrapper">
                <div class="like-chip">
                  <span class="material-symbols-outlined">thumb_up</span>
                  <p class="like-number chip-text">${r}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">visibility</span>
                  <p class="like-number chip-text">${q}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">chat</span>
                  <p class="like-number chip-text">${x}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">download</span>
                  <p class="like-number chip-text">${T}</p>
                </div>
                </div>
              </div>
        </div>`))}):a.appendChild(t(`
        <div class="not-found">
              <span class="material-symbols-outlined">search_off</span>
              <p>Sorry, there are no images matching your search query. Please try again!</p>
        </div>`)),a.children[0].classList.add("scroll"),a}new v(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1});const d={maxPages:1,data:{}};async function b(o,t="flower",a=1,i=20){const e={key:o,q:t,image_type:"photo",orientation:"portrait",safesearch:"true",page:a,per_page:i};let s=await P.get("https://pixabay.com/api/",{params:e});return d.data=s.data.hits,d.maxPages=Math.ceil(s.data.totalHits/i),d}let m=document.querySelector(".gallery");const u=document.querySelector(".search-bar"),p=document.querySelector(".btn-search"),h=document.querySelector(".input-search"),f=document.querySelector(".loader-btn"),c=document.querySelector(".load-more-btn"),g=document.querySelector(".dot-animation"),y=document.querySelector(".more-text"),E=document.querySelector(".btn-go-up"),S=document.querySelector(".pagination-end");let l=1,n="",w=new v(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1});u.addEventListener("submit",o=>{o.preventDefault(),l=1,c.classList.add("hidden"),S.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),n=u.data.value.trim(),n.length>0?(p.classList.add("hidden"),f.classList.remove("hidden"),b("46528220-f321f8a91f42a85f9ca952d44",n).then(t=>{setTimeout(()=>{m.innerHTML="",m.appendChild(L(t.data)),w.refresh(),p.classList.remove("hidden"),f.classList.add("hidden"),t.maxPages>1&&c.classList.remove("hidden"),document.querySelector(".scroll").classList.remove("scroll")},500)}).catch(t=>{k.error({title:t.message})})):(h.classList.add("blink"),setTimeout(()=>{h.classList.remove("blink")},500))});c.addEventListener("click",o=>{g.classList.remove("hidden"),y.classList.add("hidden"),setTimeout(()=>{l+=1,b("46528220-f321f8a91f42a85f9ca952d44",n,l).then(t=>{t.data.length>0&&(m.appendChild(L(t.data)),w.refresh()),console.log(t.maxPages+" "+l),l===t.maxPages&&(c.classList.add("hidden"),S.classList.remove("hidden")),g.classList.add("hidden"),y.classList.remove("hidden");const a=document.querySelector(".scroll");window.scrollBy({top:a.getBoundingClientRect().top-16,behavior:"smooth"}),a.classList.remove("scroll")})},500)});E.addEventListener("click",o=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
