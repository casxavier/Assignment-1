var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function submitformbutton() {
    let f=true;

    let nameval = document.forms["form"]["n"].value;

    if ( nameval == "") {
    f=false;
    return false;
  }
    let emailval = document.forms["form"]["e"].value;

    if (emailval == "") {
        f=false;
        return false;
      }

      let commentval = document.forms["form"]["c"].value;

      if (commentval == "") {
          f=false;
          return false;
        }

        if(f == true)
        {
            alert("Thank you for your time!");
        }
        
    }

    



