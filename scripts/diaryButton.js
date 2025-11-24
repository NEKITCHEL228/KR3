const button = document.getElementById('diary-courses-button');

button.addEventListener('click', () => addRecord());

function addRecord() {
    const overlay = document.createElement('div');
    overlay.classList.add('diary-form-overlay');

    const windowBox = document.createElement('div');
    windowBox.classList.add('diary-form-window');

    const form = document.createElement('form');
    form.innerHTML = `
        <h3>Выберете куда записывать</h3>

        <select id="form-type">
            <option value="- Выбрать -">- Выбрать -</option>
            <option value="Мой учебный процесс">Мой учебный процесс</option>
            <option value="Текущие курсы">Текущие курсы</option>
        </select>

        <div id="dynamic-fields" style="margin-top: 15px;"></div>

        <button id="close-modal" style="margin-top: 15px;">Закрыть</button>
    `;

    windowBox.appendChild(form);
    overlay.appendChild(windowBox);
    document.body.appendChild(overlay);

    document.getElementById("close-modal").onclick = (e) => {
        e.preventDefault();
        overlay.remove();
    };

    const fields = document.getElementById("dynamic-fields");
    const typeSelector = document.getElementById("form-type");

    typeSelector.onchange = () => {
        const type = typeSelector.value;
        fields.innerHTML = "";

        if (type === "Мой учебный процесс") {
            fields.innerHTML = `
                <label>Введите новость</label><br>
                <input type="text" id="news-text"><br><br>
                <button id="news-button" type="button">Добавить</button>
            `;
        } else if (type === "Текущие курсы") {
            fields.innerHTML = `
                <label>Введите курс</label><br>
                <input type="text" id="course-text"><br><br>
                <label>Введите процент выполнения</label><br>
                <input type="number" id="procent-number" min="0" max="100"><br><br>
                <button id="course-button" type="button">Добавить</button>
            `;
        }

        // обработчики для кнопок
        const newsButton = document.getElementById('news-button');
        if (newsButton) {
            newsButton.addEventListener('click', () => {
                const parent = document.querySelector('.diary-window');
                const text = document.getElementById('news-text').value.trim();
                if (!text) return;

                const record = document.createElement('p');
                record.classList.add('diary-window-record');
                record.textContent = text;
                parent.appendChild(record);

                overlay.remove();
            });
        }

        const courseButton = document.getElementById('course-button');
        if (courseButton) {
            courseButton.addEventListener('click', () => {
                const parent = document.querySelector('.course-grid');
                const buttonElement = document.getElementById('diary-courses-button');

                const course = document.getElementById('course-text').value.trim();
                const procent = document.getElementById('procent-number').value.trim();
                if (!course || !procent) return;

                const record = document.createElement('div');
                record.classList.add('course-item'); // ключевой момент — копируем класс

                // создаем label с уникальным id
                const inputId = 'course-' + Date.now(); 
                const label = document.createElement('label');
                label.setAttribute('for', inputId);
                label.textContent = course;

                const progress = document.createElement('progress');
                progress.id = inputId;
                progress.max = 100;
                progress.value = procent;

                const span = document.createElement('span');
                span.textContent = procent + "%";

                record.appendChild(label);
                record.appendChild(progress);
                record.appendChild(span);

                parent.appendChild(record);

                overlay.remove();
            });
        }
    };
}
