let seq = []
handleKey = ev => {
  console.log(ev.key)
  seq.push(ev.key.slice(5))
  //console.log(seq)
  //seq.shift()
  seq = seq.slice(-6)
  console.log(seq)
  if(seq.join('') == 'UpDownUpUpDownRight'){
    console.log('%cDingDingDing !', 'font-size: 30px;font-family: Helvetica')
    showGIF()
  }
}

showGIF = () => {
  let url = 'http://api.giphy.com/v1/gifs/random?api_key=YGD5bJjlP0OYshZLKMj7tp5YXbaD81mo&q=funny&limit=1'
  fetch(url, {
    //mode: 'no-cors',
    'Access-Control-Allow-Origin':'*',    
  }).then(raw => raw.json()).then(body => {
    console.log(body.data)
    let img = document.querySelector('img')
    img.src = body.data.url
    img.style.display = 'block'
  })
}

document.addEventListener('keydown', handleKey)

