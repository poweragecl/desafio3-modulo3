const tercero = document.querySelector('#tercero');
const keyBlock = document.querySelector('#key');
const keyBlock2 = document.querySelector('#key2');

//primer punto
tercero.addEventListener("click", () => {
    tercero.style.backgroundColor = "black";
});


let color;

document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        color = 'pink';
        keyBlock.style.backgroundColor = "purple";

    } else if (e.key === 's') {
        color = 'orange';
        keyBlock.style.backgroundColor = "grey";

    } else if(e.key === 'd'){
        color = 'lightblue';
        keyBlock.style.backgroundColor = "pink";

    } else if(e.key === 'q'){
        keyBlock2.style.backgroundColor = "lightblue";

    } else if(e.key === 'w'){
        keyBlock2.style.backgroundColor = "orange";

    } else if(e.key === 'e'){
        keyBlock2.style.backgroundColor = "brown";
    }
});



