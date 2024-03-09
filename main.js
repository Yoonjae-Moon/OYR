document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = ['photos/photo1.png', 'photos/photo2.png', 'photos/photo3.png', 'photos/photo4.png'];
    const slideshowElement = document.getElementById('slideshow');
  
    function changeImage() {
      // Reset opacity to 0 to start the fade-out effect
      slideshowElement.style.opacity = 0.5;
  
      // Change the image after the opacity transition has finished
      setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        slideshowElement.src = images[currentImageIndex];
  
        // Fade-in the new image
        slideshowElement.style.opacity = 1;
      }, 1000); // Match this timeout with your CSS transition duration
    }
  
    // Initially, fade in the first image
    window.onload = () => { slideshowElement.style.opacity = 1; };
  
    // Change the image every 4 seconds
    setInterval(changeImage, 4000);
  });
  