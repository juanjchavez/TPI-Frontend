import { data } from './database.js';
// validate if TPI-test exists on local storage
// if not, create it

const checkOrCreateStorage = () => {
    // check if localsotrage is available
    if (localStorage.getItem('TPI-test') === null) {
        data.timestamp = Date.now();
        localStorage.setItem('TPI-test', JSON.stringify(data));
    }
    // else check if timestamp is older than 1 day
    else {
        let timestamp = JSON.parse(localStorage.getItem('TPI-test')).timestamp;
        let now = Date.now();
        let diff = now - timestamp;
        let diffInDays = diff / (1000 * 3600 * 24);
        if (diffInDays > 5) {
            data.timestamp = Date.now();
            localStorage.setItem('TPI-test', JSON.stringify(data));
        }else{
            const localData = JSON.parse(localStorage.getItem('TPI-test'));
            data.step = localData.step;
            data.timestamp = localData.timestamp;
            data.answers = localData.answers;
        }
    }
};

const updateStorage = () => {
    // update timestamp
    data.timestamp = Date.now();
    localStorage.setItem('TPI-test', JSON.stringify(data));
};

export { checkOrCreateStorage, updateStorage };
