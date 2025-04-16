document.addEventListener('DOMContentLoaded',()=>{
    let skill = document.querySelector('.skill')
    const skills = [
        "bootstrap.png",
        "css-3.png",
        "django.png",
        "java.png",
        "java.png",        
        "biblioteca.png",
        "js.png",
        "node-js.png",
        "python.png",
    ]
    let index = 0

    const showSkills = () =>{
        const interval = setInterval(()=>{
            if(index < skills.length){
                skill.src = `./imagens/${skills[index]}`
                index = (index + 1) % skills.length
            }else{
                clearInterval(interval)
            }
        },3000)
    }
    showSkills()
})