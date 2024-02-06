function abrirNovaPagina() {
    window.open('r34.html', '_blank');
}
function abrirNovaPagina2() {
    window.open('911.html', '_blank');
}
function abrirNovaPagina3() {
    window.open('jetta.html', '_blank');
}
function abrirNovaPagina4() {
    window.open('subaru.html', '_blank');
}
function abrirNovaPagina5() {
    window.open('gtr.html', '_blank');
}
function abrirWppGTR() {
  window.open('https://wa.me/5573991315358?text=Ol%C3%A1,%20vim%20do%20site%20SportLux%20e%20tenho%20interesse%20em%20comprar%20o%20carro%20%22Nissan%20GT-R%20R34%20Skyline%22,%20podemos%20conversar?', '_blank');
}














let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}