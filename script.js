const size = {
  width: 400,
  height: 400,
};

let activeCanvas;

// Fullscreen mode
window.addEventListener("dblclick", (event) => {
  activeCanvas = event.target;

  if (activeCanvas.classList.contains("glslCanvas")) {
    const fullscreenElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullscreenElement) {
      if (activeCanvas.requestFullscreen) {
        activeCanvas.requestFullscreen();
      } else if (activeCanvas.webkitRequestFullscreen) {
        activeCanvas.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        activeCanvas.width = `${size.width}`;
        activeCanvas.height = `${size.height}`;
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
});
