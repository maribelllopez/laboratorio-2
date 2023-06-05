fetch('data.json')
.then(response=>response.json())
.then(data => {
    const tarjetasContainer = document.getElementById('tarjetas-container');

    data.forEach(Object => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        
        const titulo = document.createElement('h2');
        titulo.textContent = Object.titulo;

        const contenido = document.createElement('p');
        contenido.textContent = objeto.contenido;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(contenido);

        targetasContainer.appendChild(tarjeta);
    });
})

.catch(error => console.error(error));