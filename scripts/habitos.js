function inserecard() {


    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (i = 0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto = texto + `
        <div class="col-lg-12">
            <div class="box-noticia">
                <img src="${noticia.urlToImage}" alt="">
                <span class="titulo">${noticia.title}</span><br>
                <span class="creditos">${data.toLocaleDateString ()} -
                    ${noticia.source.name} -
                    ${noticia.author}</span><br>
                <span class="text">
                ${noticia.content} <a href="${noticia.url}" target="_blank" >Leia mais ...</a>
                </span>
            </div>
            </div>
        `;
    }

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}



window.onload = function() {
    //Homepage();
    //insereCard();

    function salvarImagens() {
        let inputImg = document.getElementById("inputImage");

        if (inputImg.files && inputImg.files[0]) {
            //Verificar se tem imagem selecionada
            var readerImg = new FileReader();

            readerImg.onload = function(e) {
                //Apos ler imagem, salvar o codigo DataURI no e
                //alert("Leu a imagem: \n" + e.target.result);

                let imagens = [];

                //Tentar carregar o array de imagens do localstorage
                let db_imgs = localStorage.getItem("db_imgs"); //Ler essa string do localstorage

                if (db_imgs) {
                    //Fazer isso só SE exisir algo
                    imagens = JSON.parse(db_imgs);
                }

                //Insere a imagem no array
                let novaImagem = { imagem: e.target.result };
                imagens.push(novaImagem);

                //Salvar o array de imagens no LocalStorage
                localStorage.setItem("db_imgs", JSON.stringify(imagens));
            };

            readerImg.readAsDataURL(inputImg.files[0]);
        }
    }

    function exibirImagens() {
        let tela = document.getElementById("tela");
        let textoHTML = "";

        // Fazer alguma coisa montando o textoHTML

        let imagens = [];
        let db_imgs = localStorage.getItem("db_imgs"); //Ler essa string do localstorage
        if (db_imgs) { //Fazer isso só SE exisir algo
            imagens = JSON.parse(db_imgs);
        };

        for (i = 0; i < imagens.length; i++) {
            textoHTML += `<div class="card">
            <img class="card-img-top" width="200" height="200" src="${imagens[i].imagem}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
            `;
        }

        // Mostrar o código na div tela
        tela.innerHTML = textoHTML;
    }


    botaoSalvar = document.getElementById("btnSalvarImagens");
    botaoSalvar.addEventListener("click", salvarImagens);

    botaoSalvar = document.getElementById("btnExibirImagens");
    botaoSalvar.addEventListener("click", exibirImagens);


}