

var button = document.querySelector('button');

button.addEventListener('click', function () {

    if (button.innerHTML === 'follow') {
        button.innerHTML = 'FOLLOWING';
        button.style.backgroundColor = 'tomato';
    }

    else {
        button.innerHTML = "follow";
        button.style.backgroundColor = "green"
    }
})


