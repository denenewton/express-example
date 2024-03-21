
fetch('/images').
  then(resp => resp.json()).
  then(resp => {
    const imagens = resp

    let gallery = document.querySelector('.gallery')

    gallery.innerHTML += imagens.map(el => `
      <div class="image">
        <img src="${el.url}" alt="${el.originalname}">
      </div>
    `).join('')

  })