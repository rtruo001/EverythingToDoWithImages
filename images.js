(function(test) {
  function randomizesAllPhotosUsingPicsum() {
    let images = document.querySelectorAll("img")
    images.forEach((image) => {
      let randomNum = Math.floor(Math.random() * 500)
      let width = image.width
      let height = image.height
      if (width <= 0 || height <= 0) {
        width = 200
        height = 200
      }
      image.src = `https://picsum.photos/${width}/${height}/?image=${randomNum}`
    })
  }
  randomizesAllPhotosUsingPicsum();
})()