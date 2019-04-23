let seq = []
handleKey = ev => {
  //console.log(ev.key)
  seq.push(ev.key.slice(5))
  seq = seq.slice(-6)
  //console.log(seq)
  if(seq.join('') == 'UpDownUpUpDownRight'){
    //console.log('%cDingDingDing !', 'font-size: 30px;font-family: Helvetica')
    showGIF()
  }
}

showGIF = () => {
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=YGD5bJjlP0OYshZLKMj7tp5YXbaD81mo&tag=funny&limit=1'
  fetch(url, {
    headers:{
      'Content-Type': 'application/json', 
    }
  }).then(raw => raw.json()).then(body => {
    let img = document.querySelector('img')
    img.src = body.data.image_url
    img.style.display = 'block'
  })
}

document.addEventListener('keydown', handleKey)
console.log('Hint, It\'s: Up Down Up Up Down Right')
