console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4").then(response => response.json()).then(data => data.message.forEach(element => {
        imageAdd(element)
    }))
})

function imageAdd(url){
    const dogImage = document.getElementById("dog-image-container")
    const img = dogImage.createElement('img')
    dogImage.append(img)
}