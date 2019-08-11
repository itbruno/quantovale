// Method to validate values
const Validate = (...params) => {
    let isValid = true;

    params.map(e => {
        if(e.value === '') {
            e.classList.add('error');
            isValid = false;
        } else {
            e.classList.remove('error');
        }
    });

    return isValid;
};

export default Validate;