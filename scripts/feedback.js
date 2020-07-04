// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "categoria": "amigos",
            "email": "Sincere@april.biz",
            "comentario": "teste",
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "categoria": "familia",
            "comentario": "gostei",            
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",            
            "categoria": "trabalho",
            "email": "Nathan@yesenia.net",
            "comentario": "otimo site",          
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",          
            "categoria": "trabalho",
            "email": "Julianne.OConner@kory.org",
            "comentario": "Me ajudou muito",       
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",          
            "categoria": "familia",
            "email": "Lucio_Hettinger@annie.ca",
            "comentario": "TOP",             
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",           
            "categoria": "trabalho",
            "email": "Karley_Dach@jasper.info",
            "comentario": "Melho site",              
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",            
            "categoria": "amigos",
            "email": "Telly.Hoeger@billy.biz", 
            "comentario": "Gostei muito dos exercicios",             
        },
      
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",           
            "categoria": "familia",
            "email": "Sherwood@rosamond.me",  
            "comentario": "Gostei",           
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",            
            "categoria": "amigos",
            "email": "Chaim_McDermott@dana.io", 
            "comentario": "Site de qualidade",             
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",         
            "categoria": "amigos",
            "email": "Rey.Padberg@karina.biz",
            "comentario": "Otimo",              
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "categoria": contato.categoria,
        "comentario": contato.comentario,  
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email, 
    db.data[index].categoria = contato.categoria,
    db.data[index].comentario = contato.comentario,
    

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}