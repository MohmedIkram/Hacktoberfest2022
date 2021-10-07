const getInterval = (updatedTimeStamp, format) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timeParam = { second, minute, hour, day };
  return Math.floor(updatedTimeStamp / timeParam[format]);
}

export const formatTimeUpdated = (date) => {
  const updatedDate = Date.parse(date);
  const modifiedUpdate = (new Date(updatedDate)).toDateString()
  const daysInterval = getInterval(Date.now() - updatedDate, "day");

  if(daysInterval >= 30){
    const [_, month, day, year] = /\s(\w{3})\s(\d{2})\s(\w{4})/.exec(modifiedUpdate);
    return `on ${parseInt(day)} ${month} ${(new Date()).getFullYear() === +year ? "" : year}`
  } else {
    let formats = ["day", "hour", "minute", "second"];
    const lastUpdated = formats.map(format =>{
      const when = getInterval(Date.now() - updatedDate, format)
      return `${when} ${when > 1 ? `${format}s`: format} ago`;
    }).filter( value => parseInt(value) !== 0);
    return lastUpdated[0];
  }
};

//============================= toggle account name Show ====================================//

export const showAccount = () => {
  let scrollPos = 0;
  const namePosition = document.querySelector('.name-details')?.offsetTop;
  const username = document.querySelector('.account-username');
  scrollPos = window.pageYOffset;
  if (!scrollPos || !username || !namePosition) return;
  if (scrollPos >= namePosition){
    username.classList.add('show');
  } else{
    username.classList.remove('show');
  }
}

//============================= toggle account name Show ====================================//
let tick = false;

// ================================ For sticky Navbar ==============================//
const addSticky = () => {
  let scrollPos = 0;
  const navbarSticky = document.querySelector('#nav2');
  const main = document.querySelector('main');
  scrollPos = window.pageYOffset;
  if (!main || !scrollPos || !navbarSticky) return;
  if (scrollPos >= 69){
    navbarSticky.classList.add('sticky');
    main.classList.add('sticky-after');
  } else{
    navbarSticky.classList.remove('sticky');
    main.classList.remove('sticky-after');
  }
}

const addStickyMobile = () => {
  let scrollPos = 0;
  const navbarStickyMobile = document.querySelector('#nav2-mobile');
  scrollPos = window.pageYOffset;
  if (!scrollPos || !navbarStickyMobile) return;
  if (scrollPos >= 424){
    navbarStickyMobile.classList.add('sticky');
  } else{
    navbarStickyMobile.classList.remove('sticky');
  }
}

// ================================ For sticky Navbar ==============================//
export const toggleNavSticky = () => {
  if (!tick) {
    window.requestAnimationFrame(() => {
      addSticky();
      showAccount();
      tick = false;
    });

    tick = true;
  }
}

export const toggleNavStickyMobile = () => {
  if (!tick) {
    window.requestAnimationFrame(() => {
      addStickyMobile();
      tick = false;
    });

    tick = true;
  }
};

