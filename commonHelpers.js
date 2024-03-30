import{S as h,i as l}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=o=>o.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href ="${t.largeImageURL}">
        <img class="gallery-image"
        width="1280"
        height="152"
        src="${t.webformatURL}"
        data-source="${t.largeImageURL}"
        alt="${t.tags}" />
        </a>
        <ul class="gallery-description">
        <li>
        <h3>Likes</h3><p>${t.likes}</p>
        </li>
        <li>
        <h3>Views</h3><p>${t.views}</p>
        </li>
        <li>
        <h3>Comments</h3><p>${t.comments}</p>
        </li>
        <li>
        <h3>Downloads</h3><p>${t.downloads}</p>
        </li>
        </ul>
        </li>`).join(""),a=document.querySelector(".gallery"),c=document.querySelector(".form"),m={captionsData:"alt"};let u=new h(".gallery a",m);u.on("show.simplelightbox",function(){});c.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements.image.value.trim();a.innerHTML='<div class="loader"></div>',f(t).then(s=>{const i=p(s.hits);a.innerHTML=i,u.refresh(),s.hits.length===0&&l.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(s=>{l.error({maxWidth:"432px",height:"48px",color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{c.requestFullscreen()})});function f(o){const t="https://pixabay.com",s="/api/",i=new URLSearchParams({key:"43037018-42eeb016e636e06528ba4e47a",q:o,image_type:"photo",orientation:"horisontal",safesearch:"true"}),e=`${t}${s}?${i}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(response.status);return r.json()})}
//# sourceMappingURL=commonHelpers.js.map
