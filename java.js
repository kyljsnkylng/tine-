
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.addEventListener('load', function() {
    var audio = document.getElementById('audio');
    // Unmute after page load
    audio.muted = false;
    audio.play().catch(function(error) {
        console.log('Autoplay blocked:', error);
        // Optionally, handle the error
    });
});
