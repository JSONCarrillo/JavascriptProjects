//form Validation

function formValidate() {
    var user = document.forms['myForm']['user'].value;
    var pass = document.forms['myForm']['password'].value;
    var error = document.getElementsByClassName('error');
    if (user == '') {
        error[0].innerHTML = 'Please enter a valid username!'
        return false;
    }
    else if (pass == '') {
        error[1].innerHTML = 'Please enter a valid password!'
        return false;
    }
}