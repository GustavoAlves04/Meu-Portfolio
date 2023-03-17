const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY> 0);
});


const menu = document.querySelector('#menu-icone');
const navbar = document.querySelector('.navlista');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const observer = new IntersectionObserver( entries =>{
    console.log(entries)
    entries[0].target.classList.add('.init-hidden-off')

    Array.from(document.querySelectorAll('.init-hidden')).forEach( element =>{
        observer.observe(element)
    })

    
})

const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')

function Toggle() {
    if (btn.style.color == 'red') {
        btn.style.color = 'white'
    }
    else{
        btn.style.color = 'red'
    }
}

function Toggle2() {
    if (btn2.style.color == 'red') {
        btn2.style.color = 'white'
    }
    else{
        btn2.style.color = 'red'
    }
}

function Toggle3() {
    if (btn3.style.color == 'red') {
        btn3.style.color = 'white'
    }
    else{
        btn3.style.color = 'red'
    }
}

function Toggle4() {
    if (btn4.style.color == 'red') {
        btn4.style.color = 'white'
    }
    else{
        btn4.style.color = 'red'
    }
}

function Toggle5() {
    if (btn5.style.color == 'red') {
        btn5.style.color = 'white'
    }
    else{
        btn5.style.color = 'red'
    }
}

function Toggle6() {
    if (btn6.style.color == 'red') {
        btn6.style.color = 'white'
    }
    else{
        btn6.style.color = 'red'
    }
}