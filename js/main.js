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

function salvarUser()
{
    let nomeUser = document.getElementById("nomeUser").value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        criarLista();
        document.getElementById("nomeUser").value = '';
        //console.log(dadosLista);
    }
}

//Funão para a criação de array
function criarLista()
{
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for(let i=0; i <= (dadosLista.length-1); i++)
    {
        table += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = table;
    }
}

//Função para a edição da array
function editar(i)
{
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
}


//Função para o exclusão da array
function excluir(i)
{
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);
}