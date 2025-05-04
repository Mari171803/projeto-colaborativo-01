// Código para mudar as cores dos temas claro e escuro
const seletor = document.querySelector("#selectTheme");  

seletor.addEventListener("change", function(){

    if(seletor.value == "light"){
        document.documentElement.setAttribute("modo-light-dark", "light")
    } 

    else if(seletor.value == "dark"){
        document.documentElement.setAttribute("modo-light-dark", "dark")
    } 

    else {
        document.documentElement.setAttribute("modo-light-dark")
    }
    
})