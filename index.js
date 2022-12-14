const cols = document.querySelectorAll('.col');
const cols1 = document.querySelector('.col');

document.addEventListener('keydown', event => {
  event.preventDefault();
  if (event.code.toLowerCase() === 'space') {
    setRandomColors();
  }
});

document.addEventListener('click', event => {
  const type = event.target.dataset.type;
  if (type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i' 
      ? event.target 
      : event.target.children[0];

    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  }
})

function setRandomColors() {
  cols.forEach((item) => {
    const isLocked = item.querySelector('i').classList.contains('fa-lock');
    const color =  chroma.random();
    const text = item.querySelector('h2');
    const button = item.querySelector('button');

    if (isLocked) return;


    text.textContent = color;
    item.style.background = color;
    setTextColor(text, color);
    setTextColor(button, color);
  });
};

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}



setRandomColors();