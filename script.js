const title = document.querySelector('.kran_text');
const text = title.innerHTML;
title.innerHTML = '';

function rec(i = 0) {
  title.innerHTML += text[i];
  i++;
  if (i < text.length) {
    setTimeout(() => {
      rec(i);
    }, 50);
  }
}
rec();
const kran_title = document.querySelector('.kran_str');

window.addEventListener('load', () => {
  kran_title.style.transform = `translateX(${scrollY})`
  console.log(scrollY);
});
console.log(scrollY);