/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

var flag = 0;

const dyslexia = () => {
    if (flag == 0) {
      document.querySelector("body").classList.add("dyslexia-mode");
      flag = 1;
    } else {
      document.querySelector("body").classList.remove("dyslexia-mode");
      flag = 0;
    }
};

document.getElementById("dyslexia-toggle").addEventListener('click', dyslexia);