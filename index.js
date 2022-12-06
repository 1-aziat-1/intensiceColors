const cols = document.querySelectorAll('.col');
const cols1 = document.querySelector('.col');

const genereateRandomColors = () => {
  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  };
  return '#' + color;
};

const setRandomColors = () => {
  cols.forEach((item) => {
    const color =  genereateRandomColors();
    const text = item.querySelector('h2');
    text.textContent = color;
    item.style.background = color;
  });
};

setRandomColors();