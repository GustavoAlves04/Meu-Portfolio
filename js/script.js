const observer = new IntersectionObserver( entries =>{
    console.log(entries)
    entries[0].target.classList.add('.init-hidden-off')

    Array.from(document.querySelectorAll('.init-hidden')).forEach( element =>{
        observer.observe(element)
    })

    
})