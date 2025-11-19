const button = document.getElementById('diary-courses-button');

console.log(button);

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

        <div id="dynamic-fields" style="margin-top: 15px";></div>

        <button id="close-modal" style="margin-top: 15px;">Закрыть</button>
    `;

    windowBox.appendChild(form);
    overlay.appendChild(windowBox);
    document.body.appendChild(overlay);

    document.getElementById("close-modal").onclick = () => overlay.remove();

    const fields = document.getElementById("dynamic-fields");
    const typeSelector = document.getElementById("form-type");

    typeSelector.onchange = () => {
        const type = typeSelector.value;

        if (type == "Мой учебный процесс") {
            fields.innerHTML = `
            <label>Введите новость</label><br>
            <input type="text" id="news-text"><br><br>

            <button id="news-button" type="button">Добавить</button>
        `;
        }

        else if (type == "Текущие курсы") {
            fields.innerHTML = `
            <label>Введите курс</label><br>
            <input type="text" id="course-text"><br><br>

            <label>Введите процент выполнения</label><br>
            <input type="number" id="procent-number"><br><br>

            <button id="course-button" type="button">Добавить</button>
        `;
        }

        else {
            fields.innerHTML = "";
        }

        // === обработчики СОЗДАЁМ здесь, когда кнопки уже появились ===

        const newsButton = document.getElementById('news-button');
        if (newsButton) {
            newsButton.addEventListener('click', () => {
                const parent = document.querySelector('.diary-window');
                const text = document.getElementById('news-text').value;

                if (text === "") {return;}

                const record = document.createElement('p');
                record.textContent = text;

                parent.appendChild(record);

                document.getElementById('close-modal').click();
            });
        }

        const courseButton = document.getElementById('course-button');
        if (courseButton) {
            courseButton.addEventListener('click', () => {
                const parent = document.querySelector('.diary-corses-list');
                const course = document.getElementById('course-text').value;
                const procent = document.getElementById('procent-number').value;

                if (course === "" || procent === "") {return;}

                const record = document.createElement('div');
                const label = document.createElement('label');
                const progress = document.createElement('progress');
                const span = document.createElement('span');

                label.textContent = course + " ";

                progress.max = 100;
                progress.value = procent;

                span.innerHTML = procent + "%";

                record.appendChild(label);
                record.appendChild(progress);
                record.appendChild(span);

                parent.appendChild(record);

                document.getElementById('close-modal').click();
            })
        }
    };
}

button.addEventListener('click', () => addRecord());