console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(() => {
    const dogImages = document.getElementById("dog-image-container")
    dogImages.appendChild()
})