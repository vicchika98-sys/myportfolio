document.addEventListener("DOMContentLoaded", () => {
  const webTab = document.querySelector('[data-category="web"]');
  const graphicTab = document.querySelector('[data-category="graphic"]');
  const webProjects = document.getElementById("web-projects");
  const graphicProjects = document.getElementById("graphic-projects");
  const tabButtons = document.querySelectorAll(".tab-button");

  // Tab Switching
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      document.querySelector(".tab-button.active").classList.remove("active");
      button.classList.add("active");

      if (button.dataset.category === "web") {
        webProjects.classList.remove("d-none");
        graphicProjects.classList.add("d-none");
      } else {
        webProjects.classList.add("d-none");
        graphicProjects.classList.remove("d-none");
      }
    });
  });

  // Lightbox Logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".portfolio-img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("d-none");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("d-none");
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.add("d-none");
      lightboxImg.src = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const words = ["web developer", "graphic designer", "freelancer"];
  const typedWordElem = document.getElementById("typed-word");
  const typingSpeed = 100; // ms per letter typing
  const erasingSpeed = 70; // ms per letter erasing
  const delayBetweenWords = 2000; // pause between words

  let wordIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  function type() {
    const currentWord = words[wordIndex];

    if (!isErasing && charIndex <= currentWord.length) {
      // typing letters
      typedWordElem.textContent = currentWord.substring(0, charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isErasing && charIndex >= 0) {
      // erasing letters
      typedWordElem.textContent = currentWord.substring(0, charIndex);
      charIndex--;
      setTimeout(type, erasingSpeed);
    } else {
      // switch mode or next word
      if (!isErasing) {
        // pause before erasing
        isErasing = true;
        setTimeout(type, delayBetweenWords);
      } else {
        // move to next word
        isErasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      }
    }
  }

  // Start the typing effect
  type();
});



/*skills*/
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  const animateBars = () => {
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 50;

      if (isVisible && bar.style.width === "0%") {
        const target = bar.getAttribute("data-percentage");
        bar.style.width = target + "%";
      }
    });
  };

  window.addEventListener("scroll", animateBars);
  animateBars(); // run on load
});
document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const fullMessage = `Hello, my name is ${name}.
Phone: ${phone}
Email: ${email}
Message: ${message}`;

  const encodedMessage = encodeURIComponent(fullMessage);
  const whatsappNumber = "233597233955"; // Change this to your full WhatsApp number with country code (no "+")

  // Redirect to WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
});
