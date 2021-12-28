console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4").then(response => response.json()).then(data => data.message.forEach(element => {
        imageAdd(element)
    }))
})

function imageAdd(url){
    const dogImage = document.getElementById("dog-image-container")
    const img = document.createElement('img');
    dogImage.append(img)
    img.src = url
}

// ------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(data => console.log(data) 
    // {for(let element of data){
    //     listAdd(newArray)
    // }}
    )
    })


function listAdd(breed){
    const breedList = document.getElementById('dog-breeds')
    const li = breedList.createElement("li")
    breedList.append(li)
    li.innerHTML = breed
}
