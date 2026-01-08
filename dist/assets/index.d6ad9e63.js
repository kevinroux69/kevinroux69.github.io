const tf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;
    for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);
    new MutationObserver(i=>{
        for(const o of i)if(o.type==="childList")
            for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)
        }
    ).observe(document,{
        childList:!0,subtree:!0
    }
);
function n(i){const o={};
return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}
function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};tf();var he={exports:{}},z={};
