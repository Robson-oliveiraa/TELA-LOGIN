let checkbox = document.getElementById('Check')
let senhar = document.getElementById('inputOne')

checkbox.addEventListener('change', function () {
    if(checkbox.checked){
        senhar.type = 'text';
    } else {
        senhar.type = 'password';
    }
});


let checkboxx = document.getElementById('Titl')
let senharr = document.getElementById('inputTwo')

checkboxx.addEventListener('change', function () {
    if(checkboxx.checked){
        senharr.type = 'text';
    } else {
        senharr.type = 'password';
    }
});