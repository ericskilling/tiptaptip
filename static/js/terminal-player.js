/**
 * WebTUI-Style Audio Player
 */
document.addEventListener('DOMContentLoaded', function() {
  const players = document.querySelectorAll('.wui-player');
  
  players.forEach(function(player) {
    const audio = player.querySelector('audio');
    const icon = player.querySelector('.wui-icon');
    const progressFill = player.querySelector('.wui-progress-fill');
    const progressBar = player.querySelector('.wui-progress');
    const currentTimeEl = player.querySelector('.wui-time.current');
    const durationEl = player.querySelector('.wui-time.total');
    
    if (!audio || !icon) return;
    
    // Play/Pause on click
    icon.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        icon.textContent = '▮▮';
        icon.classList.add('playing');
      } else {
        audio.pause();
        icon.textContent = '▶';
        icon.classList.remove('playing');
      }
    });
    
    // Update progress
    audio.addEventListener('timeupdate', function() {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = progress + '%';
        currentTimeEl.textContent = '[' + formatTime(audio.currentTime) + ']';
      }
    });
    
    // Update duration
    audio.addEventListener('loadedmetadata', function() {
      durationEl.textContent = '[' + formatTime(audio.duration) + ']';
    });
    
    // Handle ended
    audio.addEventListener('ended', function() {
      icon.textContent = '▶';
      icon.classList.remove('playing');
      progressFill.style.width = '0%';
      currentTimeEl.textContent = '[00:00]';
    });
    
    // Click to seek
    progressBar.addEventListener('click', function(e) {
      const rect = progressBar.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audio.currentTime = percent * audio.duration;
    });
    
    function formatTime(seconds) {
      if (isNaN(seconds)) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');
    }
  });
});
