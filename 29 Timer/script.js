let intervalId

const timerDiv = document.querySelector('.display__time-left')
const endTimeDiv = document.querySelector('.display__end-time')
const timerTriggers = document.querySelectorAll('[data-time]')


function timer(seconds){
  clearInterval(intervalId)
  const now = Date.now()
  const then = now + seconds * 1000
  
  displayTimeLeft(seconds)
  endingAtWhatTime(then)
  
  let timeLeft
  intervalId = setInterval(() => {
    timeLeft = Math.round( (then - Date.now()) / 1000 )
    if(timeLeft < 0){
      clearInterval(intervalId)
      return
    }
    displayTimeLeft(timeLeft)
  }, 1000)

}


function displayTimeLeft(time){
  const min = Math.floor(time / 60)
  const sec = time % 60
  const displayString =  `${reg(min)}:${reg(sec)}`

  timerDiv.textContent = displayString
  document.title = displayString
}

function reg(timeUnit){
  return `${timeUnit < 10 ? '0' : ''}${timeUnit}`

}

function endingAtWhatTime(timeStamp){
  const ending = new Date(timeStamp)
  endTimeDiv.textContent = 'See you at ' + ending.toTimeString().slice(0, 5)
}


timerTriggers.forEach(trigg => trigg.addEventListener('click', function(){
  timer(parseInt(this.dataset.time))
}))

document.customForm.addEventListener('submit', function(e){
  e.preventDefault()
  console.log(this.minutes.value)
  timer(this.minutes.value * 60)
  this.reset()
})
