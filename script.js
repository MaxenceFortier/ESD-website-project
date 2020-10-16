let score = 0;

// make the pulse effect
function pulse() {
  cookie.classList.add("big_cookie");

  setTimeout(function() {
    cookie.classList.remove("big_cookie");
  }, 200);

  score = score + 1;

  scoreDisplay.innerText = score;
}

function attachAllLightboxListeners() {
  let els = document.querySelectorAll(".lb-img");

  els.forEach(function(element) {
    element.addEventListener("click", function(event) {
      lightbox.querySelector("img").src = event.target.src;
      lightbox.style.display = "flex";
    });
  });
}

function hideLightbox() {
  lightbox.style.display = "none";
}

attachAllLightboxListeners();

cookie.addEventListener("click", pulse);
