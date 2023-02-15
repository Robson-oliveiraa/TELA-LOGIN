let checkbox = document.getElementById('Check')
let list = ["#inputOne", "#inputTwo"];
checkbox.addEventListener('change', function () {
    for (let i = 0; i <= 2; i ++) {
        let senhar = document.querySelector(list[i]);

        if(checkbox.checked){
            senhar.type = 'text';
        } else {
            senhar.type = 'password';
        }
    }
});