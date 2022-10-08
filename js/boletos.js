const lista = document.querySelector('#listado')

fetch('../js/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((paquete) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${paquete.titulo}</h4>
                <p>$ ${paquete.precio}</p>
                <p class="list-group-item">${paquete.caracteristicas}</p>
                <form action="../index.html">
                  <input type="submit" value="Comprar aquí">
                </form>
                <hr/>
            `
   
            lista.append(li)
        })
    })
