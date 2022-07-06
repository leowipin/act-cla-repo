ejecutarCodigo = () => {
    //alert("Hola mundo!")
    let titulo1 = document.getElementById("titulo1")
    titulo1.innerText = "Album de fotos"

    let textMutedClass = document.getElementsByClassName("text-muted")
    elemento = textMutedClass[1]
    elemento.innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`

    let pTag = document.getElementsByTagName("p")
    pTag[2].setAttribute("class", "d-none")

    let imagenes = [{ url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino' },
    { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia' },
    { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá' },
    { url: 'https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'img4' },
    { url: 'https://images.unsplash.com/photo-1653874403269-f4f0dba02f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'img5' },
    { url: 'https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'img6' },
    { url: 'https://images.unsplash.com/photo-1653917215257-40db75a62dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'img7' },
    { url: 'https://images.unsplash.com/photo-1653919523364-1e7e221d2917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'img8' },
    { url: 'https://images.unsplash.com/photo-1653908836785-b519864cca16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'img9' }]

    
    let svgs = document.querySelectorAll("svg")
    
   
    for(let i=1; i<svgs.length; i++){
        let imagen = document.createElement("img")
        imagen.setAttribute("src",imagenes[i-1].url)
        imagen.setAttribute("alt",imagenes[i-1].alt)
        imagen.setAttribute("width","100%")
        imagen.setAttribute("height","225")
        svgs[i].replaceWith(imagen)
    }

}
ejecutarCodigo()

