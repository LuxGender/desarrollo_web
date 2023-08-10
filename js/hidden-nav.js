let posicioInicial = window.scrollY


window.onscroll =  function ocultarMostrarNavBar(){
    const desplazado = window.scrollY
    const navBar = document.getElementById('navBar')

    if(posicioInicial >= desplazado){
        navBar.style.top = '0px'
        navBar.style.opacity = '100'
        navBar.style.transition = '0.6s'
        navBar.style.pointerEvents = 'visible'
    }else{
        navBar.style.top = '-100px'
        navBar.style.opacity = '0'
        navBar.style.transition = '0.6s'
        navBar.style.pointerEvents = 'none'
    }
}