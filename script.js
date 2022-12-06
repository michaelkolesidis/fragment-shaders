const size = {
  width: 500,
  height: 500,
};

// Fullscreen mode
window.addEventListener("dblclick", (event) => {
  if (event.target.classList.contains("glslCanvas")) {
    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullscreenElement) {
      if (event.target.requestFullscreen) {
        event.target.requestFullscreen();
      } else if (event.target.webkitRequestFullscreen) {
        event.target.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        event.target.width = `${size.width}`;
        event.target.height = `${size.height}`;
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
});
