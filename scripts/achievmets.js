const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const AchExplanation = document.getElementById('ach-explanation');
const AchExplanationText = document.getElementById('ach-explanation-text');

const list = document.querySelector('.ach-list');
const items = document.querySelectorAll('.ach-item');

let index = 0;
const AchText = [
    "Отсутствие личной жизни с 9 класса на протяжении 4000 ч.",
    `Эта история началась очень давно, тогда, когда деревья были большими, а лужи — глубокими, как Марианская впадина. Мне было пять лет...`,
    "fgkjdfgoijsg[oij]fd"
]

function showAch() {
    list.style.transform = `translateX(${-index * 100}%)`;
}

function ChangeAchExplanationText(index) {
    AchExplanationText.textContent = AchText[index];
}

nextButton.onclick = () => {
    index = (index + 1) % items.length;
    showAch(index);
    ChangeAchExplanationText(index);
};

prevButton.onclick = () => {
    index = (index - 1 + items.length) % items.length;
    showAch(index);
    ChangeAchExplanationText(index);
};

const buttons = list.querySelectorAll('.ach-item');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        AchExplanation.classList.add('effect');

        setTimeout(() => {
            AchExplanation.classList.remove('effect');
        }, 800);
    });
});

