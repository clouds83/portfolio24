const header = document.getElementById('header')

let prevScroll = window.scrollY
let prevDirection = 0
const threshold = 0

const checkScroll = function () {
  const curScroll = window.scrollY

  addStickyBg(curScroll)

  const curDirection = curScroll > prevScroll ? 2 : 1

  if (curDirection !== prevDirection) {
    toggleHeader(curDirection, curScroll)
    prevDirection = curDirection
  }

  prevScroll = curScroll
}

const toggleHeader = function (direction, scrollY) {
  if (direction === 2 && scrollY > threshold) {
    header.classList.add('hide')
  } else if (direction === 1) {
    header.classList.remove('hide')
  }
}

const addStickyBg = function (curScroll) {
  if (curScroll > 0) {
    header.classList.add('sticky-bg')
  } else {
    header.classList.remove('sticky-bg')
  }
}

window.addEventListener('scroll', checkScroll)
