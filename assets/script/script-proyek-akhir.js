// Toggle hamburger menu
const navList = document.querySelector(".nav-list");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navList.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

// ======================================================
let slideIndex = 0;
showSlides();

// Fungsi untuk menampilkan slide secara otomatis
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 20000); // Change image every 2 seconds
}

// ======================================================
// Toggle faq acordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    //toggle untuk kelas active-acordion dan higlight tombol
    this.classList.toggle("active-acordion");

    // menyembunyikan dan menampilkan panel yang aktif
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "rem";
    }
  });
}

// ======================================================
// Animasi ketika scrol
const the_animation = document.querySelectorAll(".animation");

// Menambahkan atau menghapus kelas scroll-animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
      } else {
        entry.target.classList.remove("scroll-animation");
      }
    });
  },
  { threshold: 0.5 }
);

// Loop melalui semua elemen dengan kelas "animation"
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}
