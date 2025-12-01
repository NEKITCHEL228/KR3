const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('showSlideDown');
        }
    });
}, {
    threshold: 0.3
});

const hiddenElement5 = document.querySelector('.diary-progress');
const hiddenElement6 = document.querySelector('.diary-courses-area');

observer.observe(hiddenElement5);
observer.observe(hiddenElement6);