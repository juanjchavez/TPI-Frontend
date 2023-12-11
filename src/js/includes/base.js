import { dataBase, data, envs } from "./database";
import { checkOrCreateStorage, updateStorage } from "./localStorage";
import Swal from 'sweetalert2'

const app = document.getElementById('TPI-test');

const initApp = () => {
    checkOrCreateStorage();
    paintQuestions();
};

const makeSlug = (str) => {
    return str.replace(/\s+/g, '-').toLowerCase();
};

const paintQuestions = () => {
    // paint html for questions where all of them are range inputs from 1 to 10
    // add an option for comments under each question
    // on update the each selector should update the data.answers array

    data.answers.push([]);

    const title = dataBase[data.step].title;
    let slug = makeSlug(title);
    let questions = dataBase[data.step].questions;
    let html = `<h2>${title}</h2>`;
    html += `<div class="questions">`;
    questions.forEach((question, localIndex) => {
        html += `<div class="question">`;
        html += `<label for="${slug}-question-${localIndex}">${question}</label>`;
        html += '<div class="range">';
        html += `<input type="range" name="${slug}-question-${localIndex}" id="${slug}-question-${localIndex}" min="1" max="10" value="${(data.answers.length > data.step && data.answers[data.step][localIndex]) ? data.answers[data.step][localIndex].value : 0}" data-index="${localIndex}" data-slug="${slug}">`;
        html += `<span class="value" id="${slug}-value-${localIndex}">${(data.answers.length > data.step && data.answers[data.step][localIndex]) ? data.answers[data.step][localIndex].value : 0}</span>`;
        html += '</div>';
        html += `<input type="text" placeholder="Comente aqui" name="${slug}-comment-${localIndex}" id="${slug}-comment-${localIndex}" data-index="${localIndex}" data-slug="${slug}" value="${(data.answers.length > data.step && data.answers[data.step][localIndex]) ? data.answers[data.step][localIndex].comment : ''}">`;
        html += `</div>`;
    });
    html += `</div>`;
    html += `<div class="buttons">`;
    html += `<button class="prev" ${data.step === 0 ? 'disabled' : ''}>Anterior</button>`;
    html += `<button class="next">${data.step === dataBase.length -1  ? 'Enviar' : 'Siguiente'}</button>`;
    app.innerHTML = html;
    addEventListeners();
};

const confirmStepComplete = () => {
    return data.answers[data.step].filter(answer => answer !== null).length === 7;
};

const addEventListeners = () => {
    // add event listeners to all range inputs
    const ranges = document.querySelectorAll('input[type="range"]');
    ranges.forEach(input => {
        input.addEventListener('input', (e) => {
            let localIndex = e.target.dataset.index;
            let slug = e.target.dataset.slug;
            const value = getQuestionResult(localIndex, slug);
            document.getElementById(`${slug}-value-${localIndex}`).innerHTML = value.value;
            if (data.answers.length !== data.step + 1) {
                data.answers.push([]);
            }
            data.answers[data.step][localIndex] = value;
            updateStorage();
        });
    });

    // add event listeners to all comments inputs
    const comments = document.querySelectorAll('input[type="text"]');
    comments.forEach(input => {
        input.addEventListener('input', (e) => {
            let localIndex = e.target.dataset.index;
            let slug = e.target.dataset.slug;
            const value = getQuestionResult(localIndex, slug);
            if (data.answers.length !== data.step + 1) {
                data.answers.push([]);
            }
            data.answers[data.step][localIndex] = value;
            updateStorage();
        });
    });

    // add event listeners to buttons
    const buttons = document.querySelector('.buttons');
    if(buttons === null) return;
    buttons.addEventListener('click', (e) => {
        if (e.target.matches('.next')) {
            if(!confirmStepComplete()){
                Swal.fire({
                    title: 'Espera',
                    text: 'Todas las preguntas necesitan tener un valor entre 1 y 10',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                });
                return;
            }
            if (data.step === dataBase.length - 1) {
                submit();
                return;
            }
            data.step++;
            paintQuestions();
        }
        if (e.target.matches('.prev')) {
            data.step--;
            paintQuestions();
        }
    });

    const submit = () => {
        const url = `${envs.api}/new`;
        console.log(data, 'data');
        const info = {
            "name": envs.churchName,
            "data": data.answers.filter(el => el.length > 0),
        };
        console.log(info, 'info');
        const options = {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
            }
        };
        fetch(url, options)
            .then(response => {
                console.log(response, 'response');
                if (response.status !== 201) {
                    throw new Error(response.JSON());
                }else {
                    Swal.fire({
                        title: '¡Gracias!',
                        text: 'Hemos recibido tus respuestas',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un error al enviar tus respuestas',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    const getQuestionResult = (index, slug) => {
        let value = document.getElementById(`${slug}-question-${index}`).value;
        let comment = document.getElementById(`${slug}-comment-${index}`).value;
        const response = {
            "value": value,
            "comment": comment
        }
        return response;
    };
};


export { initApp };