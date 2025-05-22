$(document).ready(function () {
    // Toggle navigation menu
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        $("#mainListDiv").toggleClass("show_list");
        
        // If you want to fade in/out the list
        $("#mainListDiv").fadeToggle(); // Use fadeToggle for smoother toggle
    });

    // Handle overlay sliding
    const overlay = $('.overlay');
    overlay.addClass('slide-in'); // Add the class to slide in the overlay

    // Remove the overlay after the animation ends (optional)
    overlay.on('transitionend', function () {
        overlay.hide(); // Hides the overlay after transition
    });
});



var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);


const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

// Example random names and testimonials
const testimonials = [
  { name: "John Doe", text: "This service has been amazing! Highly recommend." },
  { name: "Jane Smith", text: "A fantastic experience, I will definitely come back!" },
  { name: "Samuel Clark", text: "The quality was top-notch, and the customer service was superb." },
  { name: "Jeremy Fabro", text: "I couldn't be happier with my purchase. Great job!" },
  { name: "Emily Johnson", text: "A delightful experience. Everything was perfect from start to finish." },
];

function updateCarousel() {
  // Remove all previous classes
  images.forEach(img => img.classList.remove('center', 'left-blur', 'right-blur'));

  // Determine the indexes for left and right images
  const leftIndex = (currentIndex - 1 + images.length) % images.length;
  const rightIndex = (currentIndex + 1) % images.length;

  // Add classes to main, left, and right images
  images[currentIndex].classList.add('center');
  images[leftIndex].classList.add('left-blur');
  images[rightIndex].classList.add('right-blur');

  // Update the testimonial content based on the current image
  const currentTestimonial = testimonials[currentIndex];
  document.querySelector('.testimonies h3').textContent = currentTestimonial.name;
  document.querySelector('.testimonies p').textContent = `"${currentTestimonial.text}"`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

// Make images clickable to activate on click
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize the carousel on load
updateCarousel();

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});


// Scrolling Effect




