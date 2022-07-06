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
                etiquetaSelect.addEventListener('change', (event) => {
                    fetch("https://dataserverdaw.herokuapp.com/escritores/frases")
                        .then(response => response.json())
                        .then(data => {
                            data.frases.array.forEach(element => {
                                console.log("sa")
                            });
                            
                            
                        })
                        .catch(console.error);
                })
            }

        })
        .catch(console.error);
}

window.addEventListener("DOMContentLoaded", (cargarDatos))
