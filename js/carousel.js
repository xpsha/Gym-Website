
    // This is the Images container for the carousel to be used in Json
    var images = document.getElementById('carouselImages');
    
    // This is the Image caption container that will be used by json
    var caption = document.getElementById('carouselCaption');
    
    // Previous image button container which will be used by json
    var prev = document.getElementById('carouselPrev');
    
    // Next image button container which will be used by json
    var next = document.getElementById('carouselNext');
    
    
    // This fetches the assets needed for the carousel using the fetch dataset
    fetch("assets/CarouselImages.json")
    
    // This is a then function which passes the result which is the res part
    .then(function(res) {
    
      // Gets the JSON representation of the response object using a then function
      res.json().then(function(json) {
    
        // Loop over each object in our JSON object (array) each time the function is ran and two function items are passed to this function element and index
        json.forEach(function(el, i) {
    
          // This will create a new image element
          var image = document.createElement('img');
    
          // This will set some attributes for the image
          image.setAttribute('src', el.url);        // The url of the image
          image.setAttribute('alt', el.caption);    // The alternative text
          image.setAttribute('title', el.caption);  // The tooltip
    
          // Append this image to the carouselImages element
          images.appendChild(image);
        });
        
        // Once the images are all loaded in the carousel will be setup
        // We pass the JSON object (array) to this function called setupCarousel
        setupCarousel(json);
      });
    });
    
    
    // Carousel setup function
    // This function accepts the JSON object (array) of images as an argument
    function setupCarousel(json) {
    
      // Number of children in the carouselImages element
      var imageCount = images.childElementCount;
    
      // Current image in view at any given time
      var currentImage = 1;
    
      // Width of the images (could be calculated from clientWidth images.getElementsByTagName('img')[0].clientWidth)
      var imageWidth = 1000;
      
      // Previous button
      // Calls an anonymous function when the prev button is clicked
      prev.addEventListener('click', function() {
    
        // If the image in view is not the first image reduces the image index
        if(currentImage != 1) {
    
          // Decrement the current image reference
          --currentImage;
    
          // Moves the previous image into view using the left property which is equal to the currentimage index and the image width of the images
          images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
        
        // Updates the caption for the current image
        caption.innerText = json[currentImage - 1].caption;
      });
    
      // Next button
      // Calls an anonymous function when the next button is clicked
      next.addEventListener('click', function() {
    
        // If the image in view is not the last image
        if(currentImage != imageCount) {
    
          // Increment the current image reference
          ++currentImage;
    
          // Move the next image into view using the left property
          images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
        
        // Update our caption
        caption.innerText = json[currentImage - 1].caption;
      });
      
      // Update our caption
      caption.innerText = json[currentImage - 1].caption;
    }
    
