var listadeproyectos = [
    {
        nombre: "Travel360",
        img: [
            "./assets/home1.png",
            "./assets/home2.png",
            "./assets/home3.png",
            "./assets/home4.png"
        ],
        link: "https://viviana-osinaga.github.io/Turismo-360.github.io/"

    },
    {
        nombre: "mievento",
        img: [
            "./assets/mievento1.png",
            "./assets/mievento2.png"
        ],
        link: "https://viviana-osinaga.github.io/MiEvento.github.io/"
    },
    {
        nombre: "tatucero",
        img: [
            "./assets/tatucero1.png",
            "./assets/tatucero2.png"
        ],
        link: "https://viviana-osinaga.github.io/Tatucero.github.io/"
    }
]

var experiencia = document.getElementById("container-experiencias")
var result = ""
for (let i = 0; i < listadeproyectos.length; i++) {
    for (let j = 0; j < listadeproyectos[i].img.length; j++) {
    
    result += '<a href="'+ listadeproyectos[i].link +'"><img src="'+ listadeproyectos[i].img[j] + '" alt="Home de uno de mis sitios web"></a>'
    }
}
experiencia.innerHTML = result
