function validar() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (password == "" && email == "") {
        alert('Todos os campos precisam ser preenchidos corretamente');
    } else
    if (password.length < 8) {
        alert("Senha deve ter no minimo 8 caracteres");
    } else {
        window.location.href = "aula2.html";
    }
}

var dadosLista = [];

var listNames = [];
var listProducts = [];
var listValues = [];

function salvarDados()
{
    let nomeUser = document.getElementById("nomeUser").value;
    let prodUser = document.getElementById("prodUser").value;
    let precoUser = document.getElementById("precoUser").value;

    if (nomeUser) {
        listNames.push(nomeUser);
        listProducts.push(prodUser);
        listValues.push(precoUser);

        criarLista();

        document.getElementById("nomeUser").value = '';
        document.getElementById("prodUser").value = '';
        document.getElementById("precoUser").value = '';

        // console.log(dadosLista);
    }
}

//Funão para a criação de array
function criarLista()
{
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Produto</th><th>Preço</th><th>Ações</th></tr>";

    for(let i=0; i <= (listNames.length-1); i++)
    {
        table += "<tr><td>" + listNames[i] + "</td><td>" + listProducts[i] + "</td><td>" + listValues[i] + "</td></td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = table;
    }


    document.getElementById('value').innerHTML = countValues();
}

//Função para a edição da array
function editar(i)
{
    document.getElementById('nomeUser').value = listNames[(i - 1)];
    listNames.splice(listNames[(i - 1), 1]);

    document.getElementById('prodUser').value = listProducts[(i - 1)];
    listProducts.splice(listNames[(i - 1), 1]);

    document.getElementById('precoUser').value = listValues[(i - 1)];
    listValues.splice(listNames[(i - 1), 1]);
}


//Função para o exclusão da array
function excluir(i)
{
    listNames.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);

    listProducts.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);

    listValues.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}

function countValues() {
    let valuesTotal = 0;
    listValues.forEach(values => {
        valuesTotal += parseInt(values);
    });
    return valuesTotal;
};