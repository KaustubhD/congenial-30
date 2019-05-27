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

let x
let drawToCanvas = () => {
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight

  x = setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
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

getMedia()


video.addEventListener('canplay', drawToCanvas)
