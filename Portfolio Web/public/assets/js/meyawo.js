/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$('#nav-toggle').click(function () {
  $(this).toggleClass('is-active');
  $('ul.nav').toggleClass('show');
});

window.addEventListener('scroll', function () {
  var button = document.getElementById('backToTop');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.getElementById('downloadCV').addEventListener('click', function () {
  // Code to handle button click event
});
// home page slideUp
const slideUpText = document.querySelector('.slide-up-text');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slideUpText.style.animation = 'slideUpAnimation 0.7s ease-out forwards';
      observer.unobserve(entry.target); // หยุดสังเกตการณ์หลังจากแอนิเมชันทำงาน
    } else {
      slideUpText.style.animation = 'none';
      slideUpText.style.opacity = '0';
      slideUpText.style.transform = 'translateY(50%)';
    }
  });
}, { threshold: 1 });

observer.observe(document.querySelector('.observer'));

// About section slideFromLeft
const aboutImgHolder = document.querySelector('.about-img-holder');
const aboutCaption = document.querySelector('.about-fedIn');

const observerOptions = {
  root: null,
  threshold: 0.01,
  rootMargin: '0px'
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-from-left');
      observer.unobserve(entry.target); // หยุดสังเกตการณ์หลังจากแอนิเมชันทำงาน
    } else {
      entry.target.classList.remove('slide-from-left');
    }
  });
};

const observer2 = new IntersectionObserver(observerCallback, observerOptions);

observer2.observe(aboutImgHolder);
observer2.observe(aboutCaption);

//service-card show slide
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");
  const serviceSection = document.querySelector("#service");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 200}ms`;
            card.classList.add("fade-in");
          });
          observer.unobserve(entry.target); // หยุดสังเกตการณ์หลังจากแอนิเมชันทำงาน
        } else {
          serviceCards.forEach((card) => {
            card.classList.remove("fade-in");
            card.style.animationDelay = "0s";
          });
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(serviceSection);
});

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const body = document.body;

// ฟังก์ชันเปลี่ยนธีม
function toggleTheme(isDark) {
  body.classList.toggle('dark-mode', isDark);
}

// เรียกใช้ฟังก์ชันเมื่อคลิกปุ่มสวิทช์
toggleSwitch.addEventListener('change', () => {
  toggleTheme(toggleSwitch.checked);
});

// ตรวจสอบโหมดที่ผู้ใช้เลือกไว้ก่อนหน้า
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
toggleTheme(isDarkMode);
toggleSwitch.checked = isDarkMode;