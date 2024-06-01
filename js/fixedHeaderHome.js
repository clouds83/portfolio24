const doc = document.documentElement;
const header = document.getElementById('header-top');
let prevScroll = window.scrollY || doc.scrollTop;
let prevDirection = 0;

const checkScroll = () => {
  const curScroll = window.scrollY || doc.scrollTop;
  const curDirection = curScroll > prevScroll ? 2 : 1;

  if (curDirection !== prevDirection) {
    toggleHeader(curDirection, curScroll);
  }

  if (curScroll < 20) {
    header.classList.add('hide');
  }

  prevScroll = curScroll;
  prevDirection = curDirection;
};

const toggleHeader = (direction, scrollY) => {
  if (direction === 2 && scrollY > 20) {
    header.classList.add('hide');
  } else if (direction === 1) {
    header.classList.remove('hide');
  }
};

window.addEventListener('scroll', checkScroll);
