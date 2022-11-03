//Loads all the images with data-src attribute
const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
   const src = img.getAttribute("data-src");
    if(!src) {
       return;
    }
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
      img.removeAttribute('data-src');
    };
  }

  const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px -10px 0px"
  };

//Intersection Observer: load target images only when the user scrolls down.
const imgObserver = new IntersectionObserver((entries, 
    imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
}); 
