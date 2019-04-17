const player = document.querySelector('.container'),
video = player.querySelector('.vid-player'),
progressContainer = player.querySelector('.progress-bar'),
progress = progressContainer.querySelector('.progress-completed'),
playPause = player.querySelector('.playpause'),
skipButtons = player.querySelectorAll('[data-skip]'),
sliders = player.querySelectorAll('input[type="range"]')



togglePlayPause = ev => {
  const vidState = video.paused ? 'play' : 'pause'
  video[vidState]()
}

toggleButtonState = ev => {
  const text = video.paused ? 'Pl' : 'Pa'
  playPause.textContent = text
}

skip = ev => {
  console.log('Skipped')
  video.currentTime += parseInt(ev.srcElement.dataset.skip)
}

handleSlide = ev => {
  video[ev.srcElement.name] = ev.srcElement.value
}

handleProgress = ev => {
  const vidPercent = (video.currentTime / video.duration) * 100
  progress.style.flexBasis = `${vidPercent}%`
}

scrub = ev => {
  const newTime = (ev.offsetX / progressContainer.offsetWidth) * video.duration
  video.currentTime = newTime
}

handleKeys = ev => {
  console.log(ev.keyCode + " " + ev.key)
}

playPause.addEventListener('click', togglePlayPause)

video.addEventListener('click', togglePlayPause)
video.addEventListener('play', toggleButtonState)
video.addEventListener('pause', toggleButtonState)
video.addEventListener('timeupdate', handleProgress)

player.addEventListener('focus', () => {console.log('Focused !')})
player.addEventListener('blur', () => {console.log('Lost focus !')})
player.addEventListener('keydown', handleKeys)
console.dir(player)

skipButtons.forEach(skipBut => skipBut.addEventListener('click', skip))

sliders.forEach(slide => slide.addEventListener('input', handleSlide))

progressContainer.addEventListener('click', scrub)
