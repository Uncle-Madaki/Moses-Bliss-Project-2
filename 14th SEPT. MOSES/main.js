function showSidebar() {
    const sidebar = document.querySelector('.sidebar #desktop-nav')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar #desktop-nav')
    sidebar.style.display = 'none'
}




// New JS slide
const sliders = [
    { id: "slider1", currentSlideIndex: 0 },
    { id: "slider2", currentSlideIndex: 0 },
    { id: "slider3", currentSlideIndex: 0 }
];

// Function to show the current slide for a specific slider
function showSlide(sliderIndex, slideIndex) {
    const slider = sliders[sliderIndex];
    const slides = document.querySelector(`#${slider.id} .slides`);
    const slideCount = slides.children.length;

    if (slideIndex >= slideCount) {
        slider.currentSlideIndex = 0; // Loop back to the first slide
    } else if (slideIndex < 0) {
        slider.currentSlideIndex = slideCount - 1; // Loop back to the last slide
    } else {
        slider.currentSlideIndex = slideIndex;
    }

    const offset = -slider.currentSlideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Function to move the slider for a specific slider
function moveSlide(sliderIndex, step) {
    const slider = sliders[sliderIndex];
    showSlide(sliderIndex, slider.currentSlideIndex + step);
}

// Automatically move each slider every 5 seconds
setInterval(() => {
    sliders.forEach((slider, index) => {
        moveSlide(index, 1);
    });
}, 7000); // Adjust timing as needed



function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = 'url()';
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach
    {
        content => {
            content.classList.remove('active');
            if (content.classList.contains(title)) {
                content.classList.add('active');
            }
        }
    }
}



const banner = document.querySelector(".img-slide, .img-slide2");

banners.forEach(banner => {

    const bannerContent = Array.from(banner.children);

    bannerContent.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", true);
        banner.appendChild(duplicateNode);
    });
});




// New Code....



document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission

    const form = e.target; // Get the form element
    const formData = new FormData(form); // Collect the form data

    try {
        // Send form data to Formspree via AJAX
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // On successful form submission, redirect to the download page
            window.location.href = 'download.html'; // Set your download page URL here
        } else {
            alert('There was a problem submitting the form. Please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});


function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList, toggle('active')
}

