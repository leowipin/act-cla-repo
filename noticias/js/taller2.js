cargarDatos = () => {

    fetch("https://dataserverdaw.herokuapp.com/noticias/fuente/")
        .then(response => response.json())
        .then(data => {
            let array = data.newssources
            for (let i = 0; i < array.length; i++) {
                let source = array[i].source
                let plantilla = `<option value="${source}">"${source}"</option>`;
                let tipo = document.getElementById("tipo")
                tipo.innerHTML += plantilla
                tipo.addEventListener("click", evento)
            }







        })
        .catch(console.error);
}

evento = (evento) => {

    fetch("https://dataserverdaw.herokuapp.com/noticias/xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            let news = xml.getElementsByTagName("new")
            for (let e = 0; e < news.length; e++) {
                let title = news[e].querySelector('title').textContent
                let description = news[e].querySelector('description').textContent
                let url = news[e].querySelector('url').textContent
                let author = news[e].querySelector('author').textContent
                let plantillaNoticia = `<div class="col">
                    <strong>"${title}"</strong>"${description}"<a href="${author}">"${author}"</a>
                </div>`
                let respuesta = document.getElementById("respuesta")
                respuesta.innerHTML += plantillaNoticia
            }

        })
        .catch(console.error);

}

window.addEventListener("DOMContentLoaded", (cargarDatos))
