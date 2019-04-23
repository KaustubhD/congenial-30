let seq = []
handleKey = ev => {
  seq.push(ev.key.slice(5))
  seq = seq.slice(-6)
  if(seq.join('') == 'UpDownUpUpDownRight'){
    showGIF()
  }
}

showGIF = () => {
    let img = document.querySelector('img')
    img.src = image_url
    img.style.display = 'block'
}

preloadGIF = () => {

  let url = 'https://api.giphy.com/v1/gifs/random?api_key=YGD5bJjlP0OYshZLKMj7tp5YXbaD81mo&tag=funny&limit=1'
  fetch(url, {
    headers:{
      'Content-Type': 'application/json', 
    }
  }).then(raw => raw.json()).then(body => {
    image_url = body.data.image_url
  }).catch(er => console.error(er))

}

let image_url = ''
document.addEventListener('keydown', handleKey)
preloadGIF()
console.log('Hint, It\'s: Up Down Up Up Down Right')
