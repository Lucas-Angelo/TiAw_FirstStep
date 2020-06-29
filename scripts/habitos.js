const API_KEY = 'e86b7c2ec9584cff9bf3eeb802515300';

function exibeNoticias() {
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
var query = ' ';

function Homepage() {
    query = 'Bons hábitos';
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();

    let divtitulo = document.getElementById('titulo');
    let textotitulo = `<p><font size="5">Top notícias Brasil</font></p>`;
    divtitulo.innerHTML = textotitulo;

}


window.onload = function() {
    Homepage();
}