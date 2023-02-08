document.addEventListener("DOMContentLoaded", function() {
    const esButton = document.querySelector("#esButton");
    const ptButton = document.querySelector("#ptButton");
    const enButton = document.querySelector("#enButton");
  
    esButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  
    ptButton.addEventListener("click", function() {
      window.location.href = "cv-pt.html";
    });
  
    enButton.addEventListener("click", function() {
      window.location.href = "cv-en.html";
    });
  });

const image = document.getElementById('photo_cv');

function adjustImageWidth() {
  if (window.innerWidth >= 1024) {
    image.style.width = '50%';
  } else {
    image.style.width = '90%';
  }
}

adjustImageWidth();
window.addEventListener('resize', adjustImageWidth);

const deviceType = () => {
  return (window.innerWidth <= 768) ? 'mobile' : 'desktop';
};

const setTextSize = () => {
  const type = deviceType();
  const element = document.querySelector('footer');
  
  if (type === 'mobile') {
    element.style.fontSize = '8px';
  } else if (type === 'desktop') {
    element.style.fontSize = '16px';
  }
};

window.addEventListener('resize', setTextSize);
window.addEventListener('load', setTextSize);