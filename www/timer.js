// Bridge file to select correct timer implementation on load
(function(){
  const path = window.location.pathname;
  if (path.endsWith('easy.html')) {
    const s = document.createElement('script'); s.src = 'timer30.js'; document.body.appendChild(s);
  } else if (path.endsWith('medium.html')) {
    const s = document.createElement('script'); s.src = 'timer45.js'; document.body.appendChild(s);
  } else if (path.endsWith('hard.html')) {
    const s = document.createElement('script'); s.src = 'timer60.js'; document.body.appendChild(s);
  } else {
    const s = document.createElement('script'); s.src = 'timer30.js'; document.body.appendChild(s);
  }
})();