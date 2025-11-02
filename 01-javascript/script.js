//const botones = document.querySelectorAll('.btn-apply-job')

/*botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.textContent = 'Aplicado'
        boton.classList.add('is-applied')
        boton.disable = true
    })
})*/

/*
const searchInput = document.querySelector('#empleos-search-input')

searchInput.addEventListener('input', function(){
    console.log(searchInput.value)
})

searchInput.addEventListener('blur', function(){
    console.log('Se dispara cuando el campo pierde el foco')
})

const searchForm = document.querySelector('#empleos-search-form')

searchForm.addEventListener('submit', function(event){
   event.preventDefault() //Evita que se recargue la pagina
   //..... Todo lo que yo te diga aquí
    console.log('submit')
})*/

const jobsListingSection = document.querySelector('.results')

const filterLocation = document.querySelector('#filter-location')
const filterTechnology = document.querySelector('#filter-technology');
const filterLevel = document.querySelector('#filter-experience-level');

const mensaje = document.querySelector('#filter-selected-value')
const containerJobs = document.querySelector('.results')

//Metodo para actualizar botones de las cards
jobsListingSection.addEventListener('click', function(event){
    const element = event.target

    if(element.classList.contains('btn-apply-job')){
        element.textContent = 'Aplicado'
        element.classList.add('is-applied')
        element.disable = true
    }
})


//Muestra un mensaje con el filtro seleccionado
//Muestra los resultados de acuerdo al filtro de ubicacion
filterLocation.addEventListener('change', function(){
    const jobs = document.querySelectorAll('.card-job')
    const selectedValue = filterLocation.value


    if(selectedValue){
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    }else{
        mensaje.textContent = ''
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad

        if(selectedValue === '' || selectedValue === modalidad){
            job.style.display = 'block'
        }else{
            job.style.display = 'none'
        }

    })
})

filterTechnology.addEventListener('change', function(){
    const jobs = document.querySelectorAll('.card-job')
    const selectedValue = filterTechnology.value

    if(selectedValue){
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    }else{
        mensaje.textContent = ''
        mensaje1.textContent = 'No se encontraron resultados'
    }

    jobs.forEach(job => {
        const technology = job.dataset.technology

        if(selectedValue === '' || selectedValue === technology){
            job.style.display = 'block'
        }else{
            job.style.display = 'none'
        }

    })

})


fetch("./data.json")
    .then((response)=> {
        return response.json()
    })
    .then((jobs) => {
        jobs.forEach(job => {
            const article = document.createElement('article')
            article.classList.add('card-job')

            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.tecnology = job.data.tecnology

            article.innerHTML = `<h2>${job.titulo}</h2>
                    <small>${job.empresa} | ${job.ubicacion}</small>
                    <div>
                        <p>${job.descripcion}</p>
                        <button type="submit" class="btn-apply-job">Aplicar</button>
                    </div>`

        containerJobs.appendChild(article)
            
        });
    });
    