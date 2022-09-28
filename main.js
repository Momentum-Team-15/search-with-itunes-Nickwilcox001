const url = 'https://proxy-itunes-api.glitch.me/search?term=jack+johnson'

fetch(url, {
    method: 'GET',
    headers: {'Contenet-Type': 'application/json'},

})
.then(function(response){
    return response.json()
})
.then(function(data){

console.log(data.results)

})