const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('showSlideDown');
        }
    });
}, {
    threshold: 0.3
});

const hiddenElement7 = document.querySelector('.contacts');

observer.observe(hiddenElement7);