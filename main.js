
const musicContainer = document.querySelector("#musicContainer")
const form = document.querySelector("#searchForm")
let searchField = document.querySelector("#search-word")

let searchTerm = ""
let sound = document.querySelector('#audio-preview')
let playingSong = document.querySelector('.current-song')

// function playSound()
// {
//     sound.src = `${datas.previewUrl}`
//     playingSong.innerText = `Currently playing: ${datas.trackName} by ${datas.artistName}`
//     sound.play();
// }

function addAddition (name)
{
    for(let letter of name)
    {
        let searchPlus = ""
        if(name.at(letter) === " ")
        {
            searchPlus = (name.slice(0, letter) + "+" + name.slice(letter+1) + "&limit=15")
        }
    }
}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    searchTerm = searchField.value
    addAddition(searchTerm)
    console.log(searchTerm)



console.log(searchTerm)
let url = 'https://proxy-itunes-api.glitch.me/search?term='
url += searchTerm



fetch(url, {
    method: 'GET',
    headers: {'Contenet-Type': 'application/json'},

})
.then(function(response){
    return response.json()
})
.then(function(data){
console.log(data.results)
for (let datas of data.results)
    {
        let songDiv = document.createElement("div")
        let thumbnail = document.createElement("img")
        let songName = document.createElement("p")
        let artist = document.createElement("p")
        let playButton = document.createElement("audio")

        

        
        songName.innerText = `${datas.trackName}`
        artist.innerText = `${datas.artistName}`
        thumbnail.src = `${datas.artworkUrl100}`
        playButton.src = `${datas.previewUrl}`
        playButton.controls = true

        songDiv.appendChild(thumbnail)
        songDiv.appendChild(songName)
        songDiv.appendChild(artist)
        songDiv.appendChild(playButton)

        musicContainer.appendChild(songDiv)

        thumbnail.classList.add("thumbnail")
        songDiv.classList.add("musicInfo")
        songName.classList.add("song")
        artist.classList.add("artist")
        


        // songDiv.addEventListener('click', e =>{
        //     playSound()
        // })
            



    }


})
})
