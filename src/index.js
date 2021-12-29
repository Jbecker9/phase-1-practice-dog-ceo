console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
    fetchBreeds()
    // filter()
})

function imageAdd(url){
    const dogImage = document.getElementById("dog-image-container")
    const img = document.createElement('img');
    dogImage.append(img)
    img.src = url
}

// ------------------------------------------------

// document.addEventListener("DOMContentLoaded", () => {
//     fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(data => {
//     breeds = Object.keys(data.message)
//     breeds.forEach(element => listAdd(element))
//     }
//     // {for(let element of data){
//     //     listAdd(newArray)
//     // }}
//     )
//     })


function listAdd(breed){
    const breedList = document.getElementById('dog-breeds')
    const li = document.createElement("li")
    // li.id = "breed-list"
    li.innerText = breed
    li.className = "dog-list"
    breedList.append(li)
    li.addEventListener("click", () => {
        color = li.style.color = "#FF0000"

        // if(li.style.color = "#000000"){
        // return color = li.style.color = "#FF0000"
        // }
        // else if(li.style = "#FF0000"){
        // return color = li.style.color = "#000000"`
        // }
    })
}

function fetchDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4").then(response => response.json()).then(data => data.message.forEach(element => {
        imageAdd(element)
    }))
}
let allBreeds = []
function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()).then(data => {
    allBreeds = [...Object.keys(data.message)]
    console.log(allBreeds)
    allBreeds.forEach(element => {
        listAdd(element)
    })
    })
    // function filter(){
        const li = document.getElementsByClassName("dog-list")
        const selectorBreeds = document.querySelectorAll(".dog-list")
        const breedDropdown = document.getElementById("breed-dropdown")
        breedDropdown.addEventListener("change", (e) => {
            allBreeds.filter(breed => breed[0] === e.target.value).then(allBreeds.splice(0, allBreeds.length - 1, breed))
        })
    // }
}
