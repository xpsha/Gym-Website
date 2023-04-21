// This fetches the assets needed for the 3x3gallery using the fetch dataset
fetch("assets/GalleryImages.json")

// This is a then function which passes the result which is the res part
.then(function(res) {

  // Gets the JSON representation of the response object using a then function
  res.json().then(function(json) {

  // Loop over each object in our JSON object (array) each time the function is ran and two function items are passed to this function element and index
    json.forEach(function(el) {

      // Creates a new gallery item container (also links to the image using a for anchor)
      var galleryItem = document.createElement('a');
      
      // Gives this div a class name called gallery-item
      galleryItem.setAttribute('class', 'gallery-item');
      
      // Adds the href attribute to the anchor using the element url
      galleryItem.setAttribute('href', el.url);
      
      // Opens the image in a new tab
      galleryItem.setAttribute('target', '_blank');
      
      // This will create a new image element
      var image = document.createElement('img');

       // This will set some attributes for the image
      image.setAttribute('src', el.url);        // The url of the image
      image.setAttribute('alt', el.caption);    // The alternative text
      image.setAttribute('title', el.caption);  // The tooltip
      
      // This will create a caption element below each image
      var caption = document.createElement('caption');
      
      // Adds text content to caption
      caption.innerText = el.caption;

      // Appends the image and caption to our gallery item container using appendChild
      galleryItem.appendChild(image);
      galleryItem.appendChild(caption);
      
      // Appends the gallery item to our gallery element using appendChild
      gallery.appendChild(galleryItem);
    });
  });
});
