import { dataBase, envs } from "../database";

let app = null;

let data = [];

const initApp = (base) => {
    app = base;
    getData();
};

const makeSlug = (str) => {
    return str.replace(/\s+/g, '-').toLowerCase();
};

const getData = () => {
    const slug = makeSlug(envs.churchName);
    fetch(`/${slug}/results`)
        .then((response) => {
            if (response.status !== 200) {
                console.log(`Error: ${response.status}`, response.JSON());
                throw new Error(response.JSON());
            }else {
                return response.json();
            }
        })
        .then((resultData) => {
            data = resultData;
            paintResults();
        })
        .catch((err) => {
            console.log('err', err);
        });
};

const paintResults = () => {
    // paint html for questions where all of them are range inputs from 1 to 10
    // add an option for comments under each question
    // on update the each selector should update the data.answers array

    console.log(data);
    let html2 = '';
    let html = `<div class="results-wrapper"><h2>Resultados</h2>`;
    data.forEach((result) => {
        html += `<div class="answers">`;
        html2 = '<h3>Comentarios</h3>';
        for (let i = 0; i < result.length; i++) {
            const hasComment = result[i].filter(answer => answer.comment).length > 0;
            html += `<div class="answer">`
            html += `<div class="answer-title">${dataBase[i].title.toLowerCase()}</div>`;
            if(hasComment){
                html2 += `<h4>${dataBase[i].title.toLowerCase()}</h4>`;
            }
            
            let sum = 0;
            for(let j = 0; j < result[i].length; j++){
                sum += parseInt(result[i][j].value);
                html += `<div class="answer-item">${result[i][j].value}</div>`;
                if (result[i][j].comment) {
                    html2 += `<div class="comment"><span>${dataBase[i].questions[j]}</span><p>${result[i][j].comment}</p></div>`;
                }
            }
            html += `<div class="answer-item average">${(sum / result[i].length).toFixed(2)}</div>`;
            html += `</div>`;
        }
        html += `</div>${html2}`;
    });
        html += `</div>`;

    
    app.innerHTML = html;
};

export { initApp };