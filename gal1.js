function openModal() {
    document.getElementById("miGaleria").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("miGaleria").style.display = "none";
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
    const slides = document.getElementsByClassName("misimagenes");
    const dots = document.getElementsByClassName("miniatura cursor");
    const describeText = document.getElementById("describe");
  
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
  
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  
    if (describeText) {
      describeText.innerHTML = dots[slideIndex - 1].alt || "Imagen sin descripción";
    }
  }