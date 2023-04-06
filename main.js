let dogBtn = document.querySelector('#dog-btn')
let dogImg = document.querySelector('#dog-img')
let weatherBtn = document.querySelector('#weather-btn')
let txtInput = document.querySelector('#text-input')
let info = document.querySelector('#info')




dogBtn.addEventListener('click', function(){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function(res){
            return res.json()
        })
        .then((data) => {
            dogImg.src = data.message
        })
})


weatherBtn.addEventListener('click', function(event){
    event.preventDefault()
    let city = txtInput.value
    let url = `https://goweather.herokuapp.com/weather/${city}`
    fetch(encodeURI(url))
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            let temp = data.temperature
            let desc = data.description
            let wind = data.wind
            let result = `${temp} | ${desc} | Wind: ${wind}`
            info.innerText = result
            console.log(data)
        })
})