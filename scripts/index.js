const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('showSlideDown');
        }
    });
}, {
    threshold: 0.3
});

const hiddenElement1 = document.querySelector('.main-info');
const hiddenElement2 = document.querySelector('.main-skills-area');
const hiddenElement3 = document.querySelector('.best-projects-area');

observer.observe(hiddenElement1);
observer.observe(hiddenElement2);
observer.observe(hiddenElement3);
