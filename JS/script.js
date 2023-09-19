let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    // Oculta el menú una vez que se selecciona una opcion
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// Función que aplica animaciones en habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills > 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("apex");
        habilidades[3].classList.add("lwc");
        habilidades[4].classList.add("omni");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creativ");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("autotidacta");
    }
}

// Detecto el scrolling para aplicar la animación de las barras deb habilidades
window.onscroll = function(){
    efectoHabilidades();
}