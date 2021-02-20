function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')

const extractTopPos = (pos) => {
  if (!pos) return 100
  return parseInt(pos.slice(0, -2))
}

const extractLeftPos = (pos) => {
  if (!pos) return 50
  return parseInt(pos.slice(0, -2))
}

const moveCoin = () => {
  const y = Math.floor(Math.random() * window.innerHeight)
  const x = Math.floor(Math.random() * window.innerWidth)
  coin.style.top = `${y}px`
  coin.style.left = `${x}px`
}

moveCoin()

window.addEventListener('keydown', function(e) {
  const currTop = extractTopPos(avatar.style.top)
  const currLeft = extractLeftPos(avatar.style.left)

  if (e.key === 'ArrowDown' || e.key === 's') {
    avatar.style.top = `${currTop + 50}px`
    console.log(`moved down!  top: ${currTop}px, left: ${currLeft}px`)
  } else if (e.key === 'ArrowUp' || e.key === 'w') {
    avatar.style.top = `${currTop - 50}px`
    console.log(`moved up!    top: ${currTop}px, left: ${currLeft}px`)
  } else if (e.key === 'ArrowLeft' || e.key === 'a') {
    avatar.style.left = `${currLeft - 50}px`
    avatar.style.transform = 'scale(-1,1)'
    console.log(`moved left!  top: ${currTop}px, left: ${currLeft}px`)
  } else if (e.key === 'ArrowRight' || e.key === 'd') {
    avatar.style.left = `${currLeft + 50}px`
    avatar.style.transform = 'scale(1,1)'
    console.log(`moved right! top: ${currTop}px, left: ${currLeft}px`)
  }

  if (isTouching(avatar, coin)) moveCoin()
})
