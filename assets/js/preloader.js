(function() {
  var preloader = document.getElementById('js-preloader');
  function hidePreloader() {
    if (!preloader) return;
    preloader.style.transition = 'opacity 150ms ease';
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    preloader.style.visibility = 'hidden';
    setTimeout(function(){ try { preloader.parentNode && preloader.parentNode.removeChild(preloader); } catch(e){} }, 180);
  }
  // Hard cap: hide preloader quickly regardless of other scripts
  setTimeout(hidePreloader, 600);
  // Prefer DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hidePreloader);
  } else {
    hidePreloader();
  }
  // Nudge hero video play after first paint
  window.requestAnimationFrame(function(){
    var video = document.querySelector('.hero-video');
    if (video && video.paused) {
      try { video.play && video.play(); } catch(e){}
    }
  });
})();