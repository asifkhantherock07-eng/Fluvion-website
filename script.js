
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
