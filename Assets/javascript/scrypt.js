document.addEventListener("DOMContentLoaded", function() {
    // Activate the carousel
    
    $(document).ready(function(){
        
        // Start carousel
        $('#carouselExample').carousel();
        // Set interval to change slide every 2 seconds
        setInterval(function(){
          $('#carouselExample').carousel('next');
        }, 5000);
      });

       var container = document.querySelector('.image-container');
       var images = container.querySelectorAll('img');
       var containerWidth = container.offsetWidth;

       var totalWidth = 0;
       images.forEach(function(image) {
        totalWidth += image.offsetWidth;
       });

       var animationDuration = totalWidth / containerWidth * 20; // Adjust as needed

       container.style.animationDuration = animationDuration + 's';

       //timepass

  
       
  });