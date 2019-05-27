const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');





let getMedia = () => {
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
  .then(stream => {
    console.log(stream)
    video.srcObject = stream
    video.play()
  })
  .catch(err => {
    console.error('Maybe its just a permission error, or', err)
  })
}

let x, w, h, px
let drawToCanvas = () => {
  w = video.videoWidth
  h = video.videoHeight

  canvas.width = w
  canvas.height = h


  x = setInterval(() => {
    ctx.drawImage(video, 0, 0, w, h)

    px = ctx.getImageData(0, 0, w, h)
    px = redFilter(px)
    //px = rgbSplit(px)

    ctx.putImageData(px, 0, 0)
  }, 16)
}

let takeAPhoto = () => {
  snap.currentTime = 0
  snap.play()

  let data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'Yeaaa!')
  link.innerHTML = `<img src="${data}" alt="Screenshot from webcam"/>`
  strip.insertBefore(link, strip.firstChild)
}


let redFilter = (px) => {
  for(let i = 0; i < px.data.length; i += 4){
    px.data[i] += 150
    px.data[i + 1] += 80
    px.data[i + 2] -= 100
  }
  return px
}



let rgbSplit = (px) => {
  for(let i = 0; i < px.data.length; i += 4){
    px.data[i - 100] = px.data[i]
    px.data[i + 200] = px.data[i + 1]
    px.data[i + 300] = px.data[i + 2]
  }
  return px
}


let greenScreen = (px) => {
  const levels = {}
  document.querySelectorAll('.rgb input').forEach(input => {
    levels[input.name] = input.value
  })
  let r,g,b
  for(let i = 0; i < px.data.length; i += 4){
    r = px.data[i]
    g = px.data[i + 1]
    b = px.data[i + 3]

    if(r >= levels.rmin && r <= levels.rmax &&
       g >= levels.gmin && g <= levels.gmax &&
       b >= levels.bmin && b <= levels.bmax)
       px.data[i + 3] = 0
  }
  return px
}



getMedia()


video.addEventListener('canplay', drawToCanvas)
