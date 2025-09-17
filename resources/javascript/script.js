const title = document.getElementById("mainTitle");

function randomColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// On hover (mouse enters)
title.addEventListener("mouseover", () => {
  title.style.color = randomColor();
});

// On hover out (mouse leaves)
title.addEventListener("mouseout", () => {
  title.style.color = randomColor();
});
