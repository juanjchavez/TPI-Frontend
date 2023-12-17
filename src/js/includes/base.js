import { initApp as initResults } from './Views/results';
import { initApp as initQuestions } from './Views/questions';
const app = document.getElementById('TPI-test');

const initApp = () => {
    //if local has /results, show results
    if (window.location.href.indexOf('results') > -1) {
        initResults(app);
    }else{
        // else show questions
        initQuestions(app);
    }
};

export { initApp };