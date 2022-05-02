const makeBigger = () => {
   contentfont = parseFloat(window.getComputedStyle(document.querySelector(".content")).getPropertyValue('font-size'));
   h1font = parseFloat(window.getComputedStyle(document.querySelector("h1")).getPropertyValue('font-size'));
   document.querySelector(".content").style.fontSize = (contentfont + 1) + 'px';
   document.querySelector("h1").style.fontSize = (h1font + 1) + 'px';
};

const makeSmaller = () => {
   contentfont = parseFloat(window.getComputedStyle(document.querySelector(".content")).getPropertyValue('font-size'));
   h1font = parseFloat(window.getComputedStyle(document.querySelector("h1")).getPropertyValue('font-size'));
   document.querySelector(".content").style.fontSize = (contentfont - 1) + 'px';
   document.querySelector("h1").style.fontSize = (h1font - 1) + 'px';
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);