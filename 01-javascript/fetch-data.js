const containerJobs = document.querySelector('.results')

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
            article.dataset.technology = job.data.technology

            article.innerHTML = `<h2 class="job-title">${job.titulo}</h2>
                    <small>${job.empresa} | ${job.ubicacion}</small>
                    <div>
                        <p>${job.descripcion}</p>
                        <button type="submit" class="btn-apply-job">Aplicar</button>
                    </div>`

        containerJobs.appendChild(article)
            
        });
    });
    