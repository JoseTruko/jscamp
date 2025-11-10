
const mensaje = document.querySelector('#filter-selected-value')
const contador = document.getElementById('input-text')
const filterLocation = document.querySelector('#filter-location')
const filterExperience = document.querySelector('#filter-experience-level')
const filterTechnology = document.querySelector('#filter-technology')
const searchInput = document.getElementById('empleos-search-input')


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

//filtra por nivel de experiencia
filterExperience.addEventListener('change', function(){
    const jobs = document.querySelectorAll('.card-job')
    const selectedValue = filterExperience.value

    if(selectedValue){
        mensaje.textContent = `Has seleccionado: ${selectedValue}`
    }else{
        mensaje.textContent = ''
    }

    jobs.forEach(job => {
        const nivel = job.dataset.nivel

        if(selectedValue === '' || selectedValue === nivel){
            job.style.display = 'block'
        }else{
            job.style.display = 'none'
        }

    })
})

//filtrar por tecnología
filterTechnology.addEventListener('change', function(){
    const selectedTech = filterTechnology.value.toLowerCase()
    const jobs = document.querySelectorAll('.card-job')

    if(selectedTech){
        mensaje.textContent = `Has seleccionado: ${selectedTech}`
    }else{
        mensaje = textContent = ''
    }

    jobs.forEach(job => {
        const jobTechs = job.dataset.technology.split(',')
        //const nivel = job.dataset.nivel;

        if(selectedTech === '' || jobTechs.includes(selectedTech)){
            job.style.display = 'block'
        }else{
            job.style.display = 'none'
        }
    })
})


//Filtrar por el inpt
searchInput.addEventListener('input', function(){
    const searchValue = searchInput.value.toLowerCase();
    const jobs = document.querySelectorAll('.card-job')
    let count = 0;

    if(searchValue){
        mensaje.textContent = `Has escrito: ${searchValue}`
    }else{
        mensaje.textContent = '';
    }

    jobs.forEach (job => {
        const titleElement = job.querySelector('.job-title');
        const titleText = titleElement.textContent.toLowerCase();

        if(titleText.includes(searchValue)) {
            job.style.display = 'block';
            count++;
        }else{
            job.style.display = 'none';
        }
    })

    if (searchValue === '') {
        contador.textContent = ''
    }else{
        contador.textContent = `Mostrando: ${count} resultados`;
    }

})

