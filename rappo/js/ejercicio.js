cargarDatos = () => {


    fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");
            let escritores = xml.getElementsByTagName("escritor")
            for (let i = 0; i < escritores.length; i++) {
                let nombre = escritores[i].querySelector('nombre').textContent
                let id = escritores[i].querySelector('id').textContent
                let plantillaOption = `<option value = "${id}">${nombre}</option>`
                let etiquetaSelect = document.querySelector('select')
                etiquetaSelect.innerHTML += plantillaOption
            }
            let etiquetaSelect = document.querySelector('select')
            etiquetaSelect.addEventListener('change', (event) => {
                fetch("https://dataserverdaw.herokuapp.com/escritores/frases")
                    .then(response => response.json())
                    .then(data => {
                        let arrayFrases = data.frases
                        let frases = document.getElementById('frases')
                        frases.innerHTML = "";
                        for (let i2 = 0; i2 < arrayFrases.length; i2++) {
                            if (arrayFrases[i2].id_autor.toString() === etiquetaSelect.value) {
                                let plantilla = `<div class="col-lg-3">
                                                    <div class="test-inner ">
                                                        <div class="test-author-thumb d-flex">
                                                            <div class="test-author-info">
                                                                <h4>${arrayFrases[i2].id_autor.toString()}</h4>                                            
                                                            </div>
                                                        </div>
                                                        <span>${arrayFrases[i2].texto}</span>
                                                        <i class="fa fa-quote-right"></i>
                                                     </div>
                                                </div>`
                                frases = document.getElementById('frases')
                                frases.innerHTML += plantilla
                            }
                        }
                    })
                    .catch(console.error);
            })

        })
        .catch(console.error);
}

window.addEventListener("DOMContentLoaded", (cargarDatos))
