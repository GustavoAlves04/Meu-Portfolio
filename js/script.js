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
