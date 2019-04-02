function playSound(e){
  const element = document.querySelector(`.key[data-key="${e.keyCode}"]`) ? e.eventType == 'keydown' : e.target
  
  if(!element)
    return
  
  const audio = element.querySelector('audio')

  element.classList.add('playing')
  //Constant keypress does not play the audio at the same rate
  audio.currentTime = 0 // <== Fix

  audio.play()
}

function removeClass(e){
  if(e.propertyName === 'transform')
    this.classList.remove('playing')
}

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', playSound)
  key.addEventListener('transitionend', removeClass)
})
document.addEventListener('keydown', playSound)