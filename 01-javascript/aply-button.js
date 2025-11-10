const jobsListingSection = document.querySelector('.results')
//Metodo para actualizar botones de las cards
jobsListingSection.addEventListener('click', function(event){
    const element = event.target

    if(element.classList.contains('btn-apply-job')){
        element.textContent = 'Aplicado'
        element.classList.add('is-applied')
        element.disable = true
    }
})