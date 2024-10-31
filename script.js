function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    //Pegar a tag img
    const img = document.querySelector('#profile img')

    //Substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-diogenes-dark2.png")
        img.setAttribute("alt", "Foto de Diógenes Souza de óculos escuro")
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar-diogenes-dark2.png')
        img.setAttribute('alt', 'Foto de Diógenes Souza de óculos escuro')
    }



    
    
    
    
    
}