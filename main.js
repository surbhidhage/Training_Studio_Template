
function first_class() {
    var button_4 = document.getElementById('fourth_button');
    var button_3 = document.getElementById('third_button');
    var button_1 = document.getElementById('first_button');
    var button_2 = document.getElementById('second_button');

    if (button_1.style.display == 'block') {
        button_1.style.display = 'none'
        button_2.style.display = 'none'
        button_3.style.display = 'none'
        button_4.style.display = 'none'


    }
    else {
        button_1.style.display = 'block'
        button_2.style.display = 'none'
        button_3.style.display = 'none'
        button_4.style.display = 'none'


    }
}

function second_class() {
    var button_4 = document.getElementById('fourth_button');
    var button_3 = document.getElementById('third_button');
    var button_2 = document.getElementById('second_button');
    var button_1 = document.getElementById('first_button');

    if (button_2.style.display == 'block') {
        button_2.style.display = 'none'
        button_1.style.display = 'none'
        button_3.style.display = 'none'
        button_4.style.display = 'none'


    }
    else {
        button_2.style.display = 'block'
        button_1.style.display = 'none'
        button_3.style.display = 'none'
        button_4.style.display = 'none'


    }
}

function third_class() {
    var button_4 = document.getElementById('fourth_button');

    var button_3 = document.getElementById('third_button');
    var button_2 = document.getElementById('second_button');
    var button_1 = document.getElementById('first_button');

    if (button_3.style.display == 'block') {
        button_3.style.display = 'none'
        button_2.style.display = 'none'
        button_1.style.display = 'none'
        button_4.style.display = 'none'

    }
    else {
        button_4.style.display = 'none'
        button_3.style.display = 'block'
        button_2.style.display = 'none'
        button_1.style.display = 'none'

    }
}
function fourth_class() {
    var button_4 = document.getElementById('fourth_button');
    var button_3 = document.getElementById('third_button');
    var button_2 = document.getElementById('second_button');
    var button_1 = document.getElementById('first_button');

    if (button_4.style.display == 'block') {
        button_4.style.display = 'none'
        button_3.style.display = 'none'
        button_2.style.display = 'none'
        button_1.style.display = 'none'
    }
    else {
        button_4.style.display = 'block'
        button_3.style.display = 'none'
        button_2.style.display = 'none'
        button_1.style.display = 'none'
    }
}