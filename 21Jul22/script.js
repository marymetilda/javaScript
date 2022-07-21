function textOnChange(arg) {
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if (error) {
        label.innerText = error;
    } else {
        label.innerText = '';
    }
}

function validate(value){
    const regex = /^[a-z][a-z0-9_]*$/i;
    const result = regex.test(value);
    if (result) {
        return '';
    } else {
        return 'Invalid String';
    }
}