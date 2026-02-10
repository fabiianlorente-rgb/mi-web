// Smooth Scroll para los links del navbar
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({behavior:'smooth'});
  });
});

// Hover animado simple para botones
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn=>{
  btn.addEventListener('mouseenter',()=> btn.style.transform='scale(1.05)');
  btn.addEventListener('mouseleave',()=> btn.style.transform='scale(1)');
});
