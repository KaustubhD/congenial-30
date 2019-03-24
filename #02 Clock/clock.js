const HANDS = document.querySelectorAll('.hand')
var angles = []
var now = 0

function setDate(){
  now = new Date()

  angles[0] = now.getHours() * 3
  angles[1] = now.getMinutes() * 6
  angles[2] = now.getSeconds() * 6

  HANDS.forEach((hand, i) => {
    if(angles[i] == 0)
      hand.style.transitionDuration = '0ms'
    else
      hand.style.transitionDuration = '300ms'
    hand.style.transform = `rotate(${angles[i]}deg)`
  })
}

const interval = setInterval(setDate, 1000)